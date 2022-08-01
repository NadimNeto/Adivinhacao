"use strict";

//Número aleatório entre 1 e 100.
let secretNumber = Math.trunc(Math.random() * 100) + 1;
//Variável para a Pontuação
let score = 100;
//Variável para a Pontuação Máxima
let highscore = 0;

//Teste - mostrando o número na tela
// document.querySelector(".number").textContent = secretNumber;

//Ao clicar no botão "Chutar!"
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Sem Número!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Número Correto!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Muito alto...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Você perdeu! 🙁";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Muito baixo...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Você perdeu! 🙁";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Ao clicar no botão "De Novo!"
document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".message").textContent = "Chute um valor...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
