let timerInterval;
let time = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  time++;
  document.getElementById("timer").innerText = time;

  if (time === 21) {
    clearInterval(timerInterval);
    alert("Je bent helaas af, probeer opnieuw");
    time = 0;
    document.getElementById("timer").innerText = time;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 0;
  document.getElementById("timer").innerText = time;
}

document.getElementById("startKnop").addEventListener("click", startTimer);
document.getElementById("stopKnop").addEventListener("click", stopTimer);
document.getElementById("resetKnop").addEventListener("click", resetTimer);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let winst = 0;
let eten = ["🍔", "🌮", "🍣", "🍕", "🍟", "🥗"];

const sound = document.querySelector("audio");

function spin() {
  let wiel1 = eten[Math.floor(Math.random() * eten.length)];
  let wiel2 = eten[Math.floor(Math.random() * eten.length)];
  let wiel3 = eten[Math.floor(Math.random() * eten.length)];

  document.getElementById("wiel1").textContent = wiel1;
  document.getElementById("wiel2").textContent = wiel2;
  document.getElementById("wiel3").textContent = wiel3;

  checkWin(wiel1, wiel2, wiel3);
}

function checkWin(wiel1, wiel2, wiel3) {
  const resultElement = document.getElementById("resultaat");
  if (wiel1 === wiel2 && wiel1 === wiel3) {
    resultElement.textContent = "Yes 1 puntje er bij";
    resultElement.style.color = "green";
    winst++;
    sound.play();
    document.getElementById("winst").textContent = winst;
  } else {
    resultElement.textContent = "Nog niks..";
    resultElement.style.color = "red";
  }
}

document.getElementById("draai-knop").addEventListener("click", spin);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// het spel
// Joost mede student heeft mij geholpen
// emoji van mac os
