import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { RNBidmadInterstitial } from "bidmad-rn-plugin";

let interstitialAd: RNBidmadInterstitial | null;
RNBidmadInterstitial.create(
  "228b95a9-6f42-46d8-a40d-60f17f751eb1",
  "e9acd7fc-a962-40e4-aaad-9feab1b4f821"
).then((ad: RNBidmadInterstitial | null) => {
  interstitialAd = ad;
});

function InterstitialAdSample() {
  const [receivedCallback, setReceivedCallback] = useState<string>("NOTHING");

  useEffect(() => {
    interstitialAd?.setCallbacks({
      onLoad: () => {
        console.log("LOAD");
        setReceivedCallback("LOAD");
      },
      onLoadFail: (error: string) => {
        console.error("FAIL", error);
        setReceivedCallback(`FAIL ${error}`);
      },
      onShow: () => {
        console.log("SHOW");
        setReceivedCallback("SHOW");
      },
      onClick: () => {
        console.log("CLICK");
        setReceivedCallback("CLICK");
      },
      onClose: () => {
        console.log("CLOSE");
        setReceivedCallback("CLOSE");
      },
    });
  }, []);

  const loadAd = async () => {
    await interstitialAd?.load();
  };

  const showAd = async () => {
    await interstitialAd?.show();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "black" }}>
        Received callbacks: {receivedCallback}
      </Text>
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <Button title="load" onPress={loadAd} />
      </View>
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <Button title="show" onPress={showAd} />
      </View>
    </View>
  );
}

export default InterstitialAdSample;
