// function to loop thru game 5 times

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }

  // function to make computer pick random from array

  function computerPlay() {
    const computer = ['Rock', 'Paper', 'Scissors'];
    return computer[Math.floor(Math.random() * computer.length)];
  }

  // function to play rock paper scissors
  function playRound() {
    const playerSelection = prompt(
      'Please pick Paper, Rock, Scissors',
    ).toUpperCase();
    const computerSelection = computerPlay();
    console.log(`player = ${playerSelection}`);
    console.log(`computer = ${computerSelection}`);

    // playerSelection = Rock
    if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
      return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
      return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'ROCK' && computerSelection === 'Rock') {
      return 'Its a draw';
    }

    // playerSlection = Scissors
    if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
      return 'You Win! Scissors beats Paper';
    } else if (
      playerSelection === 'SCISSORS' &&
      computerSelection === 'Scissors'
    ) {
      return 'Its a draw';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
      return 'You Lose! Rock beats Scissors';
    }

    // playerSlection = Paper
    if (playerSelection === 'PAPER' && computerSelection === 'Paper') {
      return 'Its a draw';
    } else if (
      playerSelection === 'PAPER' &&
      computerSelection === 'Scissors'
    ) {
      return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
      return 'You Win! Paper beats Rock';
    }
  }
}

game();
