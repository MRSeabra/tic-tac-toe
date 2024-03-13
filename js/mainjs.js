// usuario escolhe se quer O ou X
const btns = document.querySelectorAll(".btn-choice");
let btnKey = "btnChoice";
localStorage.setItem(btnKey, "btnX");

function toggleClass(item) {
  btns.forEach(function (btn) {
    btn.classList.remove("active");
    localStorage.removeItem(btnKey, "");
  });
  item.currentTarget.classList.add("active");
  localStorage.setItem(btnKey, item.currentTarget.id);
}

btns.forEach(function (btn) {
  btn.addEventListener("click", toggleClass);
});
