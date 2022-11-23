console.log("Hello World!");

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

let computerChoice = getComputerChoice();
let playerChoice = prompt("Schere, Stein oder Papier?");

function playRound(computerChoice, playerChoice) {
  console.log("Computer Choice: " + getComputerChoice());
  console.log("Player Choice: " + playerChoice);
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  const schere = "Schere";
  const stein = "Stein";
  const papier = "Papier";
  let endGameMessage = "";
  if (playerChoice === schere || playerChoice === stein || playerChoice === papier ) {
    if (playerChoice === computerChoice) {
      endGameMessage = "Ihr habt beide " + playerChoice + " gewählt: Nochmal!";
    } else {
      if ((playerChoice === schere && computerChoice === stein)
          || (playerChoice === stein && computerChoice === papier)
          || (playerChoice === papier && computerChoice === schere)) {
        endGameMessage = "Du hast verloren! Der Computer hatte: " + computerChoice;
      } else {
        endGameMessage = "GEWONNEN!!!! Der Computer hatte: " + computerChoice;
      }
    }
  } else {
    console.warn("Wrong input.")
    endGameMessage = "Falscher input! Bitte gib 'Schere' oder 'Stein' oder 'Papier' ein.";
  }

  alert(endGameMessage);
  console.log(endGameMessage);
  return endGameMessage;
}

playRound(computerChoice, playerChoice);

