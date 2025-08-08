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
      console.log("It's a draw!");
    } else if (
      playerSelection === "rock" && computerChoice === "scissors" ||
      playerSelection === "paper" && computerChoice === "rock" ||
      playerSelection === "scissors" && computerChoice === "paper"
    ) {
      console.log(`GG! You won this round, ${playerSelection} beats ${computerChoice}.`);
      // humanScore++;
    } else {
      console.log(`Unlucky! You lost this round, ${computerChoice} beats ${playerSelection}.`);
      // computerScore++;
    }
    // console.log(`The score is: You - ${humanScore} | Computer - ${computerScore}`);
  }

const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const playerSelection = event.target.textContent.toLowerCase();
    playRound(playerSelection);
  });
});

// Full game loop, tracks scores and runs the playRound function five times. After five rounds, declares the result (win, lose or draw).
// function playGame () {
//   let humanScore = 0;
//   let computerScore = 0;

//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();

//   if (humanScore === computerScore) {
//     console.log(`Aaaand it's a draw, final score: You - ${humanScore} | Computer - ${computerScore}`);
//   } else if (humanScore > computerScore) {
//     console.log(`Congratulations, you won the game! Final score: You - ${humanScore} | Computer - ${computerScore}`);
//   } else {
//     console.log(`You lost! Better luck next time. Final score: You - ${humanScore} | Computer - ${computerScore}`);
//   }
// }

// playGame();



