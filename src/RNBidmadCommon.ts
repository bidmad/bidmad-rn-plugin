import { NativeModules, Platform } from 'react-native';

export enum RNBidmadTrackingAuthorizationStatus {
  NotDetermined = 0,
  Restricted,
  Denied,
  Authorized,
  LessThaniOS14,
}

const { RNBidmadCommonModule } = NativeModules;

class RNBidmadCommon {
  static async reqAdTrackingAuthorization(): Promise<RNBidmadTrackingAuthorizationStatus> {
    let permission = RNBidmadTrackingAuthorizationStatus.NotDetermined;

    if (Platform.OS === 'ios') {
      permission =
        (await RNBidmadCommonModule.reqAdTrackingAuthorization()) as RNBidmadTrackingAuthorizationStatus;
    }

    return permission;
  }

  static async initializeSdk(
    iOSAppKey: string,
    androidAppKey: string
  ): Promise<boolean> {
    let initStatus = false;

    if (Platform.OS === 'ios') {
      initStatus = await RNBidmadCommonModule.initializeSdk(iOSAppKey);
    } else if (Platform.OS === 'android') {
      initStatus = await RNBidmadCommonModule.initializeSdk(androidAppKey);
    }

    return initStatus;
  }

  static async setChildDirectedAds(isChildDirectedAds: boolean): Promise<void> {
    if (Platform.OS === 'ios') {
      await RNBidmadCommonModule.setIsChildDirectedAds(isChildDirectedAds);
    } else if (Platform.OS === 'android') {
      await RNBidmadCommonModule.setChildDirectedAds(isChildDirectedAds);
    }
  }

  static async isChildDirectedTreatment(): Promise<boolean | null> {
    let isChild = null;

    if (['ios', 'android'].includes(Platform.OS)) {
      isChild = await RNBidmadCommonModule.isChildDirectedTreatment();
    }

    return isChild;
  }

  static async setDebug(isDebug: boolean): Promise<void> {
    if (Platform.OS === 'ios') {
      await RNBidmadCommonModule.setIsDebug(isDebug);
    } else if (Platform.OS === 'android') {
      await RNBidmadCommonModule.setDebug(isDebug);
    }
  }

  static async isDebug(): Promise<boolean> {
    let isDebug = false;

    if (['ios', 'android'].includes(Platform.OS)) {
      isDebug = await RNBidmadCommonModule.isDebug();
    }

    return isDebug;
  }

  static async setTestDeviceId(testDeviceId: string): Promise<void> {
    if (['ios', 'android'].includes(Platform.OS)) {
      await RNBidmadCommonModule.setTestDeviceId(testDeviceId);
    }
  }

  static async getTestDeviceId(): Promise<string | null> {
    let id = null;

    if (Platform.OS === 'ios') {
      id = await RNBidmadCommonModule.testDeviceId();
    } else if (Platform.OS === 'android') {
      id = await RNBidmadCommonModule.getTestDeviceId();
    }

    return id;
  }
  static async setCuid(cuid: string): Promise<void> {
    if (['ios', 'android'].includes(Platform.OS)) {
      await RNBidmadCommonModule.setCuid(cuid);
    }
  }

  static async getCuid(): Promise<string | null> {
    let cuid = null;

    if (Platform.OS === 'ios') {
      cuid = await RNBidmadCommonModule.cuid();
    } else if (Platform.OS === 'android') {
      cuid = await RNBidmadCommonModule.getCuid();
    }

    return cuid;
  }

  static async setUseServerSideCallback(
    useServerSideCallback: boolean
  ): Promise<void> {
    if (['ios', 'android'].includes(Platform.OS)) {
      await RNBidmadCommonModule.setUseServerSideCallback(
        useServerSideCallback
      );
    }
  }

  static async getUseServerSideCallback(): Promise<boolean> {
    let useSSC = false;

    if (Platform.OS === 'ios') {
      useSSC = await RNBidmadCommonModule.useServerSideCallback();
    } else if (Platform.OS === 'android') {
      useSSC = await RNBidmadCommonModule.getUseServerSideCallback();
    }

    return useSSC;
  }
}

export default RNBidmadCommon;
