// ==UserScript==
// @name         Zalo Dark Mode
// @namespace    https://github.com/tungdo0602/Zalo-Web-Utilities/blob/main/darkMode.js
// @version      0.5
// @description  Simple Dark Mode
// @author       tungdo0602 (https://github.com/tungdo0602)
// @match        *://*.zalo.me/*
// @match        *://zalo.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zalo.me
// @grant        none
// ==/UserScript==
(function(){
window.setInterval(()=>{
    //Things
    Array.from(document.querySelectorAll("span-15")).map(n=>{if(!n.parentElement.className.includes("zlmbox")){n.parentElement.className+=' zlmbox'}});
    Array.from(document.querySelectorAll(".quote-banner-content")).map(n=>{if(!n.parentElement.className.includes("zlmbox")){n.parentElement.className+=' zlmbox'}});
    Array.from(document.querySelectorAll(".text")).map(n=>{if(!n.parentElement.className.includes("zlmbox")){n.parentElement.className+=' zlmbox'}});
    Array.from(document.querySelectorAll(".card--link-content")).map(n=>{if(!n.parentElement.className.includes("zlmbox")){n.parentElement.className+=' zlmbox'}});
    Array.from(document.querySelectorAll(".card-send-time")).map(n=>{if(!n.parentElement.className.includes("zlmbox")){n.parentElement.className+=' zlmbox'}});
    /*Global*/
    Array.from(document.querySelectorAll("*:not(.zl-avatar__alphabet):not(.flx-al-c.fake-textholder.truncate.fk-normal):not(#scroll-vertical):not(#scroll-vertical>div):not(style):not(script):not(.zl-modal):not(.zl-modal__container):not(.mn-modal):not(.conv-item-setting):not(#resize-handle):not(.conv-unread):not(#main-tab):not(.leftbar-tab):not(.nav__tabs__zalo):not(.card):not(.card-send-time__sendTime):not(.card-send-time):not(.text):not(span-15):not(span-13):not(.zlmbox):not(.quote-banner):not(.card-sender-name):not(.card-sender-name>span):not(.quote-line):not(.quote-banner-content):not(.quote-name-container):not(.quote-name):not(.quote-banner-name):not(.quote-text):not(.text-is-link):not(.card--link-content):not(div-15):not(.card--link-container):not(.card-content):not(span-b14):not(.card--link-img):not(.card-send-status):not(.card-send-status>span):not(.card--undo):not(.card--undo>span)")).map(n=>n.style.backgroundColor='#282c34');
    Array.from(document.querySelectorAll("*:not(.zl-avatar__alphabet):not(.zl-avatar):not(style):not(script):not(.conv-unread)")).map(n=>n.style.color='#abb2bf');
    //Array.from(document.querySelectorAll("div:not(#scroll-vertical>div):not(#scroll-vertical)")).map(n=>n.style.borderColor='#282c34');
    Array.from(document.querySelectorAll("#scroll-vertical")).map(n=>n.style.backgroundColor='#d3d3d3');
    /*Left Bar*/
    try{
        document.querySelector("#main-tab").style.backgroundColor='#21252b';
        Array.from(document.querySelectorAll(".leftbar-tab")).map(n=>n.style.backgroundColor='#21252b');
        Array.from(document.querySelectorAll(".nav__tabs__zalo")).map(n=>n.style.backgroundColor='#21252b');
    }catch{}
    /*Message Card*/
    try{
        Array.from(document.querySelectorAll(".card")).map(n=>n.style.backgroundColor='#21252b');
        Array.from(document.querySelectorAll(".card-send-time__sendTime")).map(n=>n.style.backgroundColor='#21252b');
        Array.from(document.querySelectorAll(".card-send-time")).map(n=>n.style.backgroundColor='#21252b');
        Array.from(document.querySelectorAll(".quote-banner")).map(n=>n.style.backgroundColor='#21252b');
        Array.from(document.querySelectorAll(".quote-line")).map(n=>n.style.backgroundColor='#21252b');
        Array.from(document.querySelectorAll(".quote-banner-name")).map(n=>n.style.backgroundColor='#21252b');
    }catch{}
    /*Main 2*/
    try{
        document.querySelector(".setting--bottom").parentElement.style.marginRight='-6.25px';
    }catch{}
    try{
        document.querySelector("#messageViewScroll").parentElement.style.marginRight='-6.25px';
    }catch{}
});
})();
