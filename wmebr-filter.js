// ==UserScript==
// @name 			wmebr-info filter
// @description 	Hides evcs feed users PUR requests
// @namespace 		http://tampermonkey.net/
// @author          Robin Breman | L4 Waze NL | @robbre | https://github.com/RobinBreman/wmebr-info-filter
// @match           https://wmebr.info/ur/*
// @grant 			none
// @version 		0.0.1
// ==/UserScript==

(function () {
    'use strict';
    var version = '0.0.1';
   

    function hideRows() {

        console.log('wmebr-info filter is hiding rows ...');
        
        document.querySelectorAll('td').forEach(function(td) {
            if (td.textContent.includes('evcs feed')) {
              td.parentElement.style.display = 'none';
            }
          });
    }

   
    setTimeout(hideRows, 500);

})();