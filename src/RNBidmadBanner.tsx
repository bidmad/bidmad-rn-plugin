import React, { useRef, useEffect } from "react";
import {
  requireNativeComponent,
  UIManager,
  Platform,
  View,
  findNodeHandle,
  NativeEventEmitter,
} from "react-native";

export const RNBidmadBannerSize = {
  BANNER: "320x50",
  LARGE_BANNER: "320x100",
  MREC: "300x250",
} as const;

const LINKING_ERROR =
  `The package 'bidmad-rn-plugin' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: "" }) +
  "- You rebuilt the app after installing the package\n";

const ComponentName = "RNBidmadBannerComponent";
const RNBidmadBannerComponent = requireNativeComponent(ComponentName);

var androidEventEmitter: NativeEventEmitter | null = null;
var androidCallbackEvents: any = {};

if (Platform.OS === "android") {
  androidEventEmitter = new NativeEventEmitter();
}

export class RNBidmadBannerController {
  private bidmadRef: RNBidmadPluginRef;
  private props: RNBidmadBannerProps;

  constructor(bidmadRef: RNBidmadPluginRef, props: RNBidmadBannerProps) {
    this.bidmadRef = bidmadRef;
    this.props = props;
  }

  public load(): void {
    const handle = findNodeHandle(this.bidmadRef.current);
    if (handle) {
      if (Platform.OS === 'android') {
        const commandId =
          UIManager.getViewManagerConfig(ComponentName).Commands.load!.toString();
        UIManager.dispatchViewManagerCommand(handle, commandId, [
          handle,
          this.props.androidZoneId,
        ]);
      } else if (Platform.OS === 'ios') {
        const commandId = UIManager.getViewManagerConfig(ComponentName).Commands.load as number;
        UIManager.dispatchViewManagerCommand(handle, commandId, []);
      }
    }
  }
}

type RNBidmadBannerProps = {
  iOSZoneId?: string;
  androidZoneId?: string;
  bannerSize?: string;
  onControllerCreated?: (controller: RNBidmadBannerController) => void;
  onLoad?: () => void;
  onLoadFail?: (error: string) => void;
  onClick?: () => void;
};

type RNBidmadPluginRef = React.RefObject<View>;

export const RNBidmadBanner = (props: RNBidmadBannerProps) => {
  if (UIManager.getViewManagerConfig(ComponentName) == null) {
    throw new Error(LINKING_ERROR);
  }

  let width: number;
  let height: number;

  if (props.bannerSize) {
    if (props.bannerSize === RNBidmadBannerSize.MREC) {
      width = 300;
      height = 250;
    } else if (props.bannerSize === RNBidmadBannerSize.LARGE_BANNER) {
      width = 320;
      height = 100;
    } else {
      width = 320;
      height = 50;
    }
  } else {
    // default value if size is not given
    width = 320;
    height = 50;
  }

  const bidmadRef = useRef(null);
  const androidTimerId = useRef(0);

  useEffect(() => {
    const controller = new RNBidmadBannerController(bidmadRef, props);
    if (props.onControllerCreated) {
      props.onControllerCreated(controller);
    }

    const viewId: number = findNodeHandle(bidmadRef.current)!;

    if (Platform.OS === "android") {
      setAndroidCallbackEvent(viewId);
      controller.load();
    }

    return () => {
      if (Platform.OS === "android") {
        removeAndroidCallbackEvent(viewId);
        clearInterval(androidTimerId.current);
      }
    };
  }, [props.onControllerCreated]);

  const setAndroidCallbackEvent = (viewId: number) => {
    const loadEventKey = "onLoad_" + viewId;
    if (androidCallbackEvents[loadEventKey] != undefined) {
      androidCallbackEvents[loadEventKey].remove();
      androidCallbackEvents[loadEventKey] = undefined;
    }

    const loadEvent = androidEventEmitter?.addListener(loadEventKey, (_) => {
      androidCallbackEvents[loadEventKey] = loadEvent;

      if (androidTimerId.current == 0) {
        const executeCallback = () => {
          const commandId =
            UIManager.getViewManagerConfig(
              ComponentName
            ).Commands.reload!.toString();
          UIManager.dispatchViewManagerCommand(viewId, commandId, [viewId]);
        };
        androidTimerId.current = setInterval(executeCallback, 1000 * 60) as any;
      }

      if (props.onLoad) {
        props.onLoad();
      }
    });

    const loadFailEventKey = "onLoadFail_" + viewId;
    if (androidCallbackEvents[loadFailEventKey] != undefined) {
      androidCallbackEvents[loadFailEventKey].remove();
      androidCallbackEvents[loadFailEventKey] = undefined;
    }

    const loadFailEvent = androidEventEmitter?.addListener(
      loadFailEventKey,
      (params) => {
        androidCallbackEvents[loadFailEventKey] = loadFailEvent;

        if (props.onLoadFail) {
          const msg = params ? params.error : "No Message";
          props.onLoadFail(msg);
        }
      }
    );

    const clickEventKey = "onClick_" + viewId;
    if (androidCallbackEvents[clickEventKey] != undefined) {
      androidCallbackEvents[clickEventKey].remove();
      androidCallbackEvents[clickEventKey] = undefined;
    }

    const clickEvent = androidEventEmitter?.addListener(clickEventKey, (_) => {
      androidCallbackEvents[clickEventKey] = clickEvent;

      if (props.onClick) {
        props.onClick();
      }
    });
  };

  const removeAndroidCallbackEvent = (viewId: number) => {
    const loadEventKey = "onLoad_" + viewId;
    if (androidCallbackEvents[loadEventKey] != undefined) {
      androidCallbackEvents[loadEventKey].remove();
      androidCallbackEvents[loadEventKey] = undefined;
    }

    const loadFailEventKey = "onLoadFail_" + viewId;
    if (androidCallbackEvents[loadFailEventKey] != undefined) {
      androidCallbackEvents[loadFailEventKey].remove();
      androidCallbackEvents[loadFailEventKey] = undefined;
    }

    const clickEventKey = "onClick_" + viewId;
    if (androidCallbackEvents[clickEventKey] != undefined) {
      androidCallbackEvents[clickEventKey].remove();
      androidCallbackEvents[clickEventKey] = undefined;
    }
  };

  let componentProps: any;

  if (Platform.OS === "android") {
    componentProps = {
      style: {
        width: width,
        height: height,
        alignSelf: "center",
      },
      zoneId: props.androidZoneId,
      onLoad: props.onLoad,
      onLoadFail: props.onLoadFail,
      onClick: props.onClick,
      ref: bidmadRef,
    };
  } else if (Platform.OS === "ios") {
    componentProps = {
      style: {
        width: width,
        height: height,
        alignSelf: "center",
      },
      zoneId: props.iOSZoneId,
      onLoad: props.onLoad,
      onLoadFail: (event: any) => {
        const error: string = event.nativeEvent.error;
        if (props.onLoadFail) {
          props.onLoadFail(error);
        }
      },
      onClickHandler: props.onClick,
      ref: bidmadRef,
    };
  }

  if (Platform.OS === "android") {
    return (
      <View>
        <RNBidmadBannerComponent {...componentProps} />
      </View>
    );
  } else if (Platform.OS === "ios") {
    return (
      <View>
        <RNBidmadBannerComponent {...componentProps} />
      </View>
    );
  } else {
    return <View />;
  }
};

export default RNBidmadBanner;
