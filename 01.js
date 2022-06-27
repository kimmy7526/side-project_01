// <彈跳視窗>
function showPopup() {
    let cont = document.getElementById("content");
    cont.style.visibility = "visible";
    cont.style.left = "10%";
    cont.style.top = "5%";
    cont.style.width = "80%";
    cont.style.height = "90%";
    let bgc = document.getElementById("mask");
    bgc.style.left = "0%";
    let navbar = document.getElementById("navbar");
    navbar.style.zIndex = "-1";
}
function hidePopup() {
    let cont = document.getElementById("content");
    cont.style.visibility = "hidden";
    let bgc = document.getElementById("mask");
    bgc.style.left = "-100%";
    let navbar = document.getElementById("navbar");
    navbar.style.zIndex = "100";
}

//漢堡選單基數閉合
let cnt = 0;
function toggle() {
    const bgc = document.getElementById("mask");
    let navbar = document.getElementById("navbar");
    if (++cnt % 2 != 0) {
        bgc.style.left = "0%";
    }
    else {
        bgc.style.left = "-100%";
    }
    console.log(cnt);
}

// 滾動變色
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

let observer = new IntersectionObserver(changeColor);
observer.observe(header);

function changeColor(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


//Slide
window.addEventListener("scroll", Throttle(scrolHandler, 100));
let slider = document.querySelectorAll("#slide");
function scrolHandler() {
    console.log("scroll", new Date().getTime());


    let windowTop = window.scrollY;
    let windowBottom = windowTop + window.innerHeight;

    slider.forEach(s => {
        let smiddle = s.offsetTop + s.offsetHeight / 2;
        if (smiddle < windowBottom && smiddle > windowTop) {
            s.classList.add("active");
        }
        else {
            s.classList.remove("active");
        }
    });
}
// Throttle
function Throttle(func, wait = 20, immediate = true) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        console.log("this:" + this, "args:", arguments);
        if (timer) return;
        let callNow = immediate && !timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, wait);
        if (callNow) func.apply(context, args);
    }
}

//loading
window.onload = () => {
    let load = document.getElementById("loading");
    setTimeout(() => {
        load.style.display = "none";
    }, 5000);
}