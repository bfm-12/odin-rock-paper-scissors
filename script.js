const rock = 1
const paper = 2
const scissors = 3

function getComputerChoice (choice){
    let ans = Math.floor(Math.random() * 3) + 1;
    switch (ans) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

  console.log("Player selected: " + playerSelection + " and I picked: " + computerSelection);

  if (playerSelection === computerSelection) {
    return 'Tie game!'
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer wins! Paper covers rock.'
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock smashes scissors.'
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper covers rock.'
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Computer wins! Scissors cuts paper.'
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Computer wins! Rock smashes scissors.'
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors cuts paper.'
  }
  else {
    return 'Invalid weapon!'
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let result = '';

  for (let i = 0; i <5; i++) {
    const playerSelection = prompt('Choose your weapon:').toLowerCase();
    const computerSelection = getComputerChoice(); 
    result = playRound(playerSelection, computerSelection);
    
    console.log(result);

    if (result.charAt(0) === 'Y') {
      playerWins++;
    }
    else if (result.charAt(0) === 'C') {
      computerWins++;
    }
    else if (result.charAt(0) === 'I') {
      i--;
    }
    console.log('Player wins: ' + playerWins + ' Computer wins: ' + computerWins);
  }
  if (playerWins < computerWins) {
    console.log('You defeated the machines!')
}
else {
    console.log('The machines have won! Humanity is doomed...')
}
}

game();