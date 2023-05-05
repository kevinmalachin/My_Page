const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const results = document.getElementById('results');
const choices = document.querySelectorAll('button');
let playerChoice;
let computer;

// create the var

const rps = [ 'rock', 'paper', 'scissors' ];

// assign a score

let playerScore = 0;
let computerScore = 0;

// random pick start

function pickRandom(){
    const randomPick = Math.floor(Math.random() * 3) + 1;
 
     switch(randomPick){
         case 1:
             return "Rock";
             break; 
         case 2:
             return "Paper";
             break;
         case 3:
             return "Scissor";
             break;
     };
 };


// player

choices.forEach(choices => choices.addEventListener('click', (e) => {
    e.preventDefault();

    playerChoice = e.target.id;
    playerChoiceDisplay.innerText = playerChoice;

}));

// computer selection

let computerSelection = pickRandom();
    console.log(computerSelection);

// play the game

function checkWinner(playerSelection, computerSelection){
    if (computerSelection === playerSelection) {
        console.log(`${playerSelection} vs. ${computerSelection}. It's a tie!`);
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        console.log(`${playerSelection} vs. ${computerSelection}. You lose! Try again next time.`);
        computerScore++;
    } else {
        console.log(`${playerSelection} vs. ${computerSelection}. You win!`);
        playerScore++;
    }
};

/*
const playRound = (playerSelection, computerSelection) => {
    if (computerSelection === playerSelection) {
        console.log(`${playerSelection} vs. ${computerSelection}. It's a tie!`);
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        console.log(`${playerSelection} vs. ${computerSelection}. You lose! Try again next time.`);
        computerScore++;
    } else {
        console.log(`${playerSelection} vs. ${computerSelection}. You win!`);
        playerScore++;
    }
};

*/

// display rounds




/*

let rounds = 3;

while (rounds--) {
let playerChoice = function player(){
    let input = prompt("Make your choice!");
    if(input!="") {
        document.getElementById("idMyTurn").innerHTML = `La tua scelta è ${input}`;
    }
}
    let computerChoice = pickRandom(rps);

    console.log(`Player picked: ${playerChoice}`);
    console.log(`Computer picked ${computerChoice}`);

    playRound(playerChoice, computerChoice);

// show results

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

*/