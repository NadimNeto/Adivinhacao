"use strict";

//Número aleatório entre 1 e 100.
let secretNumber = Math.trunc(Math.random() * 100) + 1;
//Variável para a Pontuação
let score = 100;
//Variável para a Pontuação Máxima
let highscore = 0;

//função para alterar a mensagem de dica.
const alteraMesg = function (mensagem) {
  document.querySelector(".message").textContent = mensagem;
};

//Evento ao clicar no botão "Chutar!".
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //Nenhum número chutado.
    alteraMesg("⛔ Sem Número!");
  } else if (guess === secretNumber) {
    //Número chutado corretamente.
    alteraMesg("🎉 Número Correto!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      //Acúmulo da Pontuação Máxima.
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      //Verifica se perdeu ou não.
      alteraMesg(
        guess > secretNumber ? "📈 Muito alto..." : "📉 Muito baixo..."
      ); //Ternário para definir o contúdo escrito da dica.
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //Ao perder.
      alteraMesg("💥 Você perdeu! 🙁");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Ao clicar no botão "De Novo!" reseta os valores e formatações do jogo.
document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  alteraMesg("Chute um valor...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
