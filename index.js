
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

function getHumanChoice() {
  let humanChoice = prompt("Введите ваш ход: ").toLowerCase();
  return humanChoice;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return computerScore++
  }
}



function playGame() {
  for (i=0; i<5; i++) {
    let humanSelection = getHumanChoice();  
    let computerSelection = getComputerChoice();  

    playRound(humanSelection, computerSelection);
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
  }

  if (humanScore > computerScore || humanScore - 1 > computerScore) {
    console.log("You win the game! 🎉");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game! 🤖");
  } else {
    console.log("No one won! It's a tie! 😐");
  }
}

playGame();