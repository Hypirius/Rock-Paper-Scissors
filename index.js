let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice == "scissors") {
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice == "scissors") {
    humanScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (!humanSelection) {
      break;
    }

    playRound(humanSelection, computerSelection);
  }

  if (computerScore > humanScore) {
    console.log("You lost!");
  } else if (humanScore > computerScore) {
    console.log("You won!");
  }
}

function getComputerChoice() {
  const ratio = Math.random();

  if (ratio < 0.33) {
    return "rock";
  } else if (ratio > 0.33 && ratio < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Pick your move").toLowerCase();
  console.log(humanChoice);

  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    console.log("Pick a valid move");
    return;
  }

  return humanChoice;
}

playGame();
