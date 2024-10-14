package com.bidmadrnplugin;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.adop.sdk.BMAdError;
import com.adop.sdk.BMAdInfo;
import com.adop.sdk.adview.AdViewListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class RNBannerFragment extends Fragment {
    RNBanner mBanner;
    ReactApplicationContext reactContext;
    String mZoneId;
    int reactNativeViewId;

    public RNBannerFragment(ReactApplicationContext reactContext, String zoneId, int reactNativeViewId) {
        this.reactContext = reactContext;
        this.mZoneId = zoneId;
        this.reactNativeViewId = reactNativeViewId;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {
        super.onCreateView(inflater, parent, savedInstanceState);
        mBanner = new RNBanner(getContext(), mZoneId);
        mBanner.setListener(getListener());
        return mBanner.getView();
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        // do any logic that should happen in an `onCreate` method, e.g:
        load();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        // do any logic that should happen in an `onDestroy` method
        if(mBanner != null) {
            mBanner.onPause();
        }
    }

    public void load(){
        if(mBanner != null) {
            mBanner.onceload();
        }
    }

    public AdViewListener getListener() {
        return new AdViewListener() {
            @Override
            public void onLoadAd(@NonNull BMAdInfo info) {
                if(reactContext != null) {
                    reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onLoad_"+reactNativeViewId, null);
                }
            }

            @Override
            public void onLoadFailAd(BMAdError bmAdError) {
                if(reactContext != null) {
                    WritableMap event = Arguments.createMap();
                    event.putString("error", bmAdError.getMsg());
                    reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onLoadFail_" + reactNativeViewId, event);
                }
            }

            @Override
            public void onClickAd(@NonNull BMAdInfo info) {
                if(reactContext != null) {
                    reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("onClick_" + reactNativeViewId, null);
                }
            }
        };
    }
}
