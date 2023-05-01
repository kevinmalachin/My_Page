// create the var

const rps = [ 'rock', 'paper', 'scissors' ];

// assign a score

let playerScore = 0;
let computerScore = 0;

// random pick start

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];

// prompt for the player


function playerChoice(){
    let input = prompt("Pick your choice!").toLocaleLowerCase();
    if(input==="scissor" || input==="paper" || input==="rock") {
        document.getElementById("idMyTurn").innerHTML = `Your pick is ${input}!`;
    } else if (input != "rock" || input != "scissor" || input != "paper"){
        alert("You must pick Rock, Paper or Scissor");
    }
}



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