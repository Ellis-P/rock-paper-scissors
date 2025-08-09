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
    result.textContent = "It's a draw!";
  } else if (
    playerSelection === "rock" && computerChoice === "scissors" ||
    playerSelection === "paper" && computerChoice === "rock" ||
    playerSelection === "scissors" && computerChoice === "paper"
  ) {
    result.textContent = `GG! You won this round, ${playerSelection} beats ${computerChoice}.`;
    humanScore++;
  } else {
    result.textContent = `Unlucky! You lost this round, ${computerChoice} beats ${playerSelection}.`;
    computerScore++;
  }

  gameResult();
}

// Full game loop, tracks scores and runs the playRound function five times. After five rounds, declares the result (win, lose or draw).
function gameResult () {
  if (humanScore === 5) {
    result.textContent = `Congratulations, you won the game! Final score: You - ${humanScore} | Computer - ${computerScore}`;
  } else if (computerScore === 5) {
    result.textContent = `You lost! Better luck next time. Final score: You - ${humanScore} | Computer - ${computerScore}`;
  } else {
    result.textContent = `The score is: You - ${humanScore} | Computer - ${computerScore}`;
  }
}

// Button click event listener
const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const playerSelection = event.target.textContent.toLowerCase();
    playRound(playerSelection);
  });
});

const gameInfo = document.querySelector(".gameInfo");
const result = document.createElement("p");
gameInfo.appendChild(result);
let humanScore = 0;
let computerScore = 0;



