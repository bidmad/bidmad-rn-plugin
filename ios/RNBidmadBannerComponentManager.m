_Pragma("clang diagnostic push")
_Pragma("clang diagnostic ignored \"-Wstrict-prototypes\"")

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RNBidmadBannerComponentManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(zoneId, NSString)
RCT_EXPORT_VIEW_PROPERTY(onLoad, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onLoadFail, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onClickHandler, RCTDirectEventBlock)
RCT_EXTERN_METHOD(load:(nonnull NSNumber *)reactTag)

@end

_Pragma("clang diagnostic pop")
