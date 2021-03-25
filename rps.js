// Picks the computer's choice randomly.
const computerPlay = () => {
  // 0 -> Rock, 1 -> Paper, 2 -> Scissors
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      console.log("Terrible, terrible day in DenisVille\n");
  }

  return computerChoice;
};

// Collect User's choice
const playerInput = () => {
  const playerChoice = prompt("Enter Rock, Paper, Scissors: ");
  return playerChoice;
};

const playRound = (computerSelection, playerSelection) => {
  // Determine winner.
  // Machine wins -> Return 'M'. Human wins -> Return 'H'.

  let outcome;
  // paper beats rock
  if (computerSelection === "paper" && playerSelection === "rock") {
    outcome = "M";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    outcome = "H";
  }
  // rock beats scissors
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    outcome = "M";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    outcome = "H";
  }
  // scissors beats paper
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    outcome = "M";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    outcome = "H";
  }
  // Edge case
  else {
    outcome = "Well, That's funny. Make sure you typed in a valid play";
  }

  return outcome;
};

const game = () => {
  // Learned loops from elsewhere.
  let winner = "",
    machineWins = 0,
    humanWins = 0;

  // Actually get computer answer
  let computerSelection = computerPlay();
  // Get human to play then sanitise
  let playerSelection = playerInput();
  playerSelection = playerSelection.trim().toLowerCase();

  winner = playRound(computerSelection, playerSelection);
  console.log("Winner: ", winner);
  if (winner === "H") humanWins++;
  else if (winner === "M") machineWins++;

  return machineWins > humanWins
    ? "Machine won"
    : humanWins > machineWins
    ? "Human won"
    : "Tie";
};

console.log(game());
