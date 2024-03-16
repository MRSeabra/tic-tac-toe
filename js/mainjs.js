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
