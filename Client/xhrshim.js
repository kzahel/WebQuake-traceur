var xhrsend = function(xhr,url) { 
    //console.log('create xhrsend deferred',url)
    var deferred = new Deferred(); // traceur defines this
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) { 
            deferred.callback(xhr);
        } 
    }; 
    xhr.send(); 
    return deferred; 
}; 
traceur.options.experimental=true;

function localStorageGetItem(key) {
    //console.log("localStorageGetItem",key);
    var deferred = new Deferred();
    chrome.storage.local.get(key, function(v){
        deferred.callback(v[key]);
    })
    return deferred;
}

function DeferSoon() {
    var d = new Deferred()
    setTimeout( function(){d.callback()},1 )
    return d;
}

function DeferWith(arg) {
    var d = new Deferred()
    setTimeout( function(){ d.callback(arg)},1 )
    return d;
}