window.setInterval(()=>{
    Array.from(document.querySelectorAll("*:not(.zl-avatar__alphabet):not(.flx-al-c.fake-textholder.truncate.fk-normal)")).map(n=>n.style.backgroundColor="black");
    Array.from(document.querySelectorAll("*:not(.zl-avatar__alphabet)")).map(n=>n.style.color="blue");
    Array.from(document.querySelectorAll("div")).map(n=>n.style.borderColor='blue');
});
