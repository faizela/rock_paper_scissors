function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const random_choice = Math.floor(Math.random() * choices.length)
    return choices[random_choice]
}


const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const results = document.getElementById('results')
const playerscoreid = document.getElementById('playerscore')
const cpuscoreid = document.getElementById('cpuscore')
const winner = document.getElementById('winner')

// const playerSelection = prompt('Enter your choice - rock or paper or scissors! ')
const computerSelection = getComputerChoice()


let cpuScore = 0
let playerScore = 0

// cpuscoreid.innerText += `Cpu score is ${cpuScore}`

function isRock(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
     playerScore += 1
     if (playerScore <= 5) {  
     playerDisplay()
     }
      return ('You WIN! rock beats scissors')
    } 
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
      cpuScore += 1
      if (cpuScore <= 5) {  
         cpuDisplay()
         }
       return ('You LOSE! paper beats rock')
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
       return playRound(playerSelection, getComputerChoice())
    }
      
}



function isScissors(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
      playerScore += 1
      if (playerScore <= 5) {  
         playerDisplay()
         }
       return ('You WIN! scissors beats rock ')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
      cpuScore += 1
      if (cpuScore <= 5) {  
         cpuDisplay()
         }
       return ('You LOSE! rock beats scissors')
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
       return playRound(playerSelection, getComputerChoice())
    }
}

function isPaper(playerSelection, computerSelection){
   if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
      playerScore += 1

      if (playerScore <= 5) {  
         playerDisplay()
         }
         return ('You WIN! paper beats rock ')
      
      
   }
   else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
      cpuScore += 1
      if (cpuScore <= 5) {  
         cpuDisplay()
         }
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

rock.addEventListener('click', function() {
   results.innerText = playRound('rock', computerSelection)
 }) 


paper.addEventListener('click', function() {
   results.innerText = playRound('paper', computerSelection)
 }) 


scissors.addEventListener('click', function() {
   results.innerText = playRound('scissors', computerSelection)
 }) 




function playerDisplay(){
   playerscoreid.innerText = playerScore
   if (playerScore == 5) {
      winner.innerText = 'Player - you are the winner!'
   }
}

function cpuDisplay(){
   cpuscoreid.innerText = cpuScore
   if (cpuScore == 5) {
      winner.innerText = 'Cpu - you are the winner!'
   }
}