// Affichage des division-2
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".division-2");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight - 250) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });

  // affichage des seance
  const seances = document.querySelectorAll(".seance");
  seances.forEach((seance) => {
    const position = seance.getBoundingClientRect();

    if (position.top < window.innerHeight - 200) {
      seance.classList.add("visible");
    } else {
      seance.classList.remove("visible");
    }
  });

  // Affichage contenu concours
  const contenu1 = document.querySelectorAll(".contenu-1");
  contenu1.forEach((seance) => {
    const position = seance.getBoundingClientRect();

    if (position.top < window.innerHeight - 160) {
      seance.classList.add("visible-3");
    } else {
      seance.classList.remove("visible-3");
    }
  });

  // Affichage pre seance
  const pres = document.querySelectorAll(".pre");
  pres.forEach((seance) => {
    const position = seance.getBoundingClientRect();

    if (position.top < window.innerHeight - 200) {
      seance.classList.add("visible-2");
    } else {
      seance.classList.remove("visible-2");
    }
  });

  // Affichage titre section 3 et 4
  const titres = document.querySelectorAll(".titre");
  titres.forEach((seance) => {
    const position = seance.getBoundingClientRect();

    if (position.top < window.innerHeight - 160) {
      seance.classList.add("visible-1");
    } else {
      seance.classList.remove("visible-1");
    }
  });
});

// ✅ LANCEMENT MANUEL AU CHARGEMENT (important)
window.dispatchEvent(new Event("scroll"));
