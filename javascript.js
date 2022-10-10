let playerScore = 0;
let computerScore = 0;

//function that return the computer choice
function getComputerChoice () {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return arrOfChoices[randomNum];
}

//function to compare all choice variations
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'You tied! You both picked paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return 'You lost! Rock crushes scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return 'You won! Scissors cuts paper';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return 'You won! Rock crushes scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return 'You lost! Paper covers rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return 'You lost! Scissors cuts paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return 'You won! Paper covers rock';
    }
}      

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose your wapon', 'Rock, Paper, Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i+1}`, playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return 'You beat the computer';
    } else if (computerScore > playerScore) {
        return 'You got beat by the computer!';
    } else {
        return 'You tied with the computer';
    }
}

console.log(game());