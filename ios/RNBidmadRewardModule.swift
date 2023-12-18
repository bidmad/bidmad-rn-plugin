import Foundation
import OpenBiddingHelper

@objcMembers
@objc(RNBidmadRewardModule)
class RNBidmadRewardModule: RCTEventEmitter, BIDMADOpenBiddingRewardVideoDelegate {

    private static let eventName = "BidmadRewardCallback"
    private static var instances: [String: (current: OpenBiddingRewardVideo, future: OpenBiddingRewardVideo?)] = [:]
    private static var isShown = false
    
    override func supportedEvents() -> [String]! {
        return [Self.eventName]
    }

    override static func requiresMainQueueSetup() -> Bool {
        return false
    }

    override static func moduleName() -> String! {
        return "RNBidmadRewardModule"
    }

    func createInstance(zoneId: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
        let instanceId = UUID().uuidString
        Self.instances[instanceId] = (OpenBiddingRewardVideo(zoneID: zoneId), nil)
        Self.instances[instanceId]!.current.delegate = self
        resolve(instanceId)
    }
    
    func load(instanceId: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
        guard let ad = Self.instances[instanceId]?.current else {
            return
        }
        
        guard ad.isLoaded == false else {
            onLoadAd(ad)
            return
        }
        
        ad.request()
        resolve(nil)
    }
    
    func show(instanceId: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        guard Self.isShown == false else {
            resolve(nil)
            return
        }

        DispatchQueue.main.async {
            guard let topViewController = BIDMADUtil.topMostController() else {
                resolve(nil)
                return
            }
            
            Self.instances[instanceId]?.current.show(on: topViewController)
            resolve(nil)
        }
    }

    func isLoaded(instanceId: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
        let loadStatus = Self.instances[instanceId]?.current.isLoaded
        resolve(loadStatus)
    }

    func disposeInstance(instanceId: String) {
        Self.instances.removeValue(forKey: instanceId)
    }
    
    func onLoadAd(_ bidmadAd: OpenBiddingRewardVideo) {
        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) || $0.value.future?.isEqual(bidmadAd) ?? false })
            .first?
            .key else {
            return
        }
        
        sendEvent(withName: Self.eventName, 
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardLoad",
                  ])
    }
    
    func onLoadFailAd(_ bidmadAd: OpenBiddingRewardVideo, error: Error) {
        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) })
            .first?
            .key else {
            return
        }
        
        sendEvent(withName: Self.eventName,
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardLoadFail",
                    "error": error.localizedDescription,
                  ])
    }
    
    func onShowAd(_ bidmadAd: OpenBiddingRewardVideo) {
        Self.isShown = true

        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) })
            .first?
            .key else {
            return
        }
        
        preloadAd(instanceId: instanceId)
        
        sendEvent(withName: Self.eventName,
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardShow",
                  ])
    }
    
    func onSkipAd(_ bidmadAd: OpenBiddingRewardVideo) {
        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) })
            .first?
            .key else {
            return
        }
        
        sendEvent(withName: Self.eventName,
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardSkip"
                  ])
    }
    
    func onCompleteAd(_ bidmadAd: OpenBiddingRewardVideo) {
        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) })
            .first?
            .key else {
            return
        }
        
        sendEvent(withName: Self.eventName,
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardComplete",
                  ])
    }
    
    func onClickAd(_ bidmadAd: OpenBiddingRewardVideo) {
        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) })
            .first?
            .key else {
            return
        }
        
        sendEvent(withName: Self.eventName,
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardClick",
                  ])
    }
    
    func onCloseAd(_ bidmadAd: OpenBiddingRewardVideo) {
        Self.isShown = false

        guard let instanceId = Self.instances
            .filter({ $0.value.current.isEqual(bidmadAd) })
            .first?
            .key else {
            return
        }
        
        Self.instances[instanceId] = (Self.instances[instanceId]!.future!, nil)
        
        sendEvent(withName: Self.eventName,
                  body: [
                    "instanceId": instanceId,
                    "action": "onRewardClose",
                  ])
    }
    
    func preloadAd(instanceId: String) {
        let futureAd = OpenBiddingRewardVideo(zoneID: Self.instances[instanceId]!.current.zoneID)
        futureAd.delegate = self
        
        Self.instances[instanceId] = (Self.instances[instanceId]!.current, futureAd)
        Self.instances[instanceId]?.future?.request()
    }
}
