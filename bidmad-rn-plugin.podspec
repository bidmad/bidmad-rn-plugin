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

  s.dependency "BidmadSDK", "6.12.4"
  s.dependency "OpenBiddingHelper", "6.12.3"

  s.dependency "BidmadAdFitAdapter", "3.12.7.11.0"
  s.dependency "BidmadAdmixerAdapter", "2.0.2.11.1"
  s.dependency "BidmadAppLovinAdapter", "13.3.1.11.0"
  s.dependency "BidmadFyberAdapter", "8.3.7.11.0"
  s.dependency "BidmadGoogleAdManagerAdapter", "12.6.0.11.0"
  s.dependency "BidmadGoogleAdMobAdapter", "12.6.0.11.0"
  s.dependency "BidmadMobwithAdapter", "1.0.0.11.2"
  s.dependency "BidmadORTBAdapter", "1.0.0.11.2"
  s.dependency "BidmadPangleAdapter", "7.2.0.5.11.0"
  s.dependency "BidmadTaboolaAdapter", "3.8.33.11.2"
  s.dependency "BidmadTeadsAdapter", "5.2.0.11.2"
  s.dependency "BidmadUnityAdsAdapter", "4.15.0.11.0"
  s.dependency "BidmadVungleAdapter", "7.5.1.11.0"
  s.dependency "BidmadPartners/AdMobBidding", "1.0.7"

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
