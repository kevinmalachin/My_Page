// get the elements

const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultsDiplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let results;


// assign a score

let playerScore = 0;
let computerScore = 0;


// player

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    e.preventDefault();

    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice
    computerPick()
}));

// random pick by computer

function computerPick() {
    const randomPick = Math.floor(Math.random() * 3) + 1;
 
     switch(randomPick){
         case 1:
            computerChoice = "Rock";
             break; 
         case 2:
            computerChoice = "Paper";
             break;
         case 3:
            computerChoice = "Scissor";
             break;
     }

     computerChoiceDisplay.innerHTML = computerChoice         // assign the result to the HTML
     
    };

// play the game = results



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