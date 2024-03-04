function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
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

function playGame() {
    // player choice
    let playerInput = prompt("what's your play?", "rock, paper or scissors");
    let playerChoice = playerInput.toLowerCase();
    // computer choice
    let computerChoice = getComputerChoice();
    console.log(`computer choose ${computerChoice}`);
    // judge the winner
    let result = playRound(playerChoice, computerChoice);
    return result;
}

let score = 0;
let n = 5;
for (let index = 0; index < n; index++) {
    score += playGame();
}
console.log(`your final score is ${score}`);
