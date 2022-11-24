console.log("Hello World!");

function game() {
  let playerWonCount = 0;
  let computerWonCount = 0;
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Schere, Stein oder Papier?");
    let endGameMessage = playRound(computerChoice, playerChoice);
    if (endGameMessage.startsWith("Ihr habt")) {
      //nothing
    }
    if (endGameMessage.startsWith("Du hast")) {
      computerWonCount++;
    }
    if (endGameMessage.startsWith("GEWONNEN")) {
      playerWonCount++;
    }
    if ((i === 4 && playerWonCount === computerWonCount) || endGameMessage.startsWith("Falscher")) {
      i--;
    }
    console.log("Game count: " + (i + 1));
    console.log("You won " + playerWonCount + " matches so far, "
        + "the computer won " + computerWonCount + " matches so far.");
  }
  if (playerWonCount > computerWonCount) {
    alert("GAME WON!");
  } else {
    alert("YOU LOST.")
  }
}


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
        endGameMessage = "Du hast die Runde verloren! Der Computer hatte: " + computerChoice;
      } else {
        endGameMessage = "GEWONNEN!!!! (zumindest diese Runde) Der Computer hatte: " + computerChoice;
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

game();
