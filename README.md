# Zalo-Web-Reverse
## Get Props and react elements
```js
let getProps = () =>
Object.values(document.querySelector("#app>div"))[1].children.filter(n=>n)
```

## Simple Confirm Box
```js
getProps()[1]._owner.stateNode.confirm("content", "title", function(e){console.log(e)})
```
