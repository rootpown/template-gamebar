const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav_menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});