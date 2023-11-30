import getElement from "./select.js";

const rockBtn = getElement(".rock-btn");
const paperBtn = getElement(".paper-btn");
const scissorsBtn = getElement(".scissors-btn");
const playerChoice = getElement(".player-choice");
const computerChoice = getElement(".computer-choice");
const wldWin = getElement(".wld-win");
const wldDraw = getElement(".wld-draw");
const wldLose = getElement(".wld-lose");
const playerScore = getElement(".score-actual");
const playAgainBtn = getElement(".play-again-btn");
const wldOptions = document.querySelectorAll(".wld-option");
const rpsGameContainer = document.querySelector(".rps-game-container");

const rockClone = rockBtn.cloneNode(true);
const paperClone = paperBtn.cloneNode(true);
const scissorsClone = scissorsBtn.cloneNode(true);

const rockClone2 = rockBtn.cloneNode(true);
const paperClone2 = paperBtn.cloneNode(true);
const scissorsClone2 = scissorsBtn.cloneNode(true);

const rpsOptionsContainer = document.querySelector(".rps-buttons-container");

const gameOptions = ["Rock", "Paper", "Scissors"];

let playerScoreNumber = 0;

// playerChoice.appendChild(rockClone);

function randomNumber() {
  return Math.floor(Math.random() * gameOptions.length);
}

rockBtn.addEventListener("click", function (e) {
  if (playerChoice.children.length > 0) return;

  rpsGameContainer.classList.remove("element-hide");
  rpsGameContainer.classList.add("element-reveal");
  rpsOptionsContainer.style.top = "-150%";
  playerChoice.appendChild(rockClone);

  const randomNumero = randomNumber();
  const gameChoice = gameOptions[randomNumero];
  computerChoice.innerHTML = gameChoice;
  computerChoice.style.fontSize = "0";

  if (computerChoice.innerHTML === `Paper`) {
    playerScoreNumber--;

    wldLose.classList.add("wld-reveal");
    computerChoice.appendChild(paperClone2);
    computerChoice.classList.add("box-shadow-win");
  } else if (computerChoice.innerHTML === `Scissors`) {
    wldWin.classList.add("wld-reveal");
    playerScoreNumber++;
    computerChoice.appendChild(scissorsClone2);
    playerChoice.classList.add("box-shadow-win");
  } else {
    wldDraw.classList.add("wld-reveal");
    computerChoice.appendChild(rockClone2);
  }

  playerScore.innerHTML = playerScoreNumber;

  playAgainBtn.classList.add("wld-reveal");
});

paperBtn.addEventListener("click", function (e) {
  if (playerChoice.children.length > 0) return;

  rpsGameContainer.classList.remove("element-hide");
  rpsGameContainer.classList.add("element-reveal");
  rpsOptionsContainer.style.top = "-150%";
  playerChoice.appendChild(paperClone);

  const randomNumero = randomNumber();
  const gameChoice = gameOptions[randomNumero];
  computerChoice.innerHTML = gameChoice;
  computerChoice.style.fontSize = "0";

  if (computerChoice.innerHTML === `Scissors`) {
    playerScoreNumber--;
    wldLose.classList.add("wld-reveal");
    computerChoice.appendChild(scissorsClone2);
    computerChoice.classList.add("box-shadow-win");
  } else if (computerChoice.innerHTML === `Rock`) {
    wldWin.classList.add("wld-reveal");
    playerScoreNumber++;
    computerChoice.appendChild(rockClone2);
    playerChoice.classList.add("box-shadow-win");
  } else {
    wldDraw.classList.add("wld-reveal");
    computerChoice.appendChild(paperClone2);
  }

  playerScore.innerHTML = playerScoreNumber;
  playAgainBtn.classList.add("wld-reveal");
});

scissorsBtn.addEventListener("click", function (e) {
  if (playerChoice.children.length > 0) return;

  rpsGameContainer.classList.remove("element-hide");
  rpsGameContainer.classList.add("element-reveal");
  rpsOptionsContainer.style.top = "-150%";
  playerChoice.appendChild(scissorsClone);

  const randomNumero = randomNumber();
  const gameChoice = gameOptions[randomNumero];
  computerChoice.innerHTML = gameChoice;
  computerChoice.style.fontSize = "0";

  if (computerChoice.innerHTML === `Rock`) {
    playerScoreNumber--;
    wldLose.classList.add("wld-reveal");
    computerChoice.appendChild(rockClone2);
    computerChoice.classList.add("box-shadow-win");
  } else if (computerChoice.innerHTML === `Paper`) {
    wldWin.classList.add("wld-reveal");
    playerScoreNumber++;
    computerChoice.appendChild(paperClone2);
    playerChoice.classList.add("box-shadow-win");
  } else {
    wldDraw.classList.add("wld-reveal");
    computerChoice.appendChild(scissorsClone2);
  }

  playerScore.innerHTML = playerScoreNumber;
  playAgainBtn.classList.add("wld-reveal");
});

playAgainBtn.addEventListener("click", function () {
  wldOptions.forEach((e) => {
    e.classList.remove("wld-reveal");
  });

  rpsOptionsContainer.style.top = "0px";

  computerChoice.classList.remove("rps__rock-btn");
  computerChoice.classList.remove("rps__paper-btn");
  computerChoice.classList.remove("rps__scissors-btn");
  computerChoice.classList.remove("box-shadow-win");

  playerChoice.classList.remove("rps__rock-btn");
  playerChoice.classList.remove("rps__paper-btn");
  playerChoice.classList.remove("rps__scissors-btn");
  playerChoice.classList.remove("box-shadow-win");

  playAgainBtn.classList.remove("wld-reveal");

  playerChoice.innerHTML = ``;
  computerChoice.innerHTML = ``;

  rpsGameContainer.classList.remove("element-reveal");
  rpsGameContainer.classList.add("element-hide");
});

// Modal
const gameRulesBtn = getElement(".game-rules-btn");
const gameRulesModal = getElement(".game-rules-modal");
const gameRulesCloseBtn = getElement(".modal-close");
const modalBackgroundLs = getElement(".modal-background-ls");
const gameRulesCloseBtn2 = getElement(".modal-close-2");

window.addEventListener("load", () => {
  let height = document.body.scrollHeight;
  if (window.innerWidth < 750) {
    console.log(height);
    gameRulesModal.style.height = `${height}px`;
  } else return;
});

window.addEventListener("resize", () => {
  let height = document.body.scrollHeight;
  if (window.innerWidth < 750) {
    gameRulesModal.style.height = `${height}px`;
  } else return;
});

gameRulesBtn.addEventListener("click", function () {
  gameRulesModal.classList.add("modal-reveal");
  modalBackgroundLs.classList.add("modal-background-reveal");
});

gameRulesCloseBtn.addEventListener("click", () => {
  gameRulesModal.classList.remove("modal-reveal");
  modalBackgroundLs.classList.remove("modal-background-reveal");
});

gameRulesCloseBtn2.addEventListener("click", () => {
  gameRulesModal.classList.remove("modal-reveal");
  modalBackgroundLs.classList.remove("modal-background-reveal");
});
