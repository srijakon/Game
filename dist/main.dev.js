"use strict";

// DECLARATION OF VARIABLES
var popped = 0;
var highScore = -1;
var balloonColours = ["#5979a6", "#8882c9", "#66cc86", "#d6d585", "#a96942", "#63bbb6", "#f0753d", "#a465a1", "#b74e68", "#f14646", "#b5da5d", "#74e27a", "#a07ae6"]; // ADDED AN ARRAY OF BALLOON COLOURS
// ADDING EVENT LISTENER FOR STARTING THE GAME -> BY SELECTING CLASSES(START, BALLOON) -> BY DISPLAYING START AS NONE AND BALLOON WILL APPEAR AS BLOCK

var setupStartGameEventListener = function setupStartGameEventListener() {
  document.querySelector(".start").addEventListener("click", function (e) {
    document.querySelector(".start").style.display = "none";
    document.querySelector(".balloon").style.display = "block";
    startGame(); //CALLING START GAME FUNCTION
  });
}; // STARTGAME FUNCTION -> BALLOON EVENTS(FOR BALLOONS TO BE POPPED), RESTART EVENT(FOR RESTARTING THE GAME), SET TIMER -> TIME LIMIT FOR THE BALLOONS


var startGame = function startGame() {
  setupBalloonEventListener();
  setupRestartEventListener();
  setTimer();
}; // BALLOON EVENT LISTENER -> FOR BALLOONS TO BE POPPED


var setupBalloonEventListener = function setupBalloonEventListener() {
  document.querySelector(".balloon").addEventListener("click", function (event) {
    popped++;
    clickedBalloon(event); // CLICKED BALLOON FUNCTION
  });
}; // CLICKED BALLOON FUNCTION ->


var clickedBalloon = function clickedBalloon(event) {
  var top = Math.floor(Math.random() * 501);
  var left = Math.floor(Math.random() * 501);
  document.querySelector(".balloon").style.top = top + "px";
  document.querySelector(".balloon").style.left = left + "px";
  var colourIndex = Math.floor(Math.random() * 13);
  var colour = balloonColours[colourIndex];
  event.target.style.background = colour;
}; // // RESTART EVENT LISTENER -> RESTARTING THE GAME BY CLICKING -> SELECTING RESTART CLASS AND ADDING A CLICK EVENT -> WHEN ITS CLICKED -> DISPLAY WILL BE NONE AND BALLOON WILL DISPLAY


var setupRestartEventListener = function setupRestartEventListener() {
  document.querySelector(".restart").addEventListener("click", function (e) {
    document.querySelector(".restart").style.display = "none";
    document.querySelector(".balloon").style.display = "inline-block";
    restart(); //CALLING RESTART FUNCTION
  });
}; // RESTART FUNCTION -> DISPLAY WILL BE NONE AND COUNTDOWN WILL APPEAR


var restart = function restart() {
  popped = 0;
  document.querySelector(".result").style.display = "none";
  document.querySelector(".countdown").style.display = "block";
  setTimer();
}; // // SET TIMER FUNCTION ->


var setTimer = function setTimer() {
  var target = new Date();
  target.setSeconds(target.getSeconds() + 10);
};

var timer = setInterval(function () {
  var now = new Date().getTime();
  var distance = target - now;
  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  document.querySelector(".countdown").innerHTML = seconds + "seconds left";

  if (distance < 0) {
    document.querySelector(".balloon").style.display = "none";
    document.querySelector(".countdown").style.display = "none";

    if (popped > highScore) {
      document.querySelector(".result").innerHTML = "Congratulations! You scored a new high of " + popped;
      highScore = popped;
    } else {
      document.querySelector(".result").innerHTML = "Oh dear! Your score of " + popped + "didn't beat the high score of " + highScore;
    }

    document.querySelector(".result").style.display = "block";
    document.querySelector(".restart").style.display = "block";
    clearInterval(timer);
  }
}, 1000);
setupStartGameEventListener();