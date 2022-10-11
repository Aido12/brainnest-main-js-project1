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
    const playerSelection = prompt('rock');
    const computerSelection = computerPlay();
    console.log(`player = ${playerSelection}`);
    console.log(`computer = ${computerSelection}`);
    // playerSelection = Rock
    if (
      playerSelection.toUpperCase() === 'ROCK' &&
      computerSelection === 'Paper'
    ) {
      return 'You Lose! Paper beats Rock';
    } else if (
      playerSelection.toUpperCase() === 'ROCK' &&
      computerSelection === 'Scissors'
    ) {
      return 'You Win! Rock beats Scissors';
    } else if (
      playerSelection.toUpperCase() === 'ROCK' &&
      computerSelection === 'Rock'
    ) {
      return 'Its a draw';
    }

    // playerSlection = Scissors
    if (
      playerSelection.toUpperCase() === 'SCISSORS' &&
      computerSelection === 'Paper'
    ) {
      return 'You Win! Scissors beats Paper';
    } else if (
      playerSelection.toUpperCase() === 'SCISSORS' &&
      computerSelection === 'Scissors'
    ) {
      return 'Its a draw';
    } else if (
      playerSelection.toUpperCase() === 'SCISSORS' &&
      computerSelection === 'Rock'
    ) {
      return 'You Lose! Rock beats Scissors';
    }

    // playerSlection = Paper
    if (
      playerSelection.toUpperCase() === 'PAPER' &&
      computerSelection === 'Paper'
    ) {
      return 'Its a draw';
    } else if (
      playerSelection.toUpperCase() === 'PAPER' &&
      computerSelection === 'Scissors'
    ) {
      return 'You Lose! Scissors beats Paper';
    } else if (
      playerSelection.toUpperCase() === 'PAPER' &&
      computerSelection === 'Rock'
    ) {
      return 'You Win! Paper beats Rock';
    }
  }
}

game();

// let playerWinner = 0;
// let computerWinner = 0;

// function winner(
//   playerWinner,
//   computerWinner,
//   playerSelection,
//   computerSelection,
// ) {
//   // playerSlection = Rock
//   if (
//     playerSelection.toUpperCase() === 'ROCK' &&
//     computerSelection === 'Paper'
//   ) {
//     return Number(playerWinner), Number(computerWinner) + 1;
//   } else if (
//     playerSelection.toUpperCase() === 'ROCK' &&
//     computerSelection === 'Scissors'
//   ) {
//     return Number(playerWinner) + 1, Number(computerWinner);
//   } else if (
//     playerSelection.toUpperCase() === 'ROCK' &&
//     computerSelection === 'Rock'
//   ) {
//     return Number(playerWinner), Number(computerWinner);
//   }

//   // playerSlection = Scissors
//   if (
//     playerSelection.toUpperCase() === 'SCISSORS' &&
//     computerSelection === 'Paper'
//   ) {
//     return Number(playerWinner) + 1, Number(computerWinner);
//   } else if (
//     playerSelection.toUpperCase() === 'SCISSORS' &&
//     computerSelection === 'Scissors'
//   ) {
//     return Number(playerWinner), Number(computerWinner);
//   } else if (
//     playerSelection.toUpperCase() === 'SCISSORS' &&
//     computerSelection === 'Rock'
//   ) {
//     return Number(playerWinner), Number(computerWinner) + 1;
//   }

//   // playerSlection = Paper
//   if (
//     playerSelection.toUpperCase() === 'PAPER' &&
//     computerSelection === 'Paper'
//   ) {
//     return Number(playerWinner), Number(computerWinner);
//   } else if (
//     playerSelection.toUpperCase() === 'PAPER' &&
//     computerSelection === 'Scissors'
//   ) {
//     return Number(playerWinner), Number(computerWinner) + 1;
//   } else if (
//     playerSelection.toUpperCase() === 'PAPER' &&
//     computerSelection === 'Rock'
//   ) {
//     return Number(playerWinner) + 1, Number(computerWinner);
//   }
//   if (playerWinner > computerWinner) {
//     console.log('you won');
//   } else if (playerWinner < computerWinner) {
//     console.log('computer won');
//   }
// }
