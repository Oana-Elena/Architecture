'use strict';

const mobileMenu = document.getElementsByClassName ("mobile-menu")[0];
const jsMenu = document.getElementsByClassName ("js-menu")[0];
const iconClose = document.getElementsByClassName ("icon-close")[0];

mobileMenu.addEventListener ('click', function () {
    console.log("mobileMenu was clicked");
    if (jsMenu.classList.contains ("z-index-0")) {
        jsMenu.classList.remove ("z-index-0");
        jsMenu.classList.add ("z-index-2")
    }
});

iconClose.addEventListener ('click', function () {
    console.log("iconClose was clicked");
    if (jsMenu.classList.contains ("z-index-2")) {
        jsMenu.classList.remove ("z-index-2");
        jsMenu.classList.add ("z-index-0")
    }
});
