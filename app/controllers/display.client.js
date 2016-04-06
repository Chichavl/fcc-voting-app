'use strict';

(function () {
    var i = 0;
    var appUrl = window.location.origin;
    var siteName = document.getElementsByClassName('jsSiteName');
    
    for (i=0;i<siteName.length;i++) {
        siteName[i].innerHTML = appUrl;
    }
    
})();

