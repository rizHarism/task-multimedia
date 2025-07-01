const klikSuara = new Audio("assets/audio/click.wav");
klikSuara.preload = "auto";

document.addEventListener("DOMContentLoaded", () => {
  const tombolAnchors = document.querySelectorAll("a.btn");

  tombolAnchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      klikSuara.currentTime = 0;
      klikSuara.play();
      setTimeout(() => {
        window.location.href = this.getAttribute("href");
      }, 200); // delay for click
    });
  });

  const tombolLain = document.querySelectorAll("button");
  tombolLain.forEach(button => {
    button.addEventListener("click", () => {
      klikSuara.currentTime = 0;
      klikSuara.play();
    });
  });
});
