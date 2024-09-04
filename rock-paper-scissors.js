// array of the options the computer player has
const computerOptions = ['Rock', 'Paper', 'Scissors'];

// computerChoice defined as a random index from options, between 0, 1 and 2 representing the 3 options for the computer
const computerChoice = computerOptions[Math.floor(Math.random()*3)];

console.log(Math.random());

// enabling console interaction, slicing of first two index positions from array to return only entered arguments
// const args = process.argv.slice(2);
// console.log(args);

const playerChoice = process.argv[2];

// console.log(playerChoice);

// Decide who wins, is there a better method?

let outcome;

if (playerChoice === computerChoice) {
    outcome = 'It\'s a draw!';
}
else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
    outcome = 'You loose! You loser! hahaha';
}
else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
    outcome = 'You loose! You loser! hahaha';
  }
else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
    outcome = 'You loose! You loser! hahaha';
  }
else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    outcome = 'You win! Ai is so dump! hahaha';
  }
else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    outcome = 'You win! Ai is so dump! hahaha';
    }
else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    outcome = 'You win! Ai is so dump! hahaha';
    }

//  # Output: You chose rock. Computer chose scissors. You win!
console.log(`You chose ${playerChoice}. The AI chose ${computerChoice}. ${outcome}`);