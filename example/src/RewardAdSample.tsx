import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { RNBidmadReward } from "bidmad-rn-plugin";

let rewardAd: RNBidmadReward | null;
RNBidmadReward.create(
  "29e1ef67-98d2-47b3-9fa2-9192327dd75d",
  "7d9a2c9e-5755-4022-85f1-6d4fc79e4418"
).then((ad: RNBidmadReward | null) => {
  rewardAd = ad;
});

function RewardAdSample() {
  const [receivedCallback, setReceivedCallback] = useState("NOTHING");

  useEffect(() => {
    rewardAd?.setCallbacks({
      onLoad: () => {
        console.log(`LOAD`);
        setReceivedCallback("LOAD");
      },
      onLoadFail: (error: string) => {
        console.log(`FAIL`);
        setReceivedCallback("FAIL " + error);
      },
      onShow: () => {
        console.log(`SHOW`);
        setReceivedCallback("SHOW");
      },
      onComplete: () => {
        console.log(`COMPLETE`);
        setReceivedCallback("COMPLETE");
      },
      onSkip: () => {
        console.log(`SKIP`);
        setReceivedCallback("SKIP");
      },
      onClick: () => {
        console.log(`CLICK`);
        setReceivedCallback("CLICK");
      },
      onClose: () => {
        console.log(`CLOSE`);
        setReceivedCallback("CLOSE");
      },
    });
  }, []);

  const loadAd = async () => {
    await rewardAd?.load();
  };

  const showAd = async () => {
    await rewardAd?.show();
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

export default RewardAdSample;
