window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".box");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight - 250 && position.bottom > 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });

})

window.dispatchEvent(new Event("scroll"));