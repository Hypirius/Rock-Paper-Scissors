const computerScore = 0;
const humanScore = 0;

function playRound() {}

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

  if (
    humanChoice !== "rock" ||
    humanChoice !== "paper" ||
    humanChoice !== "scissors"
  ) {
    console.log("Pick a valid move");
    return;
  }

  return humanChoice;
}
