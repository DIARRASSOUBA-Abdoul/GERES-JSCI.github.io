const button = document.querySelector(".barre");
const navbarRetracter = document.querySelector(".navbar-retracter");
const nav = document.querySelector(".navbar");
const nav_responsive = document.querySelector(".navbar-responsive");
const button_1 = document.querySelector(".btn-navbar");

let largeur = window.innerWidth;
let menuOuvert = false;

// animation des 3 barres
button.addEventListener("click", (event) => {
  event.stopPropagation(); // Empêche le clic de se propager au document
  navbarRetracter.style.display =
    navbarRetracter.style.display === "none" || navbarRetracter.style.display === "" ? "block" : "none";
});

// bouton de la navbar
button_1.addEventListener("click", () => {
  if (!menuOuvert) {
    nav.style.top = "15px";
    nav_responsive.style.top = "15px";
    menuOuvert = true;
    if (largeur > 1000) {
      button_1.style.top = `${nav.clientHeight + 25}px`;
    } else {
      button_1.style.top = `${nav_responsive.clientHeight + 25}px`;
    }
  } else {
    nav.style.top = "-150px";
    nav_responsive.style.top = "-150px";
    button_1.style.top = "15px";
    menuOuvert = false;
  }
});

// Fermer navbarRetracter si on clique en dehors
document.addEventListener("click", (event) => {
  if (navbarRetracter.style.display === "block") {
    navbarRetracter.style.display = "none";
  }
});

// Animation de la navbar au scroll
window.addEventListener("scroll", () => {
  if (window.scrollY < 30) {
    nav.style.top = "15px";
    nav_responsive.style.top = "15px";
    button_1.style.top = "-150px";
  } else {
    nav.style.top = "-150px";
    nav_responsive.style.top = "-150px";
    button_1.style.top = "15px";
  }
});
