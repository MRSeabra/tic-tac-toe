// usuario escolhe se quer O ou X
// user picks o or x
const btns = document.querySelectorAll(".btn-choice");
let btnKey = "btnChoice";
let btnKeyCpu = "btnChoiceCpu";
localStorage.setItem(btnKey, "btnX");
localStorage.setItem(btnKeyCpu, "btnO");

function toggleClass(item) {
  btns.forEach(function (btn) {
    btn.classList.remove("active");
    localStorage.removeItem(btnKey, "");
    localStorage.removeItem(btnKeyCpu, "");
  });
  item.currentTarget.classList.add("active");

  if (item.currentTarget.id === "btnX") {
    localStorage.setItem(btnKey, "btnX");
    localStorage.setItem(btnKeyCpu, "btnO");
  } else {
    localStorage.setItem(btnKey, "btnO");
    localStorage.setItem(btnKeyCpu, "btnX");
  }
}

btns.forEach(function (btn) {
  btn.addEventListener("click", toggleClass);
});

// usuario inicia o jogo vs cpu ao clicar no botão
// ele é redirecionado para a página do jogo
// user starts the vs cpu game by clicking on the button
// it is redirected to the game page
const btnPlayCpu = document.querySelector("#initCpu");
const gameScreen = document.querySelector(".game");
const startScreen = document.querySelector(".start");

btnPlayCpu.addEventListener("click", function () {
  gameScreen.classList.remove("show");
  gameScreen.classList.add("hide");
  startScreen.classList.remove("hide");
  startScreen.classList.add("show");
});

// usuario inicia o jogo vs multiplayer ao clicar no botão
// ele é redirecionado para a página do jogo
// user starts the vs multiplayer game by clicking on the button
// it is redirected to the game page
const btnPlay2 = document.querySelector("#initP2");
const gameScreenP2 = document.querySelector(".game");
const startScreenP2 = document.querySelector(".start-p2");

btnPlay2.addEventListener("click", function () {
  gameScreenP2.classList.remove("show");
  gameScreenP2.classList.add("hide");
  startScreenP2.classList.remove("hide");
  startScreenP2.classList.add("show");
});

// esconder os quadrados
// verificar a escolha do usuario
// se o usuario for X, ele inicia o jogo
// se o usuario for O, Cpu inicia o jogo
