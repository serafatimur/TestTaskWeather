let daysElements;
let selectedDayElement;
let circleWrapperArray;
let celsiusWrapperArray;
let iconsArray;

window.onload = function () {
    daysChildrenElementsArray = document.getElementById("days").children;
    selectedDayElement = document.getElementById("selectedDay");
    circleWrapperArray = document.getElementsByClassName("precipitationImage");
    celsiusWrapperArray = document.getElementsByClassName("temperature");
    iconsArray = document.getElementsByClassName("icon");
    resize();
    
    for (let i = 0; i < daysChildrenElementsArray.length; i++) {
        daysChildrenElementsArray[i].onclick = function()  {
            translateX(-i*100+"vw");
            for (let j = 0; j < daysChildrenElementsArray.length; j ++) {
                daysChildrenElementsArray[j].classList.remove("selected");
            }
            daysChildrenElementsArray[i].classList.add("selected");
        }
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