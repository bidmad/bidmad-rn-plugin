# bidmad-rn-plugin

Bidmad-RN-Plugin은 모바일 앱 광고 SDK인 Bidmad를 React Native에서 사용하기 위한 플러그인입니다.

## 바로가기
**프로젝트 설정**
- [Installation](#installation)
- [SKAdNetwork 식별자 및 사용자 추적 설명 설정 (iOS에만 해당)](#skadnetwork-식별자-및-사용자-추적-설명-설정-ios에만-해당)
- [Proguard 옵션 (Android에만 해당)](#proguard-옵션-android에만-해당)
- [Admob App ID 설정](#admob-app-id-설정)

**초기화 및 앱 추적 투명성 설정**
- [앱 추적 투명성 메시지 표시하기 (iOS 전용)](#앱-추적-투명성-메시지-표시하기-ios-전용)
- [BidmadSDK 초기화](#bidmadsdk-초기화)

**광고 설정**
- [배너 광고](#배너-광고)
- [전면 광고](#전면-광고)
- [리워드 광고](#리워드-광고)

**GDPR 및 기타 인터페이스**
- [GDPR 인터페이스](#gdpr-인터페이스)
- [기타 인터페이스](#기타-인터페이스)

## Installation

```sh
npm install bidmad-rn-plugin

# iOS 애플리케이션을 빌드하기 전에 모든 Cocoapods 디펜던시 항목이 설치하세요.
npx pod-install ios
```

## Usage

### 개인정보 보호 매니페스트 세팅 및 Xcode (iOS에만 해당)

- Bidmad RN 플러그인은 Xcode 15.3을 지원합니다. Xcode 버전 15.3 미만을 사용하고 계시다면 최신 버전으로 업데이트해주세요.
- App Store에 애플리케이션을 제출할 때 다음 가이드를 참고하여 개인정보 보호 정책 및 설문조사를 올바르게 설정하세요: [Guide for Privacy Manifest & Privacy Survey](https://github.com/bidmad/Bidmad-iOS/wiki/Guide-for-Privacy-Manifest-&-Privacy-Survey-%5BKR%5D)

### SKAdNetwork 식별자 및 사용자 추적 설명 설정 (iOS에만 해당)

- BidmadSDK에서 제공하는 광고 네트워크를 사용하려면 앱의 Info.plist에 SKAdNetworkIdentifiers를 추가해야 합니다. 다음 목록에 아래 SKAdNetworkItems를 추가하세요.

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

- 개인화된 광고 게재를 위해 사용자 데이터가 수집되고 추적된다는 설명을 포함한 User Tracking Usage Description을 앱의 info.plist에 추가하세요.

<details markdown="1">
<summary>Description</summary>
<br>

```
<key>NSUserTrackingUsageDescription</key>
<string>We wish to access your tracking data to deliver personalized ads to you.</string>
```
</details>

### Proguard 옵션 (Android에만 해당)

- Proguard 옵션을 사용하고 있는 경우 아래 프로가드 옵션을 적용해야 합니다.

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

### Admob App ID 설정

Google Admob을 사용하려면 애플리케이션이 info.plist(iOS) 및 manifest(Android) 파일에 앱 식별자를 포함해야 합니다. [App Key 찾기](https://github.com/bidmad/SDK/wiki/Find-your-app-key%5BKR%5D#app-id-from-admob-dashboard) 문서의 'ADMOB 대시보드에서 앱 ID' 섹션을 참조하세요. 자신의 앱 식별자를 찾은 후, info.plist 또는 AndroidManifest.xml에 추가하세요.

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

### 앱 추적 투명성 메시지 표시하기 (iOS 전용)

iOS 14.5부터, 사용자 데이터 추적 또는 수집 전에 사용자 동의를 얻기 위해 앱 추적 투명성 (ATT) 메시지 표시가 필요합니다. Bidmad 플러그인은 ATT 메시지 팝업을 표시하기 위한 인터페이스를 제공하며, 아래와 같이 사용할 수 있습니다.

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

### BidmadSDK 초기화

"initializeSdk" 메소드는 BidmadSDK를 실행하기 위해 필요한 작업들을 수행합니다. 광고를 로드하기 전에 이 메소드를 호출해 주세요. "initializeSdk" 메소드는 iOS 및 Android 앱 키를 인자로 받으며, 앱 키는 ADOP Insight 웹페이지(insight.adop.cc)에서 확인할 수 있습니다. ADOP Insight에서 앱 키를 찾는 방법에 대한 자세한 지침은 [App Key 찾기](https://github.com/bidmad/SDK/wiki/Find-your-app-key%5BKR%5D) 가이드를 참조하세요. 

```js
import { RNBidmadCommon } from "bidmad-rn-plugin";

const isInitialized = await RNBidmadCommon.initializeSdk(
  "6b097551-7f78-11ed-a117-026864a21938", // iOS App Key
  "ff8090d3-3e28-11ed-a117-026864a21938"  // Android App Key
);

if (isInitialized) {
  // You can now start requesting ads
}
```

### 배너 광고

배너 광고는 앱의 UI 내에서 상단, 하단 또는 목록 중간에 위치합니다. 이 광고 형식은 화면에 계속 남아 있으며 일정 시간이 지난 후 자동으로 새로고침됩니다.

배너 광고 (RNBidmadBanner)는 아래와 같이 사용할 수 있습니다.

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

RNBidmadBanner의 크기는 미리 정해져 있습니다. "bannerSize" prop에 값을 제공하지 않으면 기본적으로 320x50 크기로 설정됩니다. 그러나 다른 크기의 배너 광고를 사용하는 경우 RNBidmadBannerSize 상수를 사용하여 크기 정보를 제공해야 합니다. 지원되는 크기를 이해하기 위해 다음 표를 참조하세요.

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

### 전면 광고

전면 광고는 사용자가 광고를 닫을 때까지 전체 화면에 광고를 표시합니다. 이 광고 형식은 일반적으로 페이지 A에서 B로 전환하는 중간에 표시됩니다.

전면 광고 (RNBidmadInterstitial)는 아래와 같이 사용할 수 있습니다.

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

### 리워드 광고

리워드 광고는 전체 화면 광고로, 일반적으로 비디오 또는 인터랙티브 콘텐츠를 포함합니다. 일정 시간이 지나면 광고는 사용자에게 보상을 제공하는 옵션을 제공하며, onComplete 또는 onSkip 콜백을 통과합니다. 광고를 완전히 시청한 사용자에게는 onComplete 콜백이 제공되며, 그렇지 않은 경우 onSkip 콜백이 제공됩니다.

리워드 광고 (RNBidmadReward)는 아래와 같이 사용할 수 있습니다.

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

### GDPR 인터페이스

일반 데이터 보호 규정(GDPR)은 EU 지역에서 정보 개인정보 보호에 관한 유럽 연합 규정입니다. 귀하의 앱 서비스가 EU 지역에서 사용되는 경우, 광고 제공을 위해 개인 데이터를 제공하는 데 동의하는지 사용자에게 먼저 물어봐야 합니다. Bidmad는 사용자로부터 동의 정보를 수집하는 양식 UI를 제공하는 Google User Messaging Platform 사용을 위한 Wrapper 인터페이스를 제공합니다.

GDPR 기능을 테스트할 때, 테스트 목적으로 다음 인터페이스를 사용하여 유럽 지역을 시뮬레이션할 수 있습니다.
```js
// UMP Test ID can be identified in console logs
// Please look for the following and copy the identifier
// UMPDebugSettings.testDeviceIdentifiers = @[ @"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" ];

gdprInterface?.setDebug(
  "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", // TEST DEVICE IDENTIFIER 
  true                                    // SIMULATE EU REGION? TRUE: EUROPE REGION - FALSE: DON'T SIMULATE
);
```

1. GDPR 인터페이스 인스턴스를 생성합니다.
```js
const gdprInterface = await RNBidmadGDPR.create();
```

2. 사용자에게 GDPR 동의 양식을 표시할 필요가 있는지 여부에 대한 정보를 요청합니다.
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

3. 사용자 동의가 필요한 경우 (RNBidmadUMPStatus.Required), UMP 양식을 로드합니다.
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

4. 사용자에게 UMP 양식을 표시합니다.
```js
await gdprInterface?.showForm();
```

5. onConsentFormDismissed 콜백에서 오류가 null인지 확인합니다. 오류가 null이면 사용자 동의가 성공적으로 수집된 것입니다.
```js
if (error === null) {
  // ** SUCCESSFULLY COLLECTED USER CONSENT STATUS **
  return;
} else {
  // ** SOMETHING WENT WRONG **
}
```

전체 과정은 다음과 같습니다.
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

### 기타 인터페이스

- 디버그 로그 활성화
```js
// setting debug mode to true enables debug logs to be printed
await RNBidmadCommon.setDebug(true);

// getting debug mode status
const isDebugMode = await RNBidmadCommon.isDebug();
```

- 구글 광고(애드몹 및 애드매니저)에 대한 테스트 디바이스 ID 설정
```js
// please look for the following in the console and copy the test identifier to set the test device id
// GADMobileAds.sharedInstance.requestConfiguration.testDeviceIdentifiers = @[ @"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ];

// setting the test device id
const testDeviceId = "your-test-device-id";
await RNBidmadCommon.setTestDeviceId(testDeviceId);

// getting the test device id
const retrievedId = await RNBidmadCommon.getTestDeviceId();
```

- 앱이 어린이 대상 광고만 받을 수 있는지 설정
```js
// setting the child-directed ads property
const isChild = await RNBidmadCommon.isChildDirectedTreatment();

// getting the child-directed ads property
await RNBidmadCommon.setChildDirectedAds(!isChild);
```

- 서버 측 콜백 활성화
```js
// setting true will enable server-side callbacks
await RNBidmadCommon.setUseServerSideCallback(true);

// getting the server-side callback status
const useSSC = await RNBidmadCommon.getUseServerSideCallback();
```

- 서버 측 콜백에 사용되는 CUID 설정
```js
await RNBidmadCommon.setCuid("YOUR-CUID"); // setter
const retrievedCuid = await RNBidmadCommon.getCuid(); // getter
```
