let popped = 0;

const balloons = document.querySelectorAll(".balloon");
balloons.forEach((balloon) => {
  document.addEventListener("click", (e) => {
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
    let gallery = document.querySelector("#balloon-gallery");
    let message = document.querySelector("#no-balloons");
    gallery.innerHTML = "";
    message.style.display = "block";
  }
}
