let computerPlay = () => {
  let value = Math.random()
  
  if (value>0.66) {
      return "rock";
  } else if (value<0.66 && value >0.33) {
      return "paper";
  } else {
      return "scissors";
  }
};

let computerScore = 0;
let playerScore = 0;
const results = document.querySelector('.results');

const playerWin = document.createElement('p');
playerWin.classList.add('playerWin');
playerWin.textContent = `Player played ${playerSelection}, Computer played ${computerSelection}. Player wins!`

results.appendChild(playerWin)

let playround = (computerSelection, playerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
      console.log("Invalid choice!");
      return;
  } else if (computerSelection === playerSelection) {
      console.log(`Player played ${playerSelection}, Computer played ${computerSelection}. It's a draw!`);
  } else if ((computerSelection === "rock" && playerSelection === "paper") ||
          (computerSelection === "paper" && playerSelection === "scissors") ||
          (computerSelection === "scissors" && playerSelection === "rock")) {
      console.log(`Player played ${playerSelection}, Computer played ${computerSelection}. Player wins!`);
      playerScore += 1;
  } else {
      console.log(`Player played ${playerSelection}, Computer played ${computerSelection}. Computer wins!`);
      computerScore +=1;
  };
  keepscore();
};

let keepscore = () => {
  if (playerScore == 3) {
    console.log(`Player: ${playerScore} vs. Computer: ${computerScore}. Player wins the game!`)
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 3) {
    console.log(`Player: ${playerScore} vs. Computer: ${computerScore}. Computer wins the game`)
    playerScore = 0;
    computerScore = 0;
  } else {
    console.log(`Player: ${playerScore} vs. Computer: ${computerScore}`)
  };
};


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playround(computerPlay(), button.id);
  });
});

