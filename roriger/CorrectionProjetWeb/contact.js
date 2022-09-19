const message = document.querySelector(".btn");
const navbarIcon = document.querySelector(".navbar__icon");
const menu = document.querySelector(".navbar");
const ferme = document.querySelector(".navbar__iconclose");
navbarIcon.addEventListener("click", ouvrire);

message.addEventListener("click", envoi);
ferme.addEventListener("click", fermeture);

function envoi() {
  alert("message envoyer !!");
}

function ouvrire() {
  navbarIcon.style.display = "none";
  ferme.style.display = "flex";
  menu.style.top = "10rem";
  menu.style.right = "0";
  menu.style.position = "absolute";
  menu.style.display = "grid";
}
function fermeture() {
  navbarIcon.style.display = "flex";
  ferme.style.display = " none";
  menu.style.display = "none";
}
