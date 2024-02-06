// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

function displayChoice(identifier, img) {
  change = document.getElementById(identifier).src = img;
}

function getCompChoice() {
  let options = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  let result = options[random];

  displayChoice("computer-choice", "images/" + result + ".png");

  return result;
}

function getResult(pChoice, cChoice) {
  let result = "";

  if (pChoice == cChoice) {
    result = "Tie";
  } else if (pChoice == "rock") {
    if (cChoice == "paper") {
      result = "Computer";
    } else if (cChoice == "scissors") {
      result = "Player";
    }
  } else if (pChoice == "paper") {
    if (cChoice == "scissors") {
      result = "Computer";
    } else if (cChoice == "rock") {
      result = "Player";
    }
  } else if (pChoice == "scissors") {
    if (cChoice == "rock") {
      result = "Computer";
    } else if (cChoice == "paper") {
      result = "Player";
    }
  }

  return result;
}

function showResult(winner) {
  let tieExpressions = ["My! It's a tie!"];

  if (winner == "Tie") {
    buttonsArea.innerHTML = tieExpressions[0];
  } else {
    buttonsArea.innerHTML = winner + " has won!";
  }
}

function updateScore(string) {
  if (string == "Player") {
    pScore += 1;
    playerScoreEl.innerHTML = "" + pScore + "";
  } else if (string == "Computer") {
    cScore += 1;
    computerScoreEl.innerHTML = "" + cScore + "";
  }
}
