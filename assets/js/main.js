const toggle = document.querySelector(".hamburger");
const hiddenNav = document.querySelector(".hidden-nav");

init();

function init() {
  toggle.addEventListener("click", function() {
    hiddenNav.classList.toggle("display-nav");
  });
}
