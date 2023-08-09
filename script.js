function Search() {
    let sideBar = document.getElementById("side_bar");
    let topLogotwo = document.getElementById("top-logo-two");
    let topLogoone = document.getElementById("top-logo-one");
    let searchBox = document.getElementById("search-box");
    const liHide = document.getElementsByClassName("li_hide");
    // let canvesBody = document.body.addEventListener('click');


    if (sideBar.style.width <= "250px" &
        topLogotwo.style.display <= "none" &
        topLogoone.style.display <= "block" &
        searchBox.style.left <= "-1000px") {

        sideBar.style.width = "70px"
        topLogotwo.style.display = "block"
        topLogoone.style.display = "none"
        searchBox.style.left = "0px"
    }
    else {
        sideBar.style.width = "250px"
        topLogotwo.style.display = "none"
        topLogoone.style.display = "block"
        searchBox.style.left = "-1000px"
    }
    for (let i = 0; i < liHide.length; i++) {
        if (liHide[i].style.display <= "block") {
            liHide[i].style.display = "none"
        } else {
            liHide[i].style.display = "block"
        }
    }
};

// for notifactions
function Notifaction() {
    let sideBar = document.getElementById("side_bar");
    let topLogotwo = document.getElementById("top-logo-two");
    let topLogoone = document.getElementById("top-logo-one");
    let Notifaction = document.getElementById("Notifaction");
    const liHide = document.getElementsByClassName("li_hide");

    if (sideBar.style.width <= "250px" &
        topLogotwo.style.display <= "none" &
        topLogoone.style.display <= "block") {

        sideBar.style.width = "70px"
        topLogotwo.style.display = "block"
        topLogoone.style.display = "none"
        Notifaction.style.left = "0px"
    }
    else {
        sideBar.style.width = "250px"
        topLogotwo.style.display = "none"
        topLogoone.style.display = "block"
        Notifaction.style.left = "-1000px"

    }
    for (let i = 0; i < liHide.length; i++) {
        if (liHide[i].style.display <= "block") {
            liHide[i].style.display = "none"
        } else {
            liHide[i].style.display = "block"
        }
    }
};


// hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
// hide navbar end


