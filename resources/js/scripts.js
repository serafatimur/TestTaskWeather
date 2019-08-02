const DAYSCOUNT = 3;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let daysElements;
let selectedDayElement;
let circleWrapperArray;
let celsiusWrapperArray;
let iconsArray;
let data;
let townNameElement;
let dayTextBigElements;
let dayWheatherTextElements;
let dayImgBigElements;
let dayTempTextElements;
let dayTextElements;
let dayImgElements;
let celsiusElements;


window.onload = function () {
    data = getWheather();
    daysChildrenElementsArray = document.getElementById("days").children;
    selectedDayElement = document.getElementById("selectedDay");
    circleWrapperArray = document.getElementsByClassName("precipitationImage");
    celsiusWrapperArray = document.getElementsByClassName("temperature");
    iconsArray = document.getElementsByClassName("icon");
    townNameElement = document.getElementById("townName");
    dayTextBigElements = document.getElementsByClassName("dayTextBig");
    dayWheatherTextElements = document.getElementsByClassName("dayWheatherText");
    dayImgBigElements = document.getElementsByClassName("dayImgBig");
    dayTempTextElements = document.getElementsByClassName("dayTempText");
    dayTextElements = document.getElementsByClassName("dayText");
    dayImgElements = document.getElementsByClassName("dayImg");
    celsiusElements = document.getElementsByClassName("celsius");
    
    resize();
    setData(data);

    for (let i = 0; i < daysChildrenElementsArray.length; i++) {
        daysChildrenElementsArray[i].onclick = function () {
            if (!daysChildrenElementsArray[i].classList.contains("selected")) {
                window.getSelection().removeAllRanges();
                translateX(-i * 100 + "vw");
                for (let j = 0; j < daysChildrenElementsArray.length; j++) {
                    daysChildrenElementsArray[j].classList.remove("selected");
                }
                daysChildrenElementsArray[i].classList.add("selected");
            }
        }
    }
}

window.onresize = function () {
    resize();
}

function resize() {
    selectedDayElement.style.transitionProperty = "none";
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
    selectedDayElement.style.transitionProperty = "transform";
    selectedDayElement.style.transform = "translateX(" + coord + ")";
}

function setData(wheatherData) {
    if (wheatherData != "error") {
        setTownName(wheatherData.city.name);
        for (let i = 0; i < wheatherData.list.length; i++) {
            if (wheatherData.list[i] != undefined) {
                setImg(wheatherData.list[i].weather[0].icon, wheatherData.list[i].weather[0].description, i);

                setWheatherText(wheatherData.list[i].weather[0].description, i);

                setTempText(wheatherData.list[i].temp.day, i);

                setDate(new Date(wheatherData.list[i].dt*1000), i);
            } else {
                setErrorData(i);
            }
        }
    } else {
        for (let i = 0; i < DAYSCOUNT; i++) {
            setErrorData(i);
        }
    }
}


function setImg(src, alt, i) {
    dayImgBigElements[i].src = "static/img/SVG/" + src + ".svg";
    dayImgBigElements[i].alt = alt;
    dayImgElements[i].src = "static/img/SVG/" + src + ".svg";
    dayImgElements[i].alt = alt;
}

function setWheatherText(wheatherText, i) {
    dayWheatherTextElements[i].innerHTML = wheatherText.charAt(0).toUpperCase() + wheatherText.slice(1);
}

function setTownName(townName) {
    townNameElement.innerHTML = townName;
}

function setTempText(tempText, i) {
    dayTempTextElements[i].innerHTML = Math.round(tempText - 273.15);
}

function setDate(date, i) {
    dayTextElements[i].innerHTML = date.getDate() + " " + monthNames[date.getMonth()];
    dayTextBigElements[i].innerHTML = dayTextBigElements[i].innerHTML + date.getDate() + " " + monthNames[date.getMonth()];
}

function setErrorData(i) {
    setTownName("no information");
    setImg("sad", "no information", i);
    setWheatherText("no information", i);
    dayTempTextElements[i].innerHTML = "";
    setDate(new Date(new Date().getTime() + i * (24 * 60 * 60 * 1000)), i);
    celsiusElements[i].style.display = "none";
}