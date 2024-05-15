let humanScore = 0;
let computerScore = 0;





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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        
        case humanChoice === "rock" && computerChoice === "scissors":
            console.log(`You win! Rock beats Scissors.`);
            humanScore++;
            break;
        case humanChoice === "rock" && computerChoice === "paper":
            console.log(`You lose! Paper beats Rock.`);
            computerScore++;
            break;
        case humanChoice === "scissors" && computerChoice === "rock":
            console.log(`You lose! Rock beats Scissors.`);
            computerScore++;
            break;
        case humanChoice === "scissors" && computerChoice === "paper":
            console.log(`You win! Scissors beat Paper.`);
            humanScore++;
            break;
        case humanChoice === "paper" && computerChoice === "scissors":
            console.log(`You lose! Scissors beat Paper.`);
            computerScore++;
            break;
        case humanChoice === "paper" && computerChoice === "rock":
            console.log(`You win! Paper beats Rock.`);
            humanScore++;
            break;
        default:
            console.log(`It's a draw! You both chose ${humanChoice}.`);
    }
}