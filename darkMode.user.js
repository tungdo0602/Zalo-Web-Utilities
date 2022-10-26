// ==UserScript==
// @name         Zalo Dark Mode
// @namespace    https://github.com/tungdo0602/Zalo-Web-Utilities/blob/main/darkMode.js
// @version      0.1
// @description  Simple Dark Mode
// @author       tungdo0602 (https://github.com/tungdo0602)
// @match        *://*.zalo.me/*
// @match        *://zalo.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zalo.me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
if(!document.querySelector("#zlRB")){
let zlRB = document.createElement("style");
zlRB.id = 'zlRB';
zlRB.innerText = `
.rbtext {
  animation: color-change 2.5s infinite;
}

@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: green; }
}
`
document.body.appendChild(zlRB);
}
window.setInterval(()=>{
    Array.from(document.querySelectorAll("*:not(.zl-avatar__alphabet):not(.flx-al-c.fake-textholder.truncate.fk-normal):not(#scroll-vertical):not(#scroll-vertical>div)")).map(n=>n.style.backgroundColor="black");
    Array.from(document.querySelectorAll("*:not(.zl-avatar__alphabet)")).map(n=>n.className+=" rbtext");
    Array.from(document.querySelectorAll("div:not(#scroll-vertical>div):not(#scroll-vertical)")).map(n=>n.style.borderColor='blue');
    Array.from(document.querySelectorAll("#scroll-vertical>div")).map(n=>n.style.backgroundColor='blue');
});
})();
