const randomNumber = Math.floor(Math.random() * 15) + 1;
let attempts = 4;

function CheckGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultMessage = document.getElementById('result');
    
    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
        resultMessage.style.color = 'green';
        disableInputAndButton();
    } else {
        attempts--;
        if (attempts === 0) {
            resultMessage.textContent = `Sorry, you've run out of attempts. The correct number was ${randomNumber}.`;
            resultMessage.style.color = 'red';
            disableInputAndButton();        
        } else {
            resultMessage.textContent = userGuess > randomNumber ? 'Too high. Try again.' : 'Too low. Try again.';
            resultMessage.style.color = 'blue';
        }
    }
    if(userGuess > 15){
        resultMessage.textContent = 'sorry! your guess was out of Range';
        resultMessage.style.color = 'red';
    }

    document.getElementById('attempts').textContent = attempts;
}

function disableInputAndButton() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
