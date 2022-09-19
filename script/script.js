const icon = document.querySelector("#menu");
const menu = document.querySelector(".menu");

icon.addEventListener("click", showMenu);

function showMenu() {
  menu.classList.toggle("menu");
}
