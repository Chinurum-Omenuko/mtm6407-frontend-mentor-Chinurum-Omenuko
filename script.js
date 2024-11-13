const nav = document.querySelector(".header nav");
const burgerIcon = document.querySelector("#burger-icon .button-icon");
const closeButton = document.querySelector("#close-btn");


function openNav() {
  nav.classList.add("open");
}

function closeNav() {
  nav.classList.remove("open");
}


burgerIcon.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);
