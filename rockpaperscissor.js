// random generates player pick

const playerSelection = function(player) {
  let myPick = Math.floor(Math.random()*3);
  if (myPick===0)
      return "Rock";
    else if (myPick===1)
      return "Scissor";
    else (myPick===2)
      return "Paper";
}

console.log(playerSelection());


// random generates Computer pick

const computerSelection = function(computerPlay) {
  let sceltaPc = Math.floor(Math.random()*3);
    if (sceltaPc===0)
      return "Rock";
    else if (sceltaPc===1)
      return "Scissor";
    else (sceltaPc===2)
      return "Paper";
}

console.log(computerSelection());


// Set a winner between two players


const result = function(setWinner) {
  if (playerSelection==="Rock" && computerSelection==="Scissor"){
    return `Computer Lose! ${playerSelection} beat ${computerSelection}`;
  } else if(playerSelection==="Rock" && computerSelection==="Scissor"){
      return `Computer Wins! ${computerSelection} beat ${playerSelection}`;
  } else if(playerSelection==="Rock" && computerSelection==="Paper"){
      return `Computer Wins! ${computerSelection} beat ${playerSelection}`;
  } else if(playerSelection==="Paper" && computerSelection==="Rock"){
      return `Computer Lose! ${playerSelection} beat ${computerSelection}`;
  } else if(playerSelection==="Scissor" && computerSelection==="Paper"){
      return `Computer Lose! ${playerSelection} beat ${computerSelection}`;
  } else if(playerSelection==="Scissor" && computerSelection==="Rock"){
      return `Computer Wins! ${computerSelection} beat ${playerSelection}`;
  } else if(playerSelection==="Rock" && computerSelection==="Rock"){
      return `It's a Tie!`;
  } else if(playerSelection==="Scissor" && computerSelection==="Scissor"){
      return `It's a Tie!`;
  } else if(playerSelection==="Paper" && computerSelection==="Paper"){
      return `It's a Tie!`;
  } else {
    console.log('So what?');
  }

}

console.log(playerSelection(), computerSelection());
console.log(result());