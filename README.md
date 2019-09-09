# CapWKCheck

### Plugin.swift

```
public class BrowserView: CAPPlugin, WKUIDelegate, WKNavigationDelegate {
    
    var urlRequest: URLRequest!
    
    let browserView = WKWebView();
    
    @objc func open(_ call: CAPPluginCall) {
        guard let urlString = call.getString("url") else {
            call.error("Must provide a URL to open")
            return
        }
        
        CAPLog.print("Opening BrowserView")
        NSLog("Opening BrowserView Swift")

        DispatchQueue.main.async {
            NSLog("Entering dispatch queue")
            self.urlRequest = URLRequest(url: URL(string: urlString)!)
            self.browserView.navigationDelegate = self
            self.browserView.uiDelegate = self
            self.browserView.frame = CGRect(x: self.bridge.viewController.view.frame.minX + 10, y: self.bridge.viewController.view.frame.minY + 10, width: self.bridge.viewController.view.frame.maxX - 20, height: self.bridge.viewController.view.frame.maxY - 20)
            self.bridge.viewController.view.addSubview(self.browserView)
            self.browserView.load(self.urlRequest)
            call.resolve();
        }
    }
}
```

### Plugin.m

```
#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(BrowserView, "BrowserView",
           CAP_PLUGIN_METHOD(open, CAPPluginReturnPromise);
)
```
