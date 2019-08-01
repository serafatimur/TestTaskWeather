window.onload = function() {
    resize();
}
window.onresize = function() {
    resize();
}
function resize() {
    let ratio = document.body.clientWidth/document.body.clientHeight;
    let circleWidth = 14/ratio;
    let celsiusWidth = 3/ratio;
    let iconWidth = 50/ratio;
    let circleWrapper = document.getElementById("precipitationImage").children[0];
    let celsiusWrapper = document.getElementById("temperature").children[1];
    let iconsArray = document.getElementsByClassName("icon");

    if ( circleWidth > 36) {
        circleWidth = 36;
    }
    circleWrapper.style.width = circleWidth + '%';
    circleWrapper.style.paddingBottom = circleWidth + '%';

    if (iconWidth > 80) {
        iconWidth = 80;
    }
    celsiusWrapper.style.width = celsiusWidth + '%';
    celsiusWrapper.style.paddingBottom = celsiusWidth + '%';
    
    for (let i = 0; i < iconsArray.length; i++) {
        iconsArray[i].children[0].style.width = iconWidth + '%';
        iconsArray[i].children[0].style.paddingBottom = iconWidth + '%';
    }
}