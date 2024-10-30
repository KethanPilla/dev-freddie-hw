const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice[data-choice]');
const result = document.getElementById('result');
const userScoreDisplay = document.getElementById("printUserScore");
const computerScoreDisplay = document.getElementById("printComputerScore");
const resetButton = document.getElementById('resetButton');

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5; // Maximum number of rounds

buttons.forEach(button => {
  button.addEventListener('click', function() {
    if (roundsPlayed < maxRounds) {
      const userChoice = this.getAttribute('data-choice');
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      let outcome = '';

      if (userChoice === computerChoice) {
        outcome = "It's a tie!";
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        outcome = 'You win!';
        userScore++;
      } else {
        outcome = 'You lose!';
        computerScore++;
      }

      roundsPlayed++; // Increment the rounds played

      result.textContent = `Round ${roundsPlayed}: You chose ${userChoice}, computer chose ${computerChoice}. ${outcome}`;
      userScoreDisplay.textContent = `User Score: ${userScore}`;
      computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

      if (roundsPlayed === maxRounds) {
        // Determine the final result
        let finalResult = '';
        if (userScore > computerScore) {
          finalResult = 'Congratulations, you won the game!';
        } else if (userScore < computerScore) {
          finalResult = 'Sorry, you lost the game!';
        } else {
          finalResult = "It's a tie game!";
        }

        // Display the final result
        result.textContent += `\nGame Over! ${finalResult}`;

        // Disable the buttons to prevent further clicks
        buttons.forEach(button => {
          button.disabled = true;
        });

        // reset button
        resetButton.style.display = 'inline-block';
      }
    }
  });
});

resetButton.addEventListener('click', () => {
  // Reset game variables
  userScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  // Reset the display
  userScoreDisplay.textContent = '';
  computerScoreDisplay.textContent = '';
  result.textContent = 'Game reset. Choose your move!';

  // Enable the buttons
  buttons.forEach(button => {
    button.disabled = false;
  });

  // Hide the reset button
  resetButton.style.display = 'none';
});
