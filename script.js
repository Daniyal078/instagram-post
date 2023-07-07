function Search() {
    let sideBar = document.getElementById("side_bar");
    let topLogotwo = document.getElementById("top-logo-two");
    let topLogoone = document.getElementById("top-logo-one");
    let searchBox = document.getElementById("search-box");
    const liHide = document.getElementsByClassName("li_hide");

    if (sideBar.style.width === "250px" ||
        topLogotwo.style.display === "none" ||
        topLogoone.style.display === "block" ||
        searchBox.style.left === "-1000px") {

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
        if (liHide[i].style.display === "block") {
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

    if (sideBar.style.width === "250px" ||
        topLogotwo.style.display === "none" ||
        topLogoone.style.display === "block") {

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
        if (liHide[i].style.display === "block") {
            liHide[i].style.display = "none"
        } else {
            liHide[i].style.display = "block"
        }
    }
};

// for double tap like
// function DoubleClick() {
//     document.getElementById('like_after_img')[id].style.opacity = '100';
//     document.getElementById('like2')[id].style.opacity = '100';
//     document.getElementById('like2')[id].style.zIndex = '1';
// }

// function like() {
//     documnet.getElementById('like2')[id].style.opacity = '100';
//     documnet.getElementById('like2')[id].style.zIndex = '1';
// }

// for (let i = 0; i < 1000; i++) {
//     setTimeout(() => {
//         hide();
//         console.log(++i)
//     }, 1000 * i);
// }

// function hide() {
//     setTimeout(() => {
//         let elem = document.getElementById("like_after_img");
//         for (var i = 0; i < elem.length; i++) {
//             elem[i].style.opacity = '0';
//         }
//     }, 1000);
// }

const post = document.querySelector('.post');
const likesEl = document.querySelector('.likess');
const heart = document.querySelector('.heart-icon');

likesEl.innerText = "There are no likes so far";
let counter = 0;

post.addEventListener('dblclick', () => {
    counter++;
    if (counter === 1) likesEl.innerText = counter + ' like';
    else likesEl.innerText = counter + ' likess';

    heart.classList.add('animate-like');
    setTimeout(() => {
        heart.classList.remove('animate-like');
    }, 800);
});
