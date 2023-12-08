import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const { RNBidmadGDPRModule } = NativeModules;
const eventEmitter = new NativeEventEmitter(RNBidmadGDPRModule);

export enum RNBidmadUMPStatus {
    Unknown = 0,
    Required = 1,
    NotRequired = 2,
    Obtained = 3,
}

interface RNBidmadGDPRCallbacks {
    onConsentInfoUpdateSuccess?: () => void;
    onConsentInfoUpdateFailure?: (formError: string) => void;
    onConsentFormLoadSuccess?: () => void;
    onConsentFormLoadFailure?: (formError: string) => void;
    onConsentFormDismissed?: (formError: string|null) => void;
}

class RNBidmadGDPR {
    instanceId: string;
    private callbacks?: RNBidmadGDPRCallbacks;

    constructor(instanceId: string) {
        this.instanceId = instanceId;

        eventEmitter.addListener('BidmadGDPRCallback', (event: any) => {
            if (event.instanceId === this.instanceId) {
                switch (event.action) {
                    case 'onConsentInfoUpdateSuccess':
                        this.callbacks?.onConsentInfoUpdateSuccess?.();
                        break;
                    case 'onConsentInfoUpdateFailure':
                        this.callbacks?.onConsentInfoUpdateFailure?.(event.error);
                        break;
                    case 'onConsentFormLoadSuccess':
                        this.callbacks?.onConsentFormLoadSuccess?.();
                        break;
                    case 'onConsentFormLoadFailure':
                        this.callbacks?.onConsentFormLoadFailure?.(event.error);
                        break;
                    case 'onConsentFormDismissed':
                        if (event.error === undefined) {
                            this.callbacks?.onConsentFormDismissed?.(null);
                            break;
                        }

                        this.callbacks?.onConsentFormDismissed?.(event.error);
                        break;
                }
            }
        });
    }

    static async create(): Promise<RNBidmadGDPR | null> {
        let ad: RNBidmadGDPR | null = null;

        if (['android', 'ios'].includes(Platform.OS)) {
            const instanceId = await RNBidmadGDPRModule.createInstance();
            ad = new RNBidmadGDPR(instanceId);
        }

        return ad;
    }

    setCallbacks(callbacks: RNBidmadGDPRCallbacks) {
        this.callbacks = callbacks;
    }

    async setDebug(testDeviceId: string, isEEA: boolean) {
        await RNBidmadGDPRModule.setDebug(this.instanceId, testDeviceId, isEEA);
    }

    async requestConsentInfoUpdate() {
        await RNBidmadGDPRModule.requestConsentInfoUpdate(this.instanceId);
    }

    async isConsentFormAvailable(): Promise<boolean> {
        const isAvailable = await RNBidmadGDPRModule.isConsentFormAvailable(this.instanceId);
        return isAvailable;
    }

    async loadForm() {
        await RNBidmadGDPRModule.loadForm(this.instanceId);
    }

    async getConsentStatus(): Promise<RNBidmadUMPStatus> {
        const status = RNBidmadGDPRModule.getConsentStatus(this.instanceId);
        return status;
    }

    async reset() {
        await RNBidmadGDPRModule.reset(this.instanceId);
    }

    async showForm() {
        await RNBidmadGDPRModule.showForm(this.instanceId);
    }
}

export default RNBidmadGDPR;