let popped = 0;

document.addEventListener("click", (event) => {
  if (event.target.className === "balloon") {
    event.target.style.backgroundColor = "#ededed";
    event.target.textContent = "POP!";
    popped++;
    removeEvent(event);
    checkAllPopped();
  }
});
