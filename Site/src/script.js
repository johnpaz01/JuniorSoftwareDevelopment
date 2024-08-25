document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offset = window.innerHeight / 1 - element.clientHeight / 1;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
}

const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.add("translate-x-full");
    item.classList.remove(
      "translate-x-0",
      "translate-x-full",
      "-translate-x-full"
    );
    if (i === index) {
      item.classList.add("translate-x-0");
    } else if (i < index) {
      item.classList.add("-translate-x-full");
    } else {
      item.classList.add("translate-x-full");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

showItem(currentIndex);
