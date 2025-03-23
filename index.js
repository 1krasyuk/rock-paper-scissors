

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
  return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

// function getHumanChoice() {
//   let humanChoice = prompt("Введите ваш ход: ").toLowerCase();
//   return humanChoice;
// }

// console.log(getHumanChoice());

let rockButton = document.querySelector("#rock"); //
rockButton.addEventListener("click", function () {  
  playRound("rock", getComputerChoice()); 
});

let paperButton = document.querySelector("#paper");  
paperButton.addEventListener("click", function () {  
  playRound("paper", getComputerChoice()); 
});

let scissorsButton = document.querySelector("#scissors"); 
scissorsButton.addEventListener("click", function () {  
  playRound("scissors", getComputerChoice()); 
});

let results = document.querySelector("#results");


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.innerHTML = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    results.innerHTML =  `You win! ${humanChoice} beats ${computerChoice}`;
   humanScore++;
  } else {
    results.innerHTML =  `You lose! ${computerChoice} beats ${humanChoice}`;
   computerScore++;
  }

  document.querySelector("#score").innerHTML = `Score: ${humanScore} - ${computerScore}`;
}



// function playGame() {
//   for (i=0; i<5; i++) {
//     let humanSelection = getHumanChoice();  
//     let computerSelection = getComputerChoice();  

//     playRound(humanSelection, computerSelection);
//     console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
//   }

//   if (humanScore > computerScore || humanScore - 1 > computerScore) {
//     console.log("You win the game! 🎉");
//   } else if (humanScore < computerScore) {
//     console.log("Computer wins the game! 🤖");
//   } else {
//     console.log("No one won! It's a tie! 😐");
//   }
// }

// playGame();




