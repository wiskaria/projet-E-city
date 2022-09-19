// // Attraper un élément
// const title = document.querySelector(".home__title");
// console.log(title);
// // On ajoute un événement à l'élément
// title.addEventListener("mouseover", salut);
// // Cette fonction est lancé une fois que
// // l'événement mouseover est lancé
// function salut() {
//   // instructions, permet de changer la couleur de la classe title à bleu
//   title.style.color = "blue";
// }
const navbarIcon = document.querySelector(".navbar__icon");
const menu = document.querySelector(".navbar");
const ferme = document.querySelector(".navbar__iconclose");
navbarIcon.addEventListener("click", ouvrire);
ferme.addEventListener("click", fermeture);
function ouvrire() {
  navbarIcon.style.display = "none";
  //   menu.classList.toggle("navbar__ouvrire");
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
