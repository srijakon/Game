let popped = 0;
let highScore = -1;
let balloonColours = [
  "#5979a6",
  "#8882c9",
  "#66cc86",
  "#d6d585",
  "#a96942",
  "#63bbb6",
  "#f0753d",
  "#a465a1",
  "#b74e68",
  "#f14646",
  "#b5da5d",
  "#74e27a",
  "#a07ae6",
];

const setupStartGameEventListener = () => {
  document.querySelector(".start").addEventListener("click", (e) => {
    document.querySelector(".start").style.display = "none";
    document.querySelector(".balloon").style.display = "block";
    startGame();
  });
};

const startGame = () => {
  setupBalloonEventListener();
  setupRestartEventListener();
  setTimer();
};

const setupBalloonEventListener = () => {
  document.querySelector(".balloon").addEventListener("click", (event) => {
    popped++;
    clickedBalloon(event);
  });
};

const clickedBalloon = (event) => {
  let top = Math.floor(Math.random() * 501);
  let left = Math.floor(Math.random() * 501);

  document.querySelector(".balloon").style.top = top + "px";
  document.querySelector(".balloon").style.left = left + "px";

  let colourIndex = Math.floor(Math.random() * 13);
  let colour = balloonColours[colourIndex];
  event.target.style.background = colour;
};

const setupRestartEventListener = () => {
  document.querySelector(".restart").addEventListener("click", (e) => {
    document.querySelector(".restart").style.display = "none";
    document.querySelector(".balloon").style.display = "inline-block";
    restart();
  });
};

const restart = () => {
  popped = 0;
  document.querySelector(".result").style.display = "none";
  document.querySelector(".countdown").style.display = "block";
  setTimer();
};

const setTimer = () => {
  let target = new Date();
  target.setSeconds(target.getSeconds() + 10);

  let timer = setInterval(function () {
    let now = new Date().getTime();
    let distance = target - now;
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".countdown").innerHTML = seconds + " seconds left";

    if (distance < 0) {
      document.querySelector(".balloon").style.display = "none";
      document.querySelector(".countdown").style.display = "none";

      if (popped > highScore) {
        document.querySelector(".result").innerHTML =
          "Congratulations! You scored a new high of " + popped;
        highScore = popped;
      } else {
        document.querySelector(".result").innerHTML =
          "Oh dear! Your score of " +
          popped +
          " didn't beat the high score of " +
          highScore;
      }
      document.querySelector(".result").style.display = "block";
      document.querySelector(".restart").style.display = "block";

      clearInterval(timer);
    }
  }, 1000);
};

setupStartGameEventListener();
