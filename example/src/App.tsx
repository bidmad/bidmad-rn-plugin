import React, { useEffect } from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RewardAdSample from "./RewardAdSample";
import InterstitialAdSample from "./InterstitialAdSample";
import BannerAdSample from "./BannerAdSample";

import {
  RNBidmadCommon,
  RNBidmadTrackingAuthorizationStatus,
} from "bidmad-rn-plugin";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const initialAction = async () => {
      // Before requesting ads, please initialize BidmadSDK first
      await RNBidmadCommon.initializeSdk(
        "6b097551-7f78-11ed-a117-026864a21938",
        "ff8090d3-3e28-11ed-a117-026864a21938"
      );

      // Please set NSUserTrackingUsageDescription in info.plist before calling reqAdTrackingAuthorization method
      const appTrackingStatus =
        await RNBidmadCommon.reqAdTrackingAuthorization();

      switch (appTrackingStatus) {
        case RNBidmadTrackingAuthorizationStatus.NotDetermined:
          console.log(`AppTrackingTransparency: NOT DETERMINED`);
          break;
        case RNBidmadTrackingAuthorizationStatus.Restricted:
          console.log(`AppTrackingTransparency: RESTRICTED`);
          break;
        case RNBidmadTrackingAuthorizationStatus.Denied:
          console.log(`AppTrackingTransparency: DENIED`);
          break;
        case RNBidmadTrackingAuthorizationStatus.Authorized:
          console.log(`AppTrackingTransparency: AUTHORIZED`);
          break;
        case RNBidmadTrackingAuthorizationStatus.LessThaniOS14:
          console.log(`AppTrackingTransparency: LESS THAN IOS 14.5`);
          break;
      }

      // Enable debug logs by calling setDebug method
      RNBidmadCommon.setDebug(true);
    };

    // initializeSdk method must first be called before any ad loading
    initialAction();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BannerAdSample" component={BannerAdSample} />
        <Stack.Screen
          name="InterstitialAdSample"
          component={InterstitialAdSample}
        />
        <Stack.Screen name="RewardAdSample" component={RewardAdSample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <Button
          title="Banner Ad Sample"
          onPress={() => navigation.navigate("BannerAdSample")}
        />
      </View>
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <Button
          title="Interstitial Ad Sample"
          onPress={() => navigation.navigate("InterstitialAdSample")}
        />
      </View>
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <Button
          title="Reward Ad Sample"
          onPress={() => navigation.navigate("RewardAdSample")}
        />
      </View>
    </View>
  );
}
