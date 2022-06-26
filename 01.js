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

// <滾動變色>
// 製作一個鈴鐺：用來提醒我們是否有客人進出
// 帶入鈴鐺的兩個設定：響鈴條件＋響鈴後要做什麼
// 設定觀察對象：來餐廳用餐的客人
const navbar = document.querySelector(".navbar"); //主
const header = document.querySelector(".header"); //客

// 創建 IntersectionObserver 能透過 observe() 方法設定要觀察的元素
let observer = new IntersectionObserver(changeColor);//bell 進出觸發changeColor
observer.observe(header);//觀察對象 不加冒號 因是變數 而非其他

function changeColor(entries) {
    // 觀察對象的資料(header entries) entries 能拿到所有目標元素進出(intersect)變化的資訊
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // 觀察對象離開視窗(header跟視窗相交與否) 取得每個 entry 資訊做一些處理或工作
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

    // 視窗最高  往下滑多少=往上升多少
    let windowTop = window.scrollY;
    // 視窗最低 視窗最高+視窗高度
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
        console.log("this:"+this,"args:",arguments);
        // 排除已有計時器
        if (timer) return;
        // 目前無人使用計時器 
        let callNow = immediate && !timer;
        // 清除計時器 感覺多餘(?)
        clearTimeout(timer);
        // 啟動計時器，20毫秒後執行。
        timer = setTimeout(() => {
            // 歸零計時器，供下次使用。
            timer = null;
            //開始做事
            func.apply(context, args);
        }, wait);
        // 立刻執行     immediate 第一次要不要做
        if (callNow) func.apply(context, args);
    }
}

//loading
// window.onload = () => {
//     let loading = document.getElementById("loading"); 
//         setTimeout(()=>{
//             loading.style.display = "none";
//         },5000);
// }

window.onload=()=>{
    let load=document.getElementById("loading");
    setTimeout(()=>{
        load.style.display="none";
    },0);
}