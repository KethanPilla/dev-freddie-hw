
const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice');
const result = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', function() {
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
    } else {
      outcome = 'You lose!';
    }

    result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${outcome}`;
  });
});
