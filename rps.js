function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let rnd = Math.floor(Math.random() * choices.length);
    return choices[rnd];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // player choice exception handling
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert(`${playerSelection} is not a valid play, please choose from the 'rock, paper or scissors'`);
        return "";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a Draw!")
            return 0;
        }
        else if (computerSelection === "paper") {
            console.log("You Lose! Paper beats Rock");
            return -1;
        }
        else {
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else if (computerSelection === "paper") {
            console.log("It's a Draw!");
            return 0;
        }
        else {
            console.log("You Lose! Scissors beats Paper");
            return -1;
        }
    }
    else {
        if (computerSelection === "rock") {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        }
        else if (computerSelection === "paper") {
            console.log("You Win! Scissors beats Paper");
            return 1;
        }
        else {
            console.log();
            return 0;
        }
    }
}

function playGame(e) {
    // player choice
    let playerChoice = e.target.id;
    console.log(`player choose ${playerChoice}`);
    // computer choice
    let computerChoice = getComputerChoice();
    console.log(`computer choose ${computerChoice}`);
    // judge the winner
    let result = playRound(playerChoice, computerChoice);
    output.textContent = result;
}

document.querySelectorAll(".selection").forEach(
    (element) => element.addEventListener("click", playGame)
);

const output = document.querySelector("p.output");
