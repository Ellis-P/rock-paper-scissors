// Generates a random number between 0 and 2
function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 3);
  return randomNum;
}
// Evaluates the random number generated to determine which move to make
function getComputerChoice() {
  const num = getRandomNum();
  
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// Play a single round
function playRound(playerSelection) {
  const computerChoice = getComputerChoice();

  if (playerSelection === computerChoice) {
    roundResult.textContent = "It's a draw!";
  } else if (
    playerSelection === "rock" && computerChoice === "scissors" ||
    playerSelection === "paper" && computerChoice === "rock" ||
    playerSelection === "scissors" && computerChoice === "paper"
  ) {
    roundResult.textContent = `GG! You won this round, ${playerSelection} beats ${computerChoice}.`;
    humanScore++;
  } else {
    roundResult.textContent = `Unlucky! You lost this round, ${computerChoice} beats ${playerSelection}.`;
    computerScore++;
  }

  gameResult();
}
// Check result and remove event handlers based on score, to avoid going above 5 points
function gameResult () {
  if (!(humanScore === 5 || computerScore === 5)) {
    currentScore.textContent = `The score is: You - ${humanScore} | Computer - ${computerScore}`;
    return;
  }
  
  if (humanScore === 5) {
    currentScore.textContent = `Congratulations, you won the game! Final score: You - ${humanScore} | Computer - ${computerScore}`;
  }

  if (computerScore === 5) {
    currentScore.textContent = `You lost! Better luck next time. Final score: You - ${humanScore} | Computer - ${computerScore}`;
  }
  // Remove event listener once games ends (player or computer has 5 points)
  buttons.forEach((btn) => {
    btn.removeEventListener("click", handleClick)
  });
}
// Click handler function, necessary for easy listener removal
function handleClick(event) {
  const playerSelection = event.target.textContent.toLowerCase();
  playRound(playerSelection);
}
// Variables
const roundResult = document.querySelector(".round-result");
const currentScore = document.querySelector(".current-score");
const buttons = document.querySelectorAll(".button");
const gameInfo = document.querySelector(".game-info");
let humanScore = 0;
let computerScore = 0;
// Add event listeners to all buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});



