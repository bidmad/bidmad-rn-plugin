package com.bidmadrnplugin;

import android.content.Context;

import androidx.annotation.NonNull;

import com.adop.sdk.adview.AdViewListener;

import ad.helper.openbidding.adview.BaseAdView;

public class RNBanner extends BaseAdView {
    public RNBanner(@NonNull Context context, String zoneId) {
        super(context, zoneId);
        setObject();
        mAdView.setFullBanner(false);
    }

    @Override
    public void setListener(AdViewListener listener) {
        super.setListener(listener);
    }


}
