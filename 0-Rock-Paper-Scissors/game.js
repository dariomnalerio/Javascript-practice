const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");
let computerScore = localStorage.getItem("computerScore") || 0;
let userScore = localStorage.getItem("userScore") || 0;

function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]; // 0, 1, 2
}

function playGame(userChoice) {
  const computerChoice = generateComputerChoice();
  let resultMessage;

  // Check who wins the game and update the result message
  if (userChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage = "You win!";
    userScore++;
    localStorage.setItem("userScore", userScore);
  } else {
    resultMessage = "You lose!";
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
  }

  // Update the result message and score
  resultDiv.textContent = `${resultMessage} Computer score: ${computerScore}, Your score: ${userScore}`;
}


// Get player choice
document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame("scissors");
});
