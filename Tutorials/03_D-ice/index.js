// Function to generate a random number between 1 and 6
function getRandomDiceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to roll the dices and update the UI
function rollDices() {
  // Generate random numbers for both dices
  const randomNumber1 = getRandomDiceRoll();
  const randomNumber2 = getRandomDiceRoll();

  // Update dice images
  document.getElementById("dice1").src = `images/dice${randomNumber1}.png`;
  document.getElementById("dice2").src = `images/dice${randomNumber2}.png`;

  // Determine the winner and update the title
  const title = document.getElementById("title");
  if (randomNumber1 > randomNumber2) {
    title.textContent = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 Wins!";
  } else {
    title.textContent = "It's a Tie!";
  }
}
