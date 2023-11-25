let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    let differenceScoreHuman = Math.abs(humanGuess - target)
    let differenceScoreComputer = Math.abs(computerGuess - target)

    if(differenceScoreHuman > differenceScoreComputer){
        return false
    }
    else if(differenceScoreComputer > differenceScoreHuman){
        return true
    }
    else{
        return true
    }
    
}

const updateScore = winner =>{
    if(winner === 'human'){
        humanScore++
    }
    else if(winner === 'computer'){
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}