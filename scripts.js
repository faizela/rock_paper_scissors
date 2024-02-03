function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const random_choice = Math.floor(Math.random() * choices.length)
    return choices[random_choice]
}



const playerSelection = prompt('Enter your choice - rock or paper or scissors! ')
const computerSelection = getComputerChoice()

let cpuScore = 0
let playerScore = 0


function isRock(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
      playerScore += 1
      return ('You WIN! rock beats scissors')
    } 
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
      cpuScore += 1
       return ('You LOSE! paper beats rock')
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
       return playRound(playerSelection, getComputerChoice())
    }
      
}



function isScissors(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
      playerScore += 1
       return ('You WIN! scissors beats rock ')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
      cpuScore += 1
       return ('You LOSE! rock beats scissors')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
       return playRound(playerSelection, getComputerChoice())
    }
}

function isPaper(playerSelection, computerSelection){
   if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
      playerScore += 1
      return ('You WIN! paper beats rock ')
   }
   else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
      cpuScore += 1
      return ('You LOSE! scissors beats paper')
   }
   else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
      return playRound(playerSelection, getComputerChoice())
   }
  
}

function playRound(playerSelection, computerSelection) {
 if (playerSelection.toLowerCase() == 'rock') {
   return isRock(playerSelection, computerSelection)
 }

 else if  (playerSelection.toLowerCase() == 'scissors') {
   return isScissors(playerSelection, computerSelection)
 }

 else if (playerSelection.toLowerCase() == 'paper') {
   return isPaper(playerSelection, computerSelection)
 }


}

// console.log(cpuScore)
// console.log(playerScore)
// console.log(playRound(playerSelection, computerSelection))
// console.log(cpuScore)
// console.log(playerScore)

function game() {
    for (let i = 0; i < 5; i++) {
      console.log(`round ${i+1}`)
      console.log(playRound(playerSelection, computerSelection))
      console.log(`Player score is ${playerScore}`)
      console.log(`Cpu score is ${cpuScore}`)
    }

   if (cpuScore > playerScore){
      console.log('CPU wins!')
   }
   else if (playerScore > cpuScore) {
      console.log('Player Wins!')
   }
}

game()

// console.log(playRound(playerSelection, computerSelection))
// console.log(playRound(playerSelection, computerSelection))
// console.log(playRound(playerSelection, computerSelection))
// console.log(playRound(playerSelection, computerSelection))
// console.log(playRound(playerSelection, computerSelection))

