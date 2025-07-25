# bidmad-rn-plugin

> [!IMPORTANT]
> Starting with version 0.10.0, the previously used Appkey has been changed to AppDomain.<br>
> **AppDomain is not compatible with existing Appkeys, so a new AppDomain must be issued to initiaize.**<br>
> If you are updating to version 0.10.0, please contact **Techlabs Platform Operations Team.**<br>

Bidmad-RN-Plugin is a plugin for using Bidmad, a mobile app advertisement SDK, in React Native

## Shortcuts
**Project Setups**
- [Installation](#installation)
- [Setting SKAdNetwork Identifiers and User Tracking Description (Only for iOS)](#setting-skadnetwork-identifiers-and-user-tracking-description-only-for-ios)
- [Proguard Options (Only for Android)](#proguard-options-only-for-android)
- [Setting Admob App Identifier](#setting-admob-app-identifier)

**Initialization and App Tracking Transparency Setups**
- [Displaying App Tracking Transparency Message (Only for iOS)](#displaying-app-tracking-transparency-message-only-for-ios)
- [Initializing BidmadSDK](#initializing-bidmadsdk)

**Advertisements Setups**
- [Banner Ad](#banner-ad)
- [Interstitial Ad](#interstitial-ad)
- [Reward Ad](#reward-ad)

**GDPR and Other Interfaces**
- [GDPR Interface](#gdpr-interface)
- [Other Interfaces](#other-interfaces)

## Installation
> [!IMPORTANT]
> Bidmad does not support fabric architecture.<br>
> Starting from version 0.10.4, the following development environment is required.<br>
> iOS development environment requires **Minimum Deployments iOS 13.0 or above**.<br>
> AOS development environment requires **Minimum SDK 23 / Kotlin 2.1.0 or above**.
```sh
npm install bidmad-rn-plugin

# before building ios application, please make sure all cocoapods depedencies are installed
npx pod-install ios
```

## Usage

### Privacy Manifest Settings & Xcode (Only for iOS)

- Bidmad RN Plugin supports Xcode 15.3. If you are using Xcode version lower than 15.3, please update to the latest version.
- When submitting your application to the App Store, use the following guide to properly set up your privacy survey: [Guide for Privacy Manifest & Privacy Survey](https://github.com/bidmad/Bidmad-iOS/wiki/Guide-for-Privacy-Manifest-&-Privacy-Survey-%5BEN%5D)

### Setting SKAdNetwork Identifiers and User Tracking Description (Only for iOS)

- To use ad networks provided by BidmadSDK, you need to add SKAdNetworkIdentifiers to your app's Info.plist. Please add SKAdNetworkItems below in the following list.

<details markdown="1">
<summary>Identifiers List</summary>
<br>

```
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>22mmun2rn5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>238da6jt44.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>24t9a8vw3c.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>24zw6aqk47.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>252b5q8x7y.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>275upjj5gd.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>294l99pt4k.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>2fnua5tdw4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>2u9pt9hc89.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>32z4fx6l9h.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>3l6bd9hu43.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>3qcr597p9d.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>3qy4746246.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>3rd42ekr43.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>3sh42y64q3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>424m5254lk.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4468km3ulz.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>44jx6755aq.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>44n7hlldy6.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>47vhws6wlr.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>488r3q3dtq.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4dzt52r2t5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4fzdc2evr5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4mn522wn87.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4pfyvq9l8r.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4w7y6s5ca2.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>523jb4fst2.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>52fl2v3hgk.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>54NZKQM89Y.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>54nzkqm89y.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>578prtvx9j.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>5a6flpkh64.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>5l3tpt7t6e.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>5lm9lj6jb7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>5tjdwbrq8w.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6964rsfnh4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6g9af3uyq4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6p4ks3rnbw.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6v7lgmsu45.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6xzpu9s2p8.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6yxyv74ff7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>737z793b9f.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>74b6s63p6l.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>7953jerfzd.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>79pbpufp6p.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>7fmhfwg9en.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>7rz58n8ntl.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>7ug5zh24hu.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>84993kbrcf.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>89z7zv988g.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>8c4e2ghe7u.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>8m87ys6875.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>8r8llnkz5a.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>8s468mfl3y.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>97r2b46745.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9b89h5y424.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9g2aggbj52.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9nlqeag3gk.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9rd848q2bz.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9t245vhmpl.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9vvzujtq5s.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>9yg77x724h.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>a2p9lx4jpn.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>a7xqa6mtl2.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>a8cz6cu7e5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>av6w8kgt66.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>b9bk5wbcq9.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>bmxgpxpgc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>bvpn9ufa9b.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>bxvub5ada5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>c3frkrj4fj.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>c6k4g5qg8m.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cg4yq2srnc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cj5566h2ga.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cp8zw746q7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cs644xg564.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>cstr6suwn9.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>dbu4b84rxf.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>dkc879ngq3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>dzg6xy7pwj.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>e5fvkxwrpn.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ecpz2srf59.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>eh6m2bh4zr.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ejvt5qm6ak.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>f38h382jlk.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>f73kdq92p3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>f7s53z58qe.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>feyaarzu9v.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>g28c52eehv.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>g2y4y55b64.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ggvn48r87g.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>glqzh8vgby.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>gta8lk7p23.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>gta9lk7p23.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>gvmwg8q7h5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>h65wbv5k3f.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>hb56zgv37p.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>hdw39hrw9y.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>hs6bdukanm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>k674qkevps.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>k6y4y55b64.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>kbd757ywx3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>kbmxgpxpgc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>klf5c3l5u5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>krvm3zuq6h.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>lr83yxwka7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ludvb6z3bs.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>m297p6643m.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>m5mvw97r93.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>m8dbw4sv7c.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mlmmfzh3r3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mls7yz5dvl.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mp6xlyr22a.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mqn7fxpca7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>mtkv5xtk9e.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>n38lu8286q.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>n66cz3y3bx.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>n6fk4nfna4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>n9x2a789qt.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>nu4557a4je.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>nzq8sh4pbs.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>p78axxw29g.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ppxm28t8ap.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>prcb7njmu6.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>pu4na253f3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>pwa73g5rt2.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>pwdxu55a5a.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>qqp299437r.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>qu637u8glc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>qwpu75vrh2.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>r26jy69rpl.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>r45fhb6rf7.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>rvh3l7un93.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>rx5hdcabgc.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>s39g8k73mm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>s69wq72ugq.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>sczv5946wb.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>su67r6k2v3.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>t38b2kh725.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>t6d3zquu66.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>tl55sbb4fm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>tmhh9296z4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>tvvz7th9br.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>u679fj5vs4.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>uw77j35x4d.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v4nxqhlyqp.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v72qych5uu.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v79kvwwj4g.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v9wttpbfk9.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>vcra2ehyfk.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>vutu7akeur.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>w9q455wk68.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>wg4vff78zm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>wzmmZ9fp6w.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>wzmmz9fp6w.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>x2jnk7ly8j.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>x44k69ngh6.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>x5l83yy675.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>x8jxxk4ff5.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>x8uqf25wch.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>xy9t38ct57.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>y45688jllp.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>y5ghdn5j9k.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>yclnxrl5pm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>ydx93a7ass.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>yrqqpx2mcb.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>z24wtl6j62.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>z4gj7hsk7h.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>zmvfpc5aq8.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>zq492l623r.skadnetwork</string>
    </dict>
</array>
```
</details>

- Please add User Tracking Description with explanation that the user's data will be collected and tracked for the use of personalized ad delivery into the app's info.plist.

<details markdown="1">
<summary>Description</summary>
<br>

```
<key>NSUserTrackingUsageDescription</key>
<string>We wish to access your tracking data to deliver personalized ads to you.</string>
```
</details>

### Proguard Options (Only for Android)

- If you are using the Proguard option, you must apply the Proguard option below.

<details markdown="1">
<summary>Proguard Options</summary>
<br>

```
# React Native
-keep class com.facebook.react.devsupport.** { *; }
-dontwarn com.facebook.react.devsupport.**

-keep class com.facebook.jni.** { *; }
-keep class com.facebook.flipper.** { *; }

-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }

#Bidmad
-keep class com.adop.sdk.** { *; }
-keep class ad.helper.openbidding.** { *; }
-keep class com.adop.adapter.fc.** { *; }
-keep class com.adop.adapter.fnc.** { *; }
-keepnames class * implements java.io.Serializable
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    !static !transient <fields>;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Pangle
-keep class com.bytedance.sdk.** { *; }
-keep class com.bykv.vk.openvk.component.video.api.** { *; }

# Tapjoy
-keep class com.tapjoy.** { *; }
-keep class com.moat.** { *; }
-keepattributes JavascriptInterface
-keepattributes *Annotation*
-keep class * extends java.util.ListResourceBundle {
protected Object[][] getContents();
}
-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
public static final *** NULL;
}
-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {
@com.google.android.gms.common.annotation.KeepName *;
}
-keepnames class * implements android.os.Parcelable {
public static final ** CREATOR;
}
-keep class com.google.android.gms.ads.identifier.** { *; }
-dontwarn com.tapjoy.**
```
</details>

### Setting Admob App Identifier

Google Admob requires applications to include app identifiers in both info.plist (iOS) and manifest (Android) files.<br>
Please refer to "App ID from ADMOB Dashboard" section of [Find Your App Key](https://github.com/bidmad/SDK/wiki/Find-your-app-key%5BEN%5D#app-id-from-admob-dashboard) document.<br>
After finding your own app's identifier, please add it to info.plist or AndroidManifest.xml.

iOS
```
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX</string>
```

Android
```
<application>
    ...
    <meta-data
        android:name="com.google.android.gms.ads.APPLICATION_ID"
        android:value="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"/>
    ...
</application>
```

### Displaying App Tracking Transparency Message (Only for iOS)

Since iOS 14.5, App Tracking Transparency (ATT) message is required to be displayed for getting the user consent before any user data tracking or collection.
Bidmad plugin provides the interface for displaying ATT message popup, and it can be used as demonstrated below.

```js
import { RNBidmadCommon } from "bidmad-rn-plugin";

const appTrackingStatus = await RNBidmadCommon.reqAdTrackingAuthorization();

switch (appTrackingStatus) {
case RNBidmadTrackingAuthorizationStatus.NotDetermined:
  console.log("NOT DETERMINED");
  break;
case RNBidmadTrackingAuthorizationStatus.Restricted:
  console.log("RESTRICTED");
  break;
case RNBidmadTrackingAuthorizationStatus.Denied:
  console.log("DENIED");
  break;
case RNBidmadTrackingAuthorizationStatus.Authorized:
  console.log("AUTHORIZED");
  break;
case RNBidmadTrackingAuthorizationStatus.LessThaniOS14:
  console.log("LESS THAN IOS 14.5");
  break;
}
```

### Initializing BidmadSDK

The "initializeSdk" method performs tasks required to run BidmadSDK. Please call the method before loading ads.
The "initializeSdk" method takes the iOS and Android app domain as arguments, and the app domain can be issued through the Techlabs platform operations team.
(*To check the App Domain, please contact the Techlabs platform operation team.)

```js
import { RNBidmadCommon } from "bidmad-rn-plugin";

const isInitialized = await RNBidmadCommon.initializeSdk(
  "Your iOS APP Domain", // iOS App Domain
  "Your AOS APP Domain"  // Android App Domain
);

if (isInitialized) {
  // You can now start requesting ads
}
```

### Banner Ad

The banner ad occupies a spot within your app's UI, either at the top, bottom, or in the middle of a list.
This ad format stays on screen and refreshes automatically after a certain period of time.

Banner ad (RNBidmadBanner) can be used as demonstrated below.

```js
import { RNBidmadBanner, RNBidmadBannerSize } from "bidmad-rn-plugin";

function Sample() {
  return (
    <RNBidmadBanner
      iOSZoneId="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
      androidZoneId="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
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
  );
}
```

RNBidmadBanner's size is predetermined. If you do not provide value to "bannerSize" prop, it will default to 320x50 size.
However, if you are using other sizes for banner ads, please provide the size information by using RNBidmadBannerSize constants.
Refer to the following table for understanding what sizes are supported.

<table>
<thead>
  <tr>
    <th>Constant</th>
    <th>Actual Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>RNBidmadBannerSize.BANNER</td>
    <td>320x50</td>
  </tr>
  <tr>
    <td>RNBidmadBannerSize.LARGE_BANNER</td>
    <td>320x100</td>
  </tr>
  <tr>
    <td>RNBidmadBannerSize.MREC</td>
    <td>300x250</td>
  </tr>
</tbody>
</table>

### Interstitial Ad

The interstitial ad covers the whole screen with advertisement until the user closes the ad.
This ad format typically is displayed in the middle of transitioning from page A to B.

Interstitial ad (RNBidmadInterstitial) can be used as demonstrated below.

```js
const interstitialAd = await RNBidmadInterstitial.create(
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", // iOS Zone ID
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  // Android Zone ID
);

interstitialAd?.setCallbacks({
  onLoad: () => {
    console.log("LOAD");
  },
  onLoadFail: (error: string) => {
    console.error("FAIL", error);
  },
  onShow: () => {
    console.log("SHOW");
  },
  onClick: () => {
    console.log("CLICK");
  },
  onClose: () => {
    console.log("CLOSE");
  },
});

interstitialAd?.load();

... AFTER RECEIVING onLoad CALLBACK FROM AD ...

interstitialAd?.show();
```

### Reward Ad

The rewarded ad displays fullscreen ad that typically contains video or interactive contents.
After certain time passes, the ad gives an option to reward the user, by passing the onComplete or onSkip callbacks.
For users who completed watching the ad, the onComplete callback will be given, otherwise onSkip callback will be given.

Reward ad (RNBidmadReward) can be used as demonstrated below.

```js
const rewardAd = await RNBidmadReward.create(
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", // iOS Zone ID
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  // Android Zone ID
)

rewardAd?.setCallbacks({
  onLoad: () => {
    console.log("LOAD");
  },
  onLoadFail: (error: string) => {
    console.log("FAIL", error);
  },
  onShow: () => {
    console.log("SHOW");
  },
  onComplete: () => {
    console.log("COMPLETE");
    // ** REWARD THE USER **
  },
  onSkip: () => {
    console.log("SKIP");
  },
  onClick: () => {
    console.log("CLICK");
  },
  onClose: () => {
    console.log("CLOSE");
  },
});

rewardAd?.load();

... AFTER RECEIVING onLoad CALLBACK FROM AD ...

rewardAd?.show();
```

### GDPR Interface

The General Data Protection Regulation (GDPR) is a European Union regulation on information privacy in the EU area.
If your app service is used in the EU region, you must first ask users whether they consent on providing personal data for ad serving.
Bidmad provides a wrapper interface for Google User Messaging Platform, which provides a form UI that collects consent information from the user.

When testing GDPR functionalities, you can simulate the European region for testing purposes using the following interface.
```js
// UMP Test ID can be identified in console logs
// Please look for the following and copy the identifier
// UMPDebugSettings.testDeviceIdentifiers = @[ @"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" ];

gdprInterface?.setDebug(
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", // TEST DEVICE IDENTIFIER
  true                                    // SIMULATE EU REGION? TRUE: EUROPE REGION - FALSE: DON'T SIMULATE
);
```

1. Create a GDPR interface instance.
```js
const gdprInterface = await RNBidmadGDPR.create();
```

2. Request information whether showing GDPR consent form to the user required or not.
```js
gdprInterface?.setCallbacks({
  ... other callbacks ...

  onConsentInfoUpdateSuccess: async () => {
    const status = await gdprInterface?.getConsentStatus();

    switch (status) {
      case RNBidmadUMPStatus.Unknown:
        // Please call requestConsentInfoUpdate method to update the status.
        break;
      case RNBidmadUMPStatus.Required:
        // ** UMP FORM SHOULD EXPLICITELY DISPLAYED FOR GETTING THE USER CONSENT **
        break;
      case RNBidmadUMPStatus.NotRequired:
        // User consent status for GDPR is not required as the user is not in the EU region.
        break;
      case RNBidmadUMPStatus.Obtained:
        // User consent status is already obtained, and the UMP popup is not required to be shown.
        break;
    }
  }

  ... other callbacks ...
});

// After calling requestConsentInfoUpdate method, onConsentInfoUpdateSuccess callback will be called
await gdprInterface?.requestConsentInfoUpdate();
```

3. If the user consent is required (RNBidmadUMPStatus.Required), load the UMP form.
```js
gdprInterface?.setCallbacks({
  ... other callbacks ...

  onConsentFormLoadSuccess: async () => {
    // ** UMP FORM IS NOW READY TO BE SHOWN **
  }

  ... other callbacks ...
});

await gdprInterface?.loadForm();
```

4. Show the UMP form to the user.
```js
await gdprInterface?.showForm();
```

5. Check if error is null from dismiss callback. If error is null, the user consent is successfully collected.
```js
if (error === null) {
  // ** SUCCESSFULLY COLLECTED USER CONSENT STATUS **
  return;
} else {
  // ** SOMETHING WENT WRONG **
}
```

The whole process would look like the following.
```js
// ** 1: CREATE GDPR INTERFACE **
const gdprInterface = await RNBidmadGDPR.create();

// ⚠️ USE THIS INTERFACE ONLY FOR TESTING ⚠️
// await gdprInterface?.setDebug("D565B152-9AC6-4917-990D-707187F29213", true);

gdprInterface?.setCallbacks({
  onConsentInfoUpdateSuccess: async () => {
    const status = await gdprInterface?.getConsentStatus();

    switch (status) {
      case RNBidmadUMPStatus.Unknown:
        break;
      case RNBidmadUMPStatus.Required:
        // ** 3: LOAD THE UMP FORM **
        await gdprInterface?.loadForm();
        break;
      case RNBidmadUMPStatus.NotRequired:
        break;
      case RNBidmadUMPStatus.Obtained:
        break;
    }
  },
  onConsentInfoUpdateFailure: (error: string) => {
    console.log("Consent info update failed", error);
  },
  onConsentFormLoadSuccess: async () => {
  // ** 4: SHOW THE UMP FORM **
    await gdprInterface?.showForm();
  },
  onConsentFormLoadFailure: (error: string) => {
    console.log("Consent form loading failed", error);
  },
  onConsentFormDismissed:(error: string | null) => {
    // ** 5: CHECK IF THE UMP FORM SUCCESSFULLY COLLECTED USER CONSENT **
    if (error === null) {
      console.log('success');
      return;
    }
    // user consent collection went wrong
    console.log('user consent failed', error);
  },
});

// ** 2: REQUEST INFORMATION UPDATE **
await gdprInterface?.requestConsentInfoUpdate();
```

### Other Interfaces

- Enabling debug logs
```js
// setting debug mode to true enables debug logs to be printed
await RNBidmadCommon.setDebug(true);

// getting debug mode status
const isDebugMode = await RNBidmadCommon.isDebug();
```

- Setting the test device ID for google ads (admob and admanager)
```js
// please look for the following in the console and copy the test identifier to set the test device id
// GADMobileAds.sharedInstance.requestConfiguration.testDeviceIdentifiers = @[ @"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ];

// setting the test device id
const testDeviceId = "your-test-device-id";
await RNBidmadCommon.setTestDeviceId(testDeviceId);

// getting the test device id
const retrievedId = await RNBidmadCommon.getTestDeviceId();
```

- Setting whether your app can only receive children-directed ads
```js
// setting the child-directed ads property
const isChild = await RNBidmadCommon.isChildDirectedTreatment();

// getting the child-directed ads property
await RNBidmadCommon.setChildDirectedAds(!isChild);
```

- Enabling server-side callbacks
```js
// setting true will enable server-side callbacks
await RNBidmadCommon.setUseServerSideCallback(true);

// getting the server-side callback status
const useSSC = await RNBidmadCommon.getUseServerSideCallback();
```

- Setting the CUID (Customer User ID) for the use in server-side callbacks
```js
await RNBidmadCommon.setCuid("YOUR-CUID"); // setter
const retrievedCuid = await RNBidmadCommon.getCuid(); // getter
```
