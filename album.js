const countainer = document.querySelector(".countainer");
const content1 = document.querySelector(".content-1");
const content2 = document.querySelector(".content-2");

const button1 = document.querySelector(".button-1")
const button2 = document.querySelector(".button-2")

function showCountainer() {
  countainer.classList.remove("disappear");
}

function hideCountainer() {
  countainer.classList.add("disappear");
}

function hideAllContents() {
  content1.classList.add("disappear");
  content2.classList.add("disappear");
}

function AfficheContent(target) {
  target.classList.remove("disappear");
}

const buttons = [button1, button2];

function BoutonActif(clickedButton) {
  buttons.forEach(button => {
    button.classList.remove("active-button");
  });
  clickedButton.classList.add("active-button");
}

buttons.forEach(button => {
  button.addEventListener("click", () => BoutonActif(button));
});

function transitionToContent(targetContent, clickedButton) {
  hideAllContents();
  showCountainer();
  BoutonActif(clickedButton);

  setTimeout(() => {
    hideCountainer();
    AfficheContent(targetContent);
  }, 6000);
}

// Événements de clic
button1.addEventListener("click", (e) => {
  transitionToContent(content1, e.currentTarget);
});

button2.addEventListener("click", (e) => {
  transitionToContent(content2, e.currentTarget);
});
