"use strict";

var popped = 0;
document.addEventListener("click", function (event) {
  if (event.target.className === "balloon") {
    event.target.style.backgroundColor = "#ededed";
    event.target.textContent = "POP!";
    popped++;
    removeEvent(event);
    checkAllPopped();
  }
});