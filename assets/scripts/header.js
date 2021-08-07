const hamburger = document.querySelector(".header__hamburger-menu");
const navMenu = document.querySelector(".header__list");
const navLink = document.querySelectorAll(".header__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}