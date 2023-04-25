function computerPlay(){
  BimBumBam=Math.floor(Math.random()*3);
  if (BimBumBam===0)
  return "Rock";
  else if (BimBumBam===1)
  return "Scissor";
  else (BimBumBam===2)
  return "Paper";
}
console.log(computerPlay())


  function playRound(playerSelection,computerSelection){
    // rendi case insensitive
  return `You lose! x beats y`;
  }
  const playerSelection = prompt (`Please, enter your choice`);
  const computerSelection = computerPlay();

  console.log(playRound(playerSelection, computerSelection));
  

  function game(){
    playRound()
    for (let i = 0; i < 5; i++) {
      text += `The choice is" + i + "<br>`;
      console.log(computerPlay())
   }
  }