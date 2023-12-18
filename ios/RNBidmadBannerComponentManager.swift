import OpenBiddingHelper

@objcMembers
@objc(RNBidmadBannerComponentManager)
class RNBidmadBannerComponentManager: RCTViewManager {
    
    override func view() -> (RNBidmadBannerComponent) {
        RNBidmadBannerComponent()
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    func load(_ reactTag: NSNumber) {
        DispatchQueue.main.async { [weak self] in
            guard let correspondingView = self?
                .bridge
                .uiManager
                .view(forReactTag: reactTag) as? RNBidmadBannerComponent else {
                return
            }
            
            correspondingView.load()
        }
    }
}

@objcMembers
class RNBidmadBannerComponent : UIView, BIDMADOpenBiddingBannerDelegate {
    
    var zoneId: String? {
        didSet {
            associatedAd.zoneID = zoneId
        }
    }
    
    var onLoad: RCTDirectEventBlock?
    var onLoadFail: RCTDirectEventBlock?
    var onClickHandler: RCTDirectEventBlock?
    
    lazy var associatedAd: (OpenBiddingBanner & OBHCommunicationDelegate) = {
        let ad = OpenBiddingBanner(parentViewController: UIViewController(), rootView: self) as! (OpenBiddingBanner & OBHCommunicationDelegate)
        ad.parentViewController = nil
        ad.delegate = self
        return ad
    }()
    
    override func removeFromSuperview() {
        super.removeFromSuperview()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.backgroundColor = .clear
        
        DispatchQueue.main.async { [weak self] in
            Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { timer in
                guard let self = self,
                      let window = self.window,
                      let rootVC = window.rootViewController,
                      self.associatedAd.zoneID != nil,
                      self.associatedAd.zoneID?.isEmpty == false else {
                    return
                }
                
                self.associatedAd.parentViewController = rootVC
                self.associatedAd.requestView()
                timer.invalidate()
            }
        }
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func onLoadAd(_ bidmadAd: OpenBiddingBanner) {
        onLoad?([String: Any]())
    }
    
    func onClickAd(_ bidmadAd: OpenBiddingBanner) {
        onClickHandler?([String: Any]())
    }
    
    func onLoadFailAd(_ bidmadAd: OpenBiddingBanner, error: Error) {
        onLoadFail?([
            "error": error.localizedDescription
        ])
    }
    
    func load() {
        if associatedAd.parentViewController != nil {
            self.associatedAd.requestView()
        } else {
            Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] timer in
                guard let self = self,
                      self.associatedAd.parentViewController != nil else {
                    return
                }
                
                self.associatedAd.requestView()
                timer.invalidate()
            }
        }
    }
}
