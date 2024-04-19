// Your solution goes here 

playGuessingGame = (numToGuess, totalGuesses = 10) => {
    let counter = 0;
    let gameStart = true;
    let userPrompt = prompt("Enter a number between 1 and 100.", "Enter Guess Here");
    let guessRemaining = totalGuesses - counter

    while (gameStart) {
        counter += 1
        while(isNaN(userPrompt)){
            userPrompt = prompt("Please enter a number.")
        }
        if(userPrompt == null){
            guessRemaining = 0;
            break
        }
        if (parseInt(userPrompt) == numToGuess){
            break
        } 
        guessRemaining = totalGuesses - counter
        if (guessRemaining == 0) {
            break
        }
        if (userPrompt < numToGuess){
            userPrompt = prompt(`${userPrompt} is too small. Guess a larger number.`)
        } else if (userPrompt > numToGuess) {
            userPrompt = prompt(`${userPrompt} is too large. Guess a smaller number.`)
        } 
    }
    if(guessRemaining != 0) {
        return counter
    }

    return 0
}