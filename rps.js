const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const divAnswers = document.querySelector('.answers');

rock.addEventListener('click', () => {
  console.log(game('rock'));

});

paper.addEventListener('click', () => {
  console.log(game('paper'));
});

scissors.addEventListener('click', () => {
  console.log(game('scissors'));
});


// Picks the computer's choice randomly.
const computerPlay = () => {
  // 0 -> Rock, 1 -> Paper, 2 -> Scissors
  let computerChoice = Math.floor(Math.random() * 9); // Because it became too easy for a tie.

  switch (computerChoice) {
    case 0:
    case 1:
    case 2:
      computerChoice = "rock";
      break;
    case 3:
    case 4:
    case 5:
      computerChoice = "paper";
      break;
    case 6:
    case 7:
    case 8:
      computerChoice = "scissors";
      break;
    default:
      console.log("Terrible, terrible day in DenisVille\n");
  }

  return computerChoice;
};

const updateUI = (compSelection, humanSelection, result) => {

  divAnswers.innerHTML = `<p>Computer: ${compSelection}</p><p>Human: ${humanSelection}</p><p>Winner: ${result}</p>`
};

const playRound = (computerSelection, playerSelection) => {
  // Determine winner.
  // Machine wins -> Return 'M'. Human wins -> Return 'H'.

  let outcome;
  // paper beats rock
  if (computerSelection === "paper" && playerSelection === "rock") {
    outcome = "Machine";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    outcome = "Human Player";
  }
  // rock beats scissors
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    outcome = "Machine";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    outcome = "Human Player";
  }
  // scissors beats paper
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    outcome = "Machine";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    outcome = "Human Player";
  }
  // Tie
  else {
    console.log(playerSelection, computerSelection);
    outcome = "Well, That's funny. Seems like you read each other's mind resulting in a Tie";
  }

  updateUI(computerSelection, playerSelection, outcome);

  return outcome;
};

const game = (playerChoice) => {
  // Learned loops from elsewhere.
  let winner = "",
    machineWins = 0,
    humanWins = 0;

  // Actually get computer answer
  const computerSelection = computerPlay();
  // Get human to play then sanitise

  winner = playRound(computerSelection, playerChoice);
  if (winner === "H") return 'Human won';
  else if ( winner === 'M') return 'Machine Won';
  else return 'Tie';
};

