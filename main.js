let popped = 0; //Declaring popped balloons as 0 first

let pop = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]; //Declaring an array for balloons to be popped

const balloons = document.querySelectorAll(".balloon"); //selecting the balloon class

balloons.forEach((balloon) => {
  //Using forEach loop to go through the balloons

  document.addEventListener("click", (event) => {
    //Triggering an event when the balloon is clicked

    if (event.target.className === "balloon") {
      if (event.target.id == balloon.id) {
        pop.splice(pop.indexOf(event.target.id), 1);

        // event.target.style.backgroundColor = "#ededed";

        event.target.textContent = "POP!";

        // removeEvent(event);

        checkAllPopped();
      }
    }
  });
});

function checkAllPopped() {
  if (pop.length === 0) {
    console.log("all popped!");

    let gallery = document.querySelector("#balloon-gallery");

    let message = document.querySelector("#no-balloons");

    gallery.innerHTML = "";

    alert("All popped!");
  }
}
