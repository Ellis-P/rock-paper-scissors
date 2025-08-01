/* 
getComputerChoice logic:
Goal - getComputerChoice randomly returns one of rock/paper/scissors
1. Generate a random number between 0 and 2 inclusive
2. Return rock, paper or scissors based on the number generated (e.g. if 1, return rock, 2 paper etc.)
*/

// Generates a random number between 0 and 2
function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 3);
  return randomNum;
}

// Evaluates the random number generated to determine which move to make
function getComputerChoice() {
  const num = getRandomNum();
  
  if (num === 0) {
    return "Rock";
  } else if (num === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

/* getHumanChoice logic:
prompt the user for input, converting to lower case and storing the result in a variable
check the response variable to see if it matches one of rock, paper or scissors
return the matching choice
*/

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

getHumanChoice();
