// create your game here 

// testing 
    const app = document.getElementById("app");
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7;

    const message = document.createElement("p");
    message.textContent = "Guess a number between 1 and 100";
    app.appendChild(message);

    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 100;
    app.appendChild(input);

    const button = document.createElement("button");
    button.textContent = "Submit Guess";
    app.appendChild(button);

    const result = document.createElement("p");
    app.appendChild(result);

    button.addEventListener("click", function () {
        setTimeout(() => {
            const userGuess = parseInt(input.value);
            attempts++;

            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                alert("Please enter a valid number between 1 and 100.");
                return;
            }

            if (userGuess === targetNumber) {
                result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                result.style.color = "green";
                button.disabled = true;
            } else if (attempts >= maxAttempts) {
                result.textContent = `Game over! The correct number was ${targetNumber}.`;
                result.style.color = "red";
                button.disabled = true;
            } else {
                result.textContent = userGuess > targetNumber ? "Too high! Try again." : "Too low! Try again.";
                result.style.color = "blue";
            }
        }, 100); 
    });


