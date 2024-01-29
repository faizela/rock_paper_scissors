function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const random_choice = Math.floor(Math.random() * choices.length)
    return choices[random_choice]
}




const playerSelection = 'rOCK'
const computerSelection = getComputerChoice()


function singleRound(playerSelection, computerSelection) {
 if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
   return ('You WIN! rock beats scissors')
 } 
 else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
    return ('You LOSE! paper beats rock')
 }
 else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
    return singleRound(playerSelection, computerSelection = getComputerChoice())
 }
}


console.log(singleRound(playerSelection, computerSelection))

