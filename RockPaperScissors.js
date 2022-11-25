console.log("Hello World!");

const startScreen = document.querySelector('.startScreen');
startScreen.addEventListener('click', game);
const playBoard = document.querySelector('.playBoard');

const btnSchere = document.querySelector('#Schere');
btnSchere.addEventListener('click', playRound);
const btnStein = document.querySelector('#Stein');
btnStein.addEventListener('click', playRound);
const btnPapier = document.querySelector('#Papier');
btnPapier.addEventListener('click', playRound);

var count = 0;
let playerWonCount = 0;
let computerWonCount = 0;



function game() {
  startScreen.style.display = 'none';
  playBoard.style.display = 'block';
}


function playRound(e) {
  let computerChoice = getComputerChoice();
  let playerChoice = e.target.id;
  console.log("Computer Choice: " + computerChoice);
  console.log("Player Choice: " + playerChoice);
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  const schere = "Schere";
  const stein = "Stein";
  const papier = "Papier";
  let endRoundMessage = "";
  if (playerChoice === schere || playerChoice === stein || playerChoice === papier ) {
    if (playerChoice === computerChoice) {
      endRoundMessage = "Ihr habt beide " + playerChoice + " gewählt: Nochmal!";
    } else {
      if ((playerChoice === schere && computerChoice === stein)
          || (playerChoice === stein && computerChoice === papier)
          || (playerChoice === papier && computerChoice === schere)) {
        endRoundMessage = "Du hast die Runde verloren! Der Computer hatte: " + computerChoice;
      } else {
        endRoundMessage = "GEWONNEN!!!! (zumindest diese Runde) Der Computer hatte: " + computerChoice;
      }
    }
  } else {
    console.warn("Wrong input.")
    endRoundMessage = "Falscher input! Bitte gib 'Schere' oder 'Stein' oder 'Papier' ein.";
  }
  if (endRoundMessage.startsWith("Ihr habt")) {
    // nothing
  }
  if (endRoundMessage.startsWith("Du hast")) {
    computerWonCount++;
  }
  if (endRoundMessage.startsWith("GEWONNEN")) {
    playerWonCount++;
  }
  if ((count === 4 && playerWonCount === computerWonCount) || endRoundMessage.startsWith("Falscher")) {
    count--;
  }
  count++;
  let currentId = count.toString();
  var paragraph = document.createElement('p');
  paragraph.textContent = endRoundMessage;
  document.getElementById(currentId).appendChild(paragraph);
  console.log(endRoundMessage);
  if (count === 5) {
    setTimeout(function () {
      if (playerWonCount == computerWonCount) {
        alert("Ein Unentschieden!")
      }
      if (playerWonCount > computerWonCount) {
        alert("Du hast gewonnen!")
      } else {
        alert("You lost!")
      }
    }, 1000);

  }
  return endRoundMessage;
}



function getComputerChoice() {
  let float = Math.random();
  let computerChoice;
  if (float <= 0.33) {
    computerChoice = "Schere";
  }
  if (0.66 >= float > 0.33) {
    computerChoice = "Stein";
  }
  if (float > 0.66) {
    computerChoice = "Papier";
  }
  return computerChoice;
}

