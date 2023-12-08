import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const { RNBidmadInterstitialModule } = NativeModules;
const eventEmitter = new NativeEventEmitter(RNBidmadInterstitialModule);

interface RNBidmadInterstitialCallbacks {
  onLoad?: () => void;
  onLoadFail?: (error: string) => void;
  onShow?: () => void;
  onClick?: () => void;
  onClose?: () => void;
}

class RNBidmadInterstitial {
  instanceId: string;
  private callbacks?: RNBidmadInterstitialCallbacks;

  constructor(instanceId: string) {
    this.instanceId = instanceId;
    eventEmitter.addListener('BidmadInterstitialCallback', (event: any) => {
      if (event.instanceId === this.instanceId) {
        switch (event.action) {
          case 'onInterstitialLoad':
            this.callbacks?.onLoad?.();
            break;
          case 'onInterstitialLoadFail':
            this.callbacks?.onLoadFail?.(event.error);
            break;
          case 'onInterstitialShow':
            this.callbacks?.onShow?.();
            break;
          case 'onInterstitialClose':
            this.callbacks?.onClose?.();
            break;
        }
      }
    });
  }

  static async create(iOSZoneId: string, androidZoneId: string) {
    let ad: RNBidmadInterstitial | null = null;

    if (Platform.OS === 'android') {
      const instanceId = await RNBidmadInterstitialModule.createInstance(
        androidZoneId
      );
      ad = new RNBidmadInterstitial(instanceId);
    } else if (Platform.OS == 'ios') {
      const instanceId = await RNBidmadInterstitialModule.createInstance(
        iOSZoneId
      );
      ad = new RNBidmadInterstitial(instanceId);
    }

    return ad;
  }

  async load() {
    await RNBidmadInterstitialModule.load(this.instanceId);
  }

  async show() {
    await RNBidmadInterstitialModule.show(this.instanceId);
  }

  async isLoaded(): Promise<boolean> {
    const loadStatus = await RNBidmadInterstitialModule.isLoaded(
      this.instanceId
    );
    return loadStatus;
  }

  setCallbacks(callbacks: RNBidmadInterstitialCallbacks) {
    this.callbacks = callbacks;
  }

  dispose() {
    RNBidmadInterstitialModule.disposeInstance(this.instanceId);
  }
}

export default RNBidmadInterstitial;
