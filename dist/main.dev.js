"use strict";

var popped = 0;
var pop = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var balloons = document.querySelector(".balloon");
balloons.forEach(function (balloon) {
  document.addEventListener("click", function (e) {
    if (e.target.className === "balloon") {
      // console.log("Target: :" + e.target.id);
      // console.log("Balloon: :" + balloon.id);
      if (e.target.id == balloon.id) {
        pop.splice(pop.indexOf(e.target.id), 1);
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        popped++;
        removeEvent(e);
        checkAllPopped();
      }
    }
  });
});

function removeEvent(e) {
  e.target.removeEventListener("click", function () {});
}

function checkAllPopped() {
  if (pop.length == 0) {
    console.log("all popped!");
    var gallery = document.querySelector("#balloon-gallery");
    var message = document.querySelector("#no-balloons");
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}