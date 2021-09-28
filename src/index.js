const maxNumber = document.querySelector("h2 input");
const guessNumber = document.querySelector("h3 input");

const chosenNumber = document.querySelector(".youChose");
const machineChose = document.querySelector(".machineChose");

const gameResult = document.querySelector(".result");

function checkNumberSize(event) {
  event.preventDefault();
  const maxInput = parseInt(maxNumber.value);
  const guessInput = parseInt(guessNumber.value);

  const randomNumber = parseInt([Math.round(Math.random() * maxInput)]);
  chosenNumber.innerText = guessInput;
  machineChose.innerText = randomNumber;

  if (guessInput === randomNumber) {
    gameResult.innerText = "You Won!";
  } else if (guessInput !== randomNumber) {
    gameResult.innerText = "You lost!";
  }
}

inputForm.addEventListener("submit", checkNumberSize);
