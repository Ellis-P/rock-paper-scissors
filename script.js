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

// Prompts user for input and converts it to lower case. NOTE: Does not handle invalid inputs yet!
function getHumanChoice() {
  const playerInput = prompt("Your move! Select rock, paper or scissors.").toLowerCase();

  if (playerInput === "rock") {
    return "rock";
  } else if (playerInput === "paper") {
    return "paper";  
  } else if (playerInput === "scissors") {
    return "scissors";
  }
}

// Full game loop, tracks scores and runs the playRound function five times. After five rounds, declares the result (win, lose or draw).
function playGame () {
  let humanScore = 0;
  let computerScore = 0;

  // Play a single round
  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (
      humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper"
    ) {
      console.log(`GG! You won this round, ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`Unlucky! You lost this round, ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    console.log(`The score is: You - ${humanScore} | Computer - ${computerScore}`);
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore === computerScore) {
    console.log(`Aaaand it's a draw, final score: You - ${humanScore} | Computer - ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`Congratulations, you won the game! Final score: You - ${humanScore} | Computer - ${computerScore}`);
  } else {
    console.log(`You lost! Better luck next time. Final score: You - ${humanScore} | Computer - ${computerScore}`);
  }
}

playGame();