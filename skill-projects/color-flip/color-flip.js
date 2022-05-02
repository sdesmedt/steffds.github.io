let colorSampleOne = document.getElementById("color-1");
let colorSampleTwo = document.getElementById("color-2");
let colorSampleThree = document.getElementById("color-3");
let colorSampleFour = document.getElementById("color-4");
let colorSampleFive = document.getElementById("color-5");
const randomButton = document.getElementById("random-color");
const lockInOne = document.getElementById("lock-1");
const lockInTwo = document.getElementById("lock-2");
const lockInThree = document.getElementById("lock-3");
const lockInFour = document.getElementById("lock-4");
const lockInFive = document.getElementById("lock-5");

let isLockedOne = false;
let isLockedTwo = false;
let isLockedThree = false;
let isLockedFour = false;
let isLockedFive = false;


function updateColorOne () {
    let randomColor = (Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6,"0"));
    colorSampleOne.style.backgroundColor = "#" + randomColor;
    document.getElementById("text-1").innerText = randomColor.toUpperCase();
}
function updateColorTwo () {
    let randomColor = (Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6,"0"));
    colorSampleTwo.style.backgroundColor = "#" + randomColor;
    document.getElementById("text-2").innerText = randomColor.toUpperCase();
}
function updateColorThree () {
    let randomColor = (Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6,"0"));
    colorSampleThree.style.backgroundColor = "#" + randomColor;
    document.getElementById("text-3").innerText = randomColor.toUpperCase();
}
function updateColorFour () {
    let randomColor = (Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6,"0"));
    colorSampleFour.style.backgroundColor = "#" + randomColor;
    document.getElementById("text-4").innerText = randomColor.toUpperCase();
}
function updateColorFive () {
    let randomColor = (Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6,"0"));
    colorSampleFive.style.backgroundColor = "#" + randomColor;
    document.getElementById("text-5").innerText = randomColor.toUpperCase();
}

function changeUnlockedColors () {
    if (isLockedOne === false) {
        updateColorOne();
    }
    if (isLockedTwo === false) {
        updateColorTwo();
    }
    if (isLockedThree === false) {
        updateColorThree();
    }
    if (isLockedFour === false) {
        updateColorFour();
    }
    if (isLockedFive === false) {
        updateColorFive();
    }
}

randomButton.onclick = changeUnlockedColors;

lockInOne.onclick = function(){
    if (isLockedOne) {
        isLockedOne = false;
        lockInOne.innerText = "Lock In";
        lockInOne.style.backgroundColor = "#003049";
    } else {
        isLockedOne = true;
        lockInOne.innerText = "Unlock";
        lockInOne.style.backgroundColor = "#2c7da0";
    }
}
lockInTwo.onclick = function(){
    if (isLockedTwo) {
        isLockedTwo = false;
        lockInTwo.innerText = "Lock In";
        lockInTwo.style.backgroundColor = "#003049";
    } else {
        isLockedTwo = true;
        lockInTwo.innerText = "Unlock";
        lockInTwo.style.backgroundColor = "#2c7da0";
    }
}
lockInThree.onclick = function(){
    if (isLockedThree) {
        isLockedThree = false;
        lockInThree.innerText = "Lock In";
        lockInThree.style.backgroundColor = "#003049";
    } else {
        isLockedThree= true;
        lockInThree.innerText = "Unlock";
        lockInThree.style.backgroundColor = "#2c7da0";
    }
}
lockInFour.onclick = function(){
    if (isLockedFour) {
        isLockedFour = false;
        lockInFour.innerText = "Lock In";
        lockInFour.style.backgroundColor = "#003049";
    } else {
        isLockedFour = true;
        lockInFour.innerText = "Unlock";
        lockInFour.style.backgroundColor = "#2c7da0";
    }
}

lockInFive.onclick = function(){
    if (isLockedFive) {
        isLockedFive = false;
        lockInFive.innerText = "Lock In";
        lockInFive.style.backgroundColor = "#003049";
    } else {
        isLockedFive = true;
        lockInFive.innerText = "Unlock";
        lockInFive.style.backgroundColor = "#2c7da0";
    }
}
