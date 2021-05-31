let pop = []
const balloons = document.querySelectorAll(".balloon");

const initialGameSetup = () => {
  pop = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
}

const setUpBalloons = () => {
  balloons.forEach((balloon) => {
    document.addEventListener("click", (event) => {

      if (event.target.className === "balloon") {
        if (event.target.id == balloon.id) {
          pop.splice(pop.indexOf(event.target.id), 1)
          event.target.style.display = "none";
          checkAllPopped();  
        }
      }
    });
  });
}

//main issue is event listener is not being removed - any way of scrapping all click ones?
// use arrow function
function checkAllPopped() {
  if (pop.length == 0) {
    console.log("all popped!");
    document.querySelector(".success").style.display = "block"; 
    restart();
  }
}
const restart = () => {
  document.querySelector(".restart").style.display = "block";

  document.querySelector(".restart").addEventListener("click", (e) => {
    document.querySelector(".success").style.display = "none"; 
    document.querySelector(".restart").style.display = "none"; 
    balloons.forEach((balloon) => {
      balloon.style.display = "inline-block"
    })
    initialGameSetup();
  });
}

setUpBalloons();
initialGameSetup(); 
