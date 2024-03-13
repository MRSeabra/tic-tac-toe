// usuario escolhe se quer O ou X
const btns = document.querySelectorAll(".btn-choice");

function toggleClass(item) {
  btns.forEach(function (btn) {
    btn.classList.remove("active");
    localStorage.removeItem("id");
  });
  item.currentTarget.classList.add("active");
  localStorage.setItem("id", "myvalue");
}

btns.forEach(function (btn) {
  btn.addEventListener("click", toggleClass);
});
