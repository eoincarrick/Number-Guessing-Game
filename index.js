let randomNum = Math.floor(Math.random() * 100 + 1); // numbers from 1 to 100
console.log(randomNum);

const guess = document.querySelector(".guess");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  alert(`I'm a placeholder`);
}
