let images = document.querySelectorAll("#banner img");
let currentImage = 0;

function changeImage(direction) {
  images[currentImage].style.display = "none";
  currentImage += direction;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  } else if (currentImage >= images.length) {
    currentImage = 0;
  }
  images[currentImage].style.display = "block";
}

document
  .querySelector("#arrow-left")
  .addEventListener("click", () => changeImage(-1));
document
  .querySelector("#arrow-right")
  .addEventListener("click", () => changeImage(1));
