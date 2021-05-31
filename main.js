let popped = 0; //Declaring popped balloons as 0 first

let pop = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]; //Declaring an array for balloons to be popped

const balloons = document.querySelectorAll(".balloon"); //selecting the balloon class

balloons.forEach((balloon) => {
  //Using forEach loop to go through the balloons
  document.addEventListener("mouseover", (event) => {
    //Triggering an event when the balloon is clicked
    if (event.target.className === "balloon") {
      if (event.target.id == balloon.id) {
        pop.splice(pop.indexOf(event.target.id), 1);

        event.target.textContent = "POP!";

        checkAllPopped();
      }
    }
  });
});
// const removeBalloons = () => {
//   if()
// }
function checkAllPopped() {
  if (pop.length === 0) {
    let gallery = document.querySelector("#balloon-gallery");
    gallery.innerHTML = "";
    // alert("All popped!");
  }
}
