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

// 
function getComputerChoice(num) {
  if (num === 0) {
    return "Rock";
  } else if (num === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
