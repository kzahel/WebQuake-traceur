
chrome.app.runtime.onLaunched.addListener(function(launchData) {
    console.log('app loaunch')
    
    //var args = "+skill 3 +map e1m1"
    var args = "";
    
    chrome.app.window.create('Client/WebQuake.htm' + '?' + encodeURIComponent(args),
                             { defaultWidth: 512,
                               id:'WebQuake',
                               defaultHeight: 384  },
                             function(w) {
                                 console.log('window created');
                             })

})
