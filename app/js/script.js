

let playerSelection;

let computerSelection;

let selections = ["rock","paper","scissors"];

let human = 0;

let computer = 0;


function playRound(playerSelection, computerSelection){


  console.log('Play Round Started!');
  console.log(playerSelection);
  console.log(computerSelection);


  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();


  let result;
  let versus = 'TIED';

  if((playerSelection == 'rock') && (computerSelection == 'rock')){

    result = "It's a tie...";

  }

  if((playerSelection == 'rock') && (computerSelection == 'paper')){

    result = "You Lose! Paper beats Rock";
    computer++;

    versus= 'LOST :(';
  }
  if((playerSelection == 'rock') && (computerSelection == 'scissors')){

    result = "You Win! Rock beats Scissors";
    human++;

    versus= 'WON :)';
  }
  if((playerSelection == 'paper') && (computerSelection == 'rock')){

    result = "You Win! Paper beats Rock";
    human++;

    versus= 'WON :)';
}
  if((playerSelection == 'paper') && (computerSelection == 'paper')){

    result = "It's a tie...";

  }
  if((playerSelection == 'paper') && (computerSelection == 'scissors')){

    result = "You Lose! Scissors beats Paper";
    computer++;

    versus= 'LOST :(';
  }
  if((playerSelection == 'scissors') && (computerSelection == 'rock')){

    result = "You Lose! Rock beats Scissors";
    computer++;

    versus= 'LOST :(';
  }
  if((playerSelection == 'scissors') && (computerSelection == 'paper')){

    result = "You Win! Scissors beats Paper";
    human++;

    versus= 'WON :)';
  }
  if((playerSelection == 'scissors') && (computerSelection == 'scissors')){

    result = "It's a tie...";    

  }
  
    document.getElementById("human_digit").innerHTML = human;
    document.getElementById("machine_digit").innerHTML = computer;
    document.getElementById("versus_digit").innerHTML = versus;


    if(human == 5){

      // change heading to announce human as winner
      document.querySelector('h1').innerHTML = 'HUMANS RULE';

    }

    else if(computer == 5){

      // change heading to announce computer as winner
      document.querySelector('h1').innerHTML = 'HUMANS DROOL';

    }

      return console.log(result + ' - Human: ' + human + ' - Machine: ' + computer);
    
    
}

document.getElementById("rock_button").addEventListener("click", function(){
  playerSelection = 'rock';

  let choice = Math.floor((Math.random() * 3));

  computerSelection = selections[choice]; // need to set to random value based on array

  playRound(playerSelection,computerSelection);

});

document.getElementById("paper_button").addEventListener("click", function(){
  playerSelection = 'paper';

  let choice = Math.floor((Math.random() * 3));

  computerSelection = selections[choice]; // need to set to random value based on array

  playRound(playerSelection,computerSelection);

});

document.getElementById("scissors_button").addEventListener("click", function(){
  playerSelection = 'scissors';

  let choice = Math.floor((Math.random() * 3));

  computerSelection = selections[choice]; // need to set to random value based on array

  playRound(playerSelection,computerSelection);

});

function game(){

let computer = 0;
let player = 0;

let result;
let i = 0;

while(i < 5){
  
  if(playerSelection != null){
    
      result = playRound(playerSelection, computerSelection);
    
    if((result.charAt(4)) == 'W'){

      player++;

    }

    if((result.charAt(4)) == 'L'){

      computer++;

    }

    console.log('player: '+ player);
    console.log('human: ' + computer);

    console.log(result);
    
    i++;

  }//ends after player versus computer calculation

  playerSelection = null;

}//ends while user prompt loop

  if(player > computer){

    return "Player Wins!";

  } 

  if(computer > player){

    return "Computer Wins!";

  }
  
  return "It's a TIE!";

}




