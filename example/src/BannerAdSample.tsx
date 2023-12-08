import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { RNBidmadBanner, RNBidmadBannerSize } from "bidmad-rn-plugin";

function BannerAdSample() {
  const [receivedCallback, setReceivedCallback] = useState("NOTHING");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "black" }}>
        Received callbacks: {receivedCallback}
      </Text>
      <View
        style={{
          width: 320,
          height: 50,
          backgroundColor: "lightblue",
        }}
      >
        <RNBidmadBanner
          iOSZoneId="1c3e3085-333f-45af-8427-2810c26a72fc"
          androidZoneId="944fe870-fa3a-4d1b-9cc2-38e50b2aed43"
          bannerSize={RNBidmadBannerSize.BANNER}
          onLoad={() => {
            setReceivedCallback("LOAD");
          }}
          onLoadFail={(error: string) => {
            setReceivedCallback("FAIL " + error);
          }}
          onClick={() => {
            setReceivedCallback("CLICK");
          }}
        />
      </View>
    </View>
  );
}

export default BannerAdSample;
