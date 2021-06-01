"use strict";

// DECLARATION OF VARIABLES
var popped = 0;
var highScore = -1;
var baloonColours = ["#5979a6", "#8882c9", "#66cc86", "#d6d585", "#a96942", "#63bbb6", "#f0753d", "#a465a1", "#b74e68", "#f14646", "#b5da5d", "#74e27a", "#a07ae6"]; //DECLARED AN ARRAY OF COLOURS FOR DIFFERENT COLOURED BALLOONS TO APPEAR
// CREATED SETUPSTARTGAMEEVENTLISTENER -> ADDED AN EVENT BY SELECTING CLASS START, BALLOON AND DISPLAYING IT TO NONE AND BLOCK

var setupStartGameEventListener = function setupStartGameEventListener() {
  document.querySelector(".start").addEventListener("click", function (e) {
    document.querySelector(".start").style.display = "none";
    document.querySelector(".balloon").style.display = "block";
    startGame(); //CALLING STARTGAME FUNCTION
  });
}; // CREATED STARTGAME FUNCTION -> SETUPBALLOONEVENTLISTENER -> SETUPRESTARTEVENTLISTENER -> SETTIMER


var startGame = function startGame() {
  setupBalloonEventListener();
  setupRestartEventListener();
  setTimer();
}; // SETUPBALLOONEVENTLISTENER -> ADDED AN EVENT BY SELECTING BALLOON CLASS BY CLICKING


var setupBalloonEventListener = function setupBalloonEventListener() {
  document.querySelector(".balloon").addEventListener("click", function (event) {
    popped++; //

    clickedBalloon(event); //CALLING CLICKEDBALLOON FUNCTION
  });
}; // CLICKEDBALLOON FUNCTION ->


var clickedBalloon = function clickedBalloon(event) {
  var top = Math.floor(Math.random() * 501); //USING RANDOM METHOD TO PLACE BALLOON BETWEEN 0 TO 500 - MARGIN TOP

  var left = Math.floor(Math.random() * 501); //USING RANDOM METHOD TO PLACE BALLOON BETWEEN 0 TO 500 - MARGIN LEFT

  document.querySelector(".balloon").style.top = top + "px"; //

  document.querySelector(".balloon").style.left = left + "px";
  var colourIndex = Math.floor(Math.random() * 13); // CREATED A VARIABLE WHERE RANDOM METHOD IS USED BETEEN 0 TO 13

  var colour = balloonColours[colourIndex]; //CALLING ARRAY COLOURS

  event.target.style.background = colour; //CHANGING THE BACKGROUND COLOR
}; //SETUPRESTARTEVENTLISTENER FUNCTION -> SELECTING RESTART CLASS AND BALLOON CLASS AND  ADDING EVENT LISTENERS, DISPLAYING IT TO BE NONE AND INLINE-BLOCK


var setupRestartEventListener = function setupRestartEventListener() {
  document.querySelector(".restart").addEventListener("click", function (e) {
    document.querySelector(".restart").style.display = "none";
    document.querySelector(".balloon").style.display = "inline-block";
    restart(); //CALLING RESTART FUNCTION
  });
}; // RESTART FUNCTION


var restart = function restart() {
  popped = 0;
  document.querySelector(".result").style.display = "none";
  document.querySelector(".countdown").style.display = "block";
  setTimer();
}; // SETTIMER FUNCTION


var setTimer = function setTimer() {
  var target = new Date(); //CALLING DATE INBUILT METHOD

  target.setSeconds(target.getSeconds() + 10); //CALLING SETSECONDS AND GETSECONDS METHOD TO SET THE TARGET TIME = 10

  var timer = setInterval(function () {
    //CREATING TIMER FUNCTION
    var now = new Date().getTime(); //CALLING NEW DATE AND GET TIME METHODS

    var distance = target - now; // TARGET TIME AND CURRENT TIME IS DISTANCE

    var seconds = Math.floor(distance % (1000 * 60) / 1000); //CREATING A VARIABLE AND STORING THE SECONDS REMAINED

    document.querySelector(".countdown").innerHTML = seconds + " seconds left"; // IF STATEMENTS WHETHER TO CHECK THE SCORE IS HIGHER OR NOT

    if (distance < 0) {
      document.querySelector(".balloon").style.display = "none";
      document.querySelector(".countdown").style.display = "none";

      if (popped > highScore) {
        document.querySelector(".result").innerHTML = "Congratulations! You scored a new high of " + popped;
        highScore = popped;
      } else {
        document.querySelector(".result").innerHTML = "Oh dear! Your score of " + popped + " didn't beat the high score of " + highScore;
      }

      document.querySelector(".result").style.display = "block";
      document.querySelector(".restart").style.display = "block";
      clearInterval(timer); //USED INBUILT TO CLEAR THE TIMER
    }
  }, 1000);
};

setupStartGameEventListener();