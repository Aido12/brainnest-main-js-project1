let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const computer = ['rock', 'paper', 'scissors'];
  return computer[Math.floor(Math.random() * computer.length)];
}

function playRound() {
  const playerSelection = prompt(
    'Please pick Paper, Rock, Scissors',
  ).toLowerCase();

  const computerSelection = computerPlay();
  console.log(`Computer = ${computerSelection}`);
  console.log(`Player = ${playerSelection}`);
  if (playerSelection == computerSelection) {
    return 'Its a Tie';
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    playerScore++;
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose ${computerSelection} beats ${playerSelection}`;
  }
}

function game(playerSelection, computerSelection) {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore == computerScore) {
    console.log('5 rounds, its a tie');
  } else if (playerScore > computerScore) {
    console.log('You win the game');
  } else if (playerScore < computerScore) {
    console.log('You lose the game');
  }
}

game();
