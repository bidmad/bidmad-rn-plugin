require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))
folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
  s.name         = "bidmad-rn-plugin"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "11.0" }
  s.source       = { :git => "https://github.com/bidmad/bidmad-rn-plugin.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,swift}"

  s.dependency "BidmadADOPCoupangAdapter-Dev", "1.0.0.10.0"
  s.dependency "BidmadAdFitAdapter-Dev", "3.12.7.10.0"
  s.dependency "BidmadAdPopcornAdapter-Dev", "2.6.5.10.1"
  s.dependency "BidmadAdpieAdapter-Dev", "1.6.1.10.0"
  s.dependency "BidmadAllianceInternetAdapter-Dev", "1.0.0.10.0"
  s.dependency "BidmadAppLovinAdapter-Dev", "13.0.0.10.0"
  s.dependency "BidmadAtomAdapter-Dev", "1.0.0.10.0"
  s.dependency "BidmadCoviAdapter-Dev", "1.0.0.10.1"
  s.dependency "BidmadFyberAdapter-Dev", "8.3.2.10.0"
  s.dependency "BidmadGoogleAdManagerAdapter-Dev", "11.10.0.10.0"
  s.dependency "BidmadGoogleAdMobAdapter-Dev", "11.10.0.10.0"
  s.dependency "BidmadIronSourceAdapter-Dev", "8.3.0.0.10"
  s.dependency "BidmadMobonAdapter-Dev", "0.6.17.10.0"
  s.dependency "BidmadMobwithAdapter-Dev", "1.0.0.10.0"
  s.dependency "BidmadPangleAdapter-Dev", "6.2.0.7.10"
  s.dependency "BidmadPartners-Dev/AdMobBidding", "1.0.5"
  s.dependency "BidmadPubmaticAdapter-Dev", "3.2.0.10.0"
  s.dependency "BidmadSDK-Dev", "6.11.1"
  s.dependency "BidmadTeadsAdapter-Dev", "5.0.27.10.0"
  s.dependency "BidmadUnityAdsAdapter-Dev", "4.12.3.10.0"
  s.dependency "BidmadVungleAdapter-Dev", "7.4.1.10.0"
  s.dependency "OpenBiddingHelper-Dev", "6.11.1"

  # Use install_modules_dependencies helper to install the dependencies if React Native version >=0.71.0.
  # See https://github.com/facebook/react-native/blob/febf6b7f33fdb4904669f99d795eba4c0f95d7bf/scripts/cocoapods/new_architecture.rb#L79.
  if respond_to?(:install_modules_dependencies, true)
    install_modules_dependencies(s)
  else
  s.dependency "React-Core"

  # Don't install the dependencies when we run `pod install` in the old architecture.
  if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then
    s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"
    s.pod_target_xcconfig    = {
        "HEADER_SEARCH_PATHS" => "\"$(PODS_ROOT)/boost\"",
        "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",
        "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"
    }
    s.dependency "React-Codegen"
    s.dependency "RCT-Folly"
    s.dependency "RCTRequired"
    s.dependency "RCTTypeSafety"
    s.dependency "ReactCommon/turbomodule/core"
   end
  end    
end
