"use strict";

var popped = 0;
var balloons = document.querySelectorAll(".balloon");
balloons.forEach(function (balloon) {
  document.addEventListener("click", function (e) {
    if (e.target.className === "balloon") {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      removeEvent(e);
      checkAllPopped();
    }
  });
});

function removeEvent(e) {
  e.target.removeEventListener("click", function () {});
}

function checkAllPopped() {
  if (popped === 11) {
    console.log("all popped!");
    var gallery = document.querySelector("#balloon-gallery");
    var message = document.querySelector("#no-balloons");
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}