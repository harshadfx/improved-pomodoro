
function CalculateTime(element) {
    var timerMins = document.getElementById(element).getElementsByClassName("minutes").item(0).value;
    var timerSecs = document.getElementById(element).getElementsByClassName("seconds").item(0).value;
    var totalTime = timerMins*60 + timerSecs;
    console.log(timerMins);
    console.log(timerMins*60);
    console.log(timerSecs);
    console.log(totalTime);
    return totalTime;
}

function delay(time) {
    return new Promise((resolve, reject) => setTimeout(resolve, totalTime*1000));
}

var myMusic= document.getElementById("music");
function makeSound(){
    myMusic.play();
}

function startTimer(element) {
    var timeToWait = CalculateTime(element);
    delay(timeToWait)
    .then(makeSound())
    .catch((err) => console.error(err));
}

var pomodorroForm = document.getElementById("PomodorroTimer");
pomodorroForm.onsubmit = function(){
    var result = startTimer("studytimer");
    result = startTimer("reviewtimer");
    result = startTimer("resttimer");
    return false;
};


window.onload = function giveInitValues() {
    document.getElementById("studytimer").getElementsByClassName("minutes").item(0).value = "20";
}