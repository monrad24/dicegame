var rolling = false;
var p1Dice = 6;
var p2Dice = 6;
var bounces = 10;
var bounceTimer = 0;
var diceSound = new Audio("sound/dicebouncing.mp3");
var interval;

function rollButton() {
  clearInterval(interval);
  document.querySelector(".player1-text").innerHTML = "player 1";
  document.querySelector(".player2-text").innerHTML = "player 2";
  document.querySelector(".player1").style.backgroundColor = "grey";
  document.querySelector(".player2").style.backgroundColor = "grey";
  diceSound.play();
  resetDice();
  rolling = true;
  interval = setInterval(rollDice, 1);
}

function rollDice() {
          console.log("boing")
  if (rolling === true) {
    if (bounceTimer === 0) {
      displayDice(Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1));
        bounces--;
        bounceTimer = bounces * 10;
      if (bounces === 0) {
        rolling = false;
        clearInterval(interval);
        console.log("interval cleared");
        displayWinner();
      }
    } else {
      bounceTimer--;
    }
  }
}

function displayWinner() {
  if (p1Dice > p2Dice) {
    document.querySelector(".player1-text").innerHTML = "WINNER!!!";
    interval = setInterval(flashWinner, 500, 1);
  } else if (p1Dice < p2Dice) {
    document.querySelector(".player2-text").innerHTML = "WINNER!!!";
    interval = setInterval(flashWinner, 500, 2);
  } else {
    document.querySelector(".player1-text").innerHTML = "BOTH";
    document.querySelector(".player2-text").innerHTML = "WINNERS!!!";
    interval = setInterval(flashWinner, 500, 3);
  }
}

function flashWinner(winner) {
  console.log("flashing...");
  for ( i = 1 ; i < 3 ; i++) {
    if (winner === 2) {i = 2};
      if (document.querySelector(".player" + i).style.backgroundColor === "grey") {
      document.querySelector(".player" + i).style.backgroundColor = "yellow";
    } else {
      document.querySelector(".player" + i).style.backgroundColor = "grey";
    }
   if (winner === 1) {i = 3};
  }

}

function resetDice() {
  bounces = 10;
  bounceTimer = 0;
  displayDice(6, 6);
}

function displayDice(face1, face2) {
  document.querySelector(".dice-p1-s" + p1Dice).style.display = "none";
  document.querySelector(".dice-p2-s" + p2Dice).style.display = "none";
  p1Dice = face1;
  p2Dice = face2;
  document.querySelector(".dice-p1-s" + p1Dice).style.display = "inline";
  document.querySelector(".dice-p2-s" + p2Dice).style.display = "inline";
}
