function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice;
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Enter rock, paper or scissors.").toLowerCase();
    }
    return humanChoice;
}


function playGame(roundAmount) {
    let humanScore = 0;
    let computerScore = 0;

    for (let currentRound = 1; currentRound <= roundAmount; currentRound++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You win! Rock beats Scissors.`);
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You lose! Paper beats Rock.`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You lose! Rock beats Scissors.`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! Scissors beat Paper.`);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You lose! Scissors beat Paper.`);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You win! Paper beats Rock.`);
            humanScore++;
        } else console.log(`It's a draw! You both chose ${humanChoice}.`);
    }
}
