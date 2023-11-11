// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

const choiceBtns = document.querySelectorAll(".btnGame");

const playerMove = document.getElementById("playerMove");
const computerMove = document.getElementById("computerMove");
const result = document.getElementById("result");

const randomMoves = ["Paper","Rock","Scissors"];

let player;
let computer;



choiceBtns.forEach(button => button.addEventListener("click", () => {  // if we have multiple button we can use forEach method..
    player = button.textContent;
    const player2 = `Player: ${player}`
    const computer2 = `Computer: ${randomMoves[randomMove()]}`

  
    playerMove.innerHTML = player2;
    computerMove.innerHTML = computer2;
    check();
}))


// rock.onclick = function(){
//   playerMove.innerHTML = "Rock";
//   computerMove.innerHTML = randomMoves[randomMove()];
//   check();
// }
// paper.onclick = function(){
//     playerMove.innerHTML = "Paper";
//     computerMove.innerHTML = randomMoves[randomMove()];
//     check();
    
//   }

// scissors.onclick = function(){
//     playerMove.innerHTML = "Scissors";
//     computerMove.innerHTML = randomMoves[randomMove()];
//     check();
//   }

  function randomMove(){
    return Math.floor(Math.random() * randomMoves.length);
  }
  function check() {
    const playerText = playerMove.textContent.split(": ")[1];
    const computerText = computerMove.textContent.split(": ")[1];

    if (
        (playerText === "Rock" && computerText === "Scissors") ||
        (playerText === "Paper" && computerText === "Rock") ||
        (playerText === "Scissors" && computerText === "Paper")
    ) {
        result.innerHTML = "WINN :)";
        result.style.color = "green";
    } else if (playerText === computerText) {
        result.innerHTML = "DRAW ..";
        result.style.color = "yellow";
    } else {
        result.innerHTML = "LOSE :(";
        result.style.color = "red";
    }
}
