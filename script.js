let leftState = false;
let rightState = false;

function left() {
    leftState = !leftState;
    rightState = false;
    reRender();
};

function right() {
    leftState = false;
    rightState = !rightState;
    reRender();
};

function reRender() {
    var leftTarget = document.getElementById("leftdiv");
    var rightTarget = document.getElementById("rightdiv");

    if (leftState) {
        leftTarget.classList.add("leftOpen");
        leftTarget.classList.remove("leftClosed");
    } else {
        leftTarget.classList.remove("leftOpen");
        leftTarget.classList.add("leftClosed");
    };

    if (rightState) {
        rightTarget.classList.add("rightOpen");
        rightTarget.classList.remove("rightClosed");
    } else {
        rightTarget.classList.remove("rightOpen");
        rightTarget.classList.add("rightClosed");
    };
};