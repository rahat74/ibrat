// Page View Count
var countEl = document.querySelector("#pageView");

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/parves-hossain/itelmobile/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}
updateVisitCount();

var centerButton = document.querySelector(".centerButton");
var powerButton = document.querySelector(".power.button");
var backButton = document.querySelector(".back.button");
var menuButton = document.querySelector(".menu.button");
var callButton = document.querySelector(".call.button");
var portfolio = document.querySelector(".website");
var menu = document.querySelector(".menuPage");
var pageView = document.querySelector(".pageView");

// Open & Close Portfolio & Menu
centerButton.onclick = function () {
    portfolio.classList.add("open");
    menu.classList.remove("open");
    pageView.classList.remove("open");
}
menuButton.onclick = function () {
    menu.classList.add("open");
    portfolio.classList.remove("open");
    pageView.classList.remove("open");
}
callButton.onclick = function () {
    pageView.classList.add("open");
    menu.classList.remove("open");
    portfolio.classList.remove("open");
}
backButton.onclick = function () {
    menu.classList.remove("open");
    portfolio.classList.remove("open");
    pageView.classList.remove("open");
}
powerButton.onclick = function () {
    menu.classList.remove("open");
    portfolio.classList.remove("open");
    pageView.classList.remove("open");
}

// Show Date and Time
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var day = date.getUTCDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    document.getElementById("session").innerText = session;

    setTimeout(showTime, 1000);

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var showDate = day + "/" + month + "/" + year;
    document.getElementById("date").innerText = showDate;
    document.getElementById("date").textContent = showDate;

    var notificationTime = h + ":" + m + " " + session;
    document.querySelector(".notificationTime").innerText = notificationTime;
    document.querySelector("notificationTime").textContent = notificationTime;

}

showTime();