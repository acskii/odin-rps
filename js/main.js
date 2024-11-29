function displayMessage(msg) {
    console.log(msg);
    alert(msg);
}

function getComputerChoice() {
    // Generate random choice
    const numChoice = Math.ceil(Math.random() * 3);
    switch (numChoice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
            return 'scissors';
        default:
            return null;    // To test out numChoice
    }
}

// Test for getComputerChoice
// for (let i = 0; i < 10; i++) {
//     console.log(getComputerChoice());
// }

function validateChoice(humanChoice) {
    const choice = (humanChoice || "").toLowerCase()    // If null

    return (
        (choice === 'rock') ||
        (choice === 'paper') ||
        (choice === 'scissors')
    );
}

function printHumanChoice(humanChoice) {
    if (validateChoice(humanChoice)) {
        displayMessage(`You entered: ${humanChoice}`);
    } else {
        displayMessage(`Invalid choice entered: ${humanChoice}`);
    }
}

function getHumanChoice() {
    let choice;

    do {
        choice = prompt(`
            Choose your move: 
                Rock,
                Paper,
                Scissors.    
            Your move:  
        `);
        printHumanChoice(choice);
    } while (!validateChoice(choice)) 

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // Check that both choices are given
    console.assert(humanChoice && computerChoice, `Round: ${humanChoice ? "computer choice": "human choice"} is null`);

    // Compare choices based on game rules
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        // Human wins
        displayMessage(`You win: ${humanChoice} beats ${computerChoice}`);
        return 1;
    } else if (humanChoice === computerChoice) {
        // Tie
        displayMessage(`Tie: Both played ${humanChoice}`);
    } else {
        // Computer wins
        displayMessage(`You lose: ${computerChoice} beats ${humanChoice}`);
        return 0;
    }
}        

function playGame() {
    let roundsPlayed = 0;
    let computerScore = 0;
    let humanScore = 0; 

    displayMessage(`
        WELCOME TO ROCK, PAPER, SCISSORS!

        >> GAME WILL RUN FOR 5 ROUNDS! <<
        <<          GOOD LUCK          >>
    `);

    while (roundsPlayed < 5) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        const humanWon = playRound(humanChoice, computerChoice);

        if (humanWon) {
            humanScore++;
        } else {
            computerScore++;
        }
        roundsPlayed++;
    }
    displayMessage(`GAME WINNER: ${(humanScore > computerScore) ? "You" : "Computer"}!`);
}

playGame();