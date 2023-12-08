import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const { RNBidmadRewardModule } = NativeModules;
const eventEmitter = new NativeEventEmitter(RNBidmadRewardModule);

interface RNBidmadRewardCallbacks {
  onLoad?: () => void;
  onLoadFail?: (error: string) => void;
  onShow?: () => void;
  onComplete?: () => void;
  onSkip?: () => void;
  onClick?: () => void;
  onClose?: () => void;
}

class RNBidmadReward {
  instanceId: string;
  private callbacks?: RNBidmadRewardCallbacks;

  constructor(instanceId: string) {
    this.instanceId = instanceId;

    eventEmitter.addListener('BidmadRewardCallback', (event: any) => {
      if (event.instanceId === this.instanceId) {
        switch (event.action) {
          case 'onRewardLoad':
            this.callbacks?.onLoad?.();
            break;
          case 'onRewardLoadFail':
            this.callbacks?.onLoadFail?.(event.error);
            break;
          case 'onRewardShow':
            this.callbacks?.onShow?.();
            break;
          case 'onRewardComplete':
            this.callbacks?.onComplete?.();
            break;
          case 'onRewardSkip':
            this.callbacks?.onSkip?.();
            break;
          case 'onRewardClick':
            this.callbacks?.onClick?.();
            break;
          case 'onRewardClose':
            this.callbacks?.onClose?.();
            break;
        }
      }
    });
  }

  static async create(
    iOSZoneId: string,
    androidZoneId: string
  ): Promise<RNBidmadReward | null> {
    let ad: RNBidmadReward | null = null;

    if (Platform.OS === 'android') {
      const instanceId = await RNBidmadRewardModule.createInstance(
        androidZoneId
      );
      ad = new RNBidmadReward(instanceId);
    } else if (Platform.OS == 'ios') {
      const instanceId = await RNBidmadRewardModule.createInstance(iOSZoneId);
      ad = new RNBidmadReward(instanceId);
    }

    return ad;
  }

  async load() {
    await RNBidmadRewardModule.load(this.instanceId);
  }

  async show() {
    await RNBidmadRewardModule.show(this.instanceId);
  }

  async isLoaded(): Promise<boolean> {
    const loadStatus = await RNBidmadRewardModule.isLoaded(this.instanceId);
    return loadStatus;
  }

  setCallbacks(callbacks: RNBidmadRewardCallbacks) {
    this.callbacks = callbacks;
  }

  dispose() {
    RNBidmadRewardModule.disposeInstance(this.instanceId);
  }
}

export default RNBidmadReward;
