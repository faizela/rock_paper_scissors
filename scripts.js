function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    const random_choice = Math.round(Math.random() * choices.length)
    return choices[random_choice]
}

console.log(getComputerChoice())