
chrome.app.runtime.onLaunched.addListener(function(launchData) {
    console.log('app loaunch')
    
    //var args = "+skill 3 +map start"
    var args = "";
    
    chrome.app.window.create('Client/WebQuake.htm' + '?' + encodeURIComponent(args),
                             { defaultWidth: 512,
                               id:'WebQuake',
                               defaultHeight: 384  },
                             function(w) {
                                 console.log('window created');
                             })

    chrome.runtime.onMessage.addListener( function(msg) {
	console.log('got msg from ext',msg)
    })

})
