const statusPanel = document.querySelector(".status-panel");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-game");
const gameBoard = document.getElementById("game-board");
const target = document.getElementById("target");

let score = 0;
let timeLeft = 30;
let timerId = null;
let moveId = null;

function updateDisplay() {
  if (scoreDisplay) scoreDisplay.textContent = String(score);
  if (timerDisplay) timerDisplay.textContent = String(timeLeft);
}

function randomPosition() {
  if (!gameBoard) return { x: 0, y: 0 };
  const rect = gameBoard.getBoundingClientRect();
  const size = 48;
  const x = Math.random() * Math.max(0, rect.width - size);
  const y = Math.random() * Math.max(0, rect.height - size);
  return { x, y };
}

function moveTarget() {
  if (!target || !gameBoard) return;
  if (timeLeft <= 0) {
    target.hidden = true;
    return;
  }
  const { x, y } = randomPosition();
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.hidden = false;
  moveId = window.setTimeout(moveTarget, 900);
}

function endGame() {
  if (timerId !== null) {
    window.clearInterval(timerId);
    timerId = null;
  }
  if (moveId !== null) {
    window.clearTimeout(moveId);
    moveId = null;
  }
  if (target) target.hidden = true;
  if (startButton) {
    startButton.disabled = false;
    startButton.textContent = "リスタート";
  }
}

function tick() {
  if (timeLeft <= 0) {
    endGame();
    return;
  }
  timeLeft -= 1;
  updateDisplay();
  if (timeLeft <= 0) {
    endGame();
  }
}

function startGame() {
  if (!startButton || !target || !gameBoard) return;
  score = 0;
  timeLeft = 30;
  updateDisplay();
  startButton.disabled = true;
  startButton.textContent = "プレイ中...";
  moveTarget();
  timerId = window.setInterval(tick, 1000);
}

if (target) {
  target.addEventListener("click", () => {
    score += 1;
    updateDisplay();
    target.classList.add("pop");
    window.setTimeout(() => target.classList.remove("pop"), 120);
  });
}

if (startButton) {
  startButton.addEventListener("click", startGame);
}

if (statusPanel) {
  statusPanel.dataset.ready = "true";
}
