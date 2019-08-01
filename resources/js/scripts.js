let todayButton;
let tomorrowButton;
let dayAfterTomorrowButton;
let selectedDayElement;

window.onload = function () {
    resize();
    todayButton = document.getElementById("today");
    tomorrowButton = document.getElementById("tomorrow");
    dayAfterTomorrowButton = document.getElementById("dayAfterTomorrow");
    selectedDayElement = document.getElementById("selectedDay");

    tomorrowButton.onclick = function() {
        translateX("-33.3333%");
        tomorrowButton.classList.add("selected");
        todayButton.classList.remove("selected")
        dayAfterTomorrowButton.classList.remove("selected");
    }

    todayButton.onclick = function() {
        translateX("0");
        tomorrowButton.classList.remove("selected");
        todayButton.classList.add("selected")
        dayAfterTomorrowButton.classList.remove("selected");
    }

    dayAfterTomorrowButton.onclick = function() {
        translateX("-66.6666%")
        tomorrowButton.classList.remove("selected");
        todayButton.classList.remove("selected")
        dayAfterTomorrowButton.classList.add("selected");
    }
}

window.onresize = function () {
    resize();
}

function resize() {
    let ratio = document.body.clientWidth / document.body.clientHeight;
    let circleWidth = 14 / ratio;
    let celsiusWidth = 3 / ratio;
    let iconWidth = 50 / ratio;
    let circleWrapperArray = document.getElementsByClassName("precipitationImage");
    let celsiusWrapperArray = document.getElementsByClassName("temperature");
    let iconsArray = document.getElementsByClassName("icon");

    if (circleWidth > 36) {
        circleWidth = 36;
    }

    for (let i = 0; i < circleWrapperArray.length; i++) {
        circleWrapperArray[i].children[0].style.width = circleWidth + '%';
        circleWrapperArray[i].children[0].style.paddingBottom = circleWidth + '%';
    }

    if (iconWidth > 80) {
        iconWidth = 80;
    }

    for (let i = 0; i < celsiusWrapperArray.length; i++) {
        celsiusWrapperArray[i].children[1].style.width = celsiusWidth + '%';
        celsiusWrapperArray[i].children[1].style.paddingBottom = celsiusWidth + '%';
    }

    for (let i = 0; i < iconsArray.length; i++) {
        iconsArray[i].children[0].style.width = iconWidth + '%';
        iconsArray[i].children[0].style.paddingBottom = iconWidth + '%';
    }
}

function translateX(coord) {
    selectedDayElement.style.transform = "translateX(" + coord +")";
}