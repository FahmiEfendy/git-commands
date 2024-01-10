let currIdx = 0;
circle = document.querySelectorAll(".gallery-screen__circle-icon svg");
const items = document.querySelectorAll(".gallery-screen__img-carousel-item");
const totalItems = items.length;

function prevImg() {
  currIdx > 0 ? currIdx-- : (currIdx = totalItems - 1);
  updateCarousel();
}

function nextImg() {
  currIdx < totalItems - 1 ? currIdx++ : (currIdx = 0);
  updateCarousel();
}

function updateCarousel() {
  const newValue = -currIdx * 100 + "%";
  document.querySelector(
    ".gallery-screen__img-carousel-container"
  ).style.transform = "translateX(" + newValue + ")";

  circle.forEach((c, i) => {
    i === currIdx
      ? (c.style.backgroundColor = "white")
      : (c.style.backgroundColor = "transparent");
  });
}
