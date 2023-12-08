package com.bidmadrnplugin;

import android.app.Activity;

import androidx.annotation.Nullable;

import com.adop.sdk.userinfo.consent.GoogleGDPRConsent;
import com.adop.sdk.userinfo.consent.GoogleGDPRListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.android.ump.FormError;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class RNGDPRModule extends ReactContextBaseJavaModule {
	Activity mActivity;
	ReactApplicationContext mContext;
	final String eventName = "BidmadGDPRCallback";
	static Map<String, GoogleGDPRConsent> mInstanceMap = new HashMap();
	public RNGDPRModule(ReactApplicationContext context) {
		super(context);
		mContext = context;
		mActivity = context.getCurrentActivity();
	}

	@Override
	public String getName() {
		return "RNBidmadGDPRModule";
	}

	@ReactMethod
	public void createInstance(Promise promise) { //test에서 activity가 생성되지 않는 경우가 있는지 확인 필요
		ReactApplicationContext context = getReactApplicationContext();
		mActivity = context.getCurrentActivity();
		String instanceId = UUID.randomUUID().toString();
		if (mActivity != null) {
			GoogleGDPRConsent gdpr = new GoogleGDPRConsent(mActivity);
			setListener(instanceId, gdpr);
			mInstanceMap.put(instanceId, gdpr);
		}

		promise.resolve(instanceId);
	}

	@ReactMethod
	public void setDebug(String instanceId, String testDeviceId, boolean isEEA, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		if (gdpr != null) {
			gdpr.setDebug(testDeviceId, isEEA);
		}
	}
	@ReactMethod
	public void requestConsentInfoUpdate(String instanceId, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		if (gdpr != null) {
			gdpr.requestConsentInfoUpdate();
		}

		promise.resolve(null);
	}

	@ReactMethod
	public void isConsentFormAvailable(String instanceId, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		boolean result = false;
		if (gdpr != null) {
			result = gdpr.isConsentFormAvailable();
		}

		promise.resolve(result);
	}

	@ReactMethod
	public void loadForm(String instanceId, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		if (gdpr != null) {
			gdpr.loadForm();
		}

		promise.resolve(null);
	}

	@ReactMethod
	public void showForm(String instanceId, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		if (gdpr != null) {
			gdpr.showForm();
		}

		promise.resolve(null);
	}

	@ReactMethod
	public void getConsentStatus(String instanceId, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		int result = GoogleGDPRConsent.ConsentStatus.UNKNOWN;
		if (gdpr != null) {
			result = gdpr.getConsentStatus();
		}

		promise.resolve(result);
	}

	@ReactMethod
	public void reset(String instanceId, Promise promise) {
		GoogleGDPRConsent gdpr = mInstanceMap.get(instanceId);
		if (gdpr != null) {
			gdpr.reset();
		}

		promise.resolve(null);
	}

	public void setListener(String instanceId, GoogleGDPRConsent gdpr) {
		gdpr.setListener(new GoogleGDPRListener() {
			@Override
			public void onConsentInfoUpdateSuccess() {
				WritableMap params = Arguments.createMap();
				params.putString("instanceId", instanceId);
				params.putString("action", "onConsentInfoUpdateSuccess");
				sendEvent(params);
			}

			@Override
			public void onConsentInfoUpdateFailure(FormError formError) {
				WritableMap params = Arguments.createMap();
				params.putString("instanceId", instanceId);
				params.putString("action", "onConsentInfoUpdateFailure");
				sendEvent(params);
			}

			@Override
			public void onConsentFormLoadSuccess() {
				WritableMap params = Arguments.createMap();
				params.putString("instanceId", instanceId);
				params.putString("action", "onConsentFormLoadSuccess");
				sendEvent(params);
			}

			@Override
			public void onConsentFormLoadFailure(FormError formError) {
				WritableMap params = Arguments.createMap();
				params.putString("instanceId", instanceId);
				params.putString("action", "onConsentFormLoadFailure");
				sendEvent(params);
			}

			@Override
			public void onConsentFormDismissed(FormError formError) {
				WritableMap params = Arguments.createMap();
				params.putString("instanceId", instanceId);
				params.putString("action", "onConsentFormDismissed");
				sendEvent(params);
			}
		});
	}

	@ReactMethod
	public void addListener(String eventName) {
		// Set up any upstream listeners or background tasks as necessary
	}

	@ReactMethod
	public void removeListeners(Integer count) {
		// Remove upstream listeners, stop unnecessary background tasks
	}

	private void sendEvent(@Nullable WritableMap params) {
		ReactApplicationContext context = getReactApplicationContext();
		if(context != null) {
			context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
		}
	}
}
