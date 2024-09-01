const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav_menu");




burger.addEventListener("click", () => {
    if (navMenu.style.visibility === "visible") {
        navMenu.style.visibility = "hidden";
        navMenu.style.opacity = "0";
    } else {
        navMenu.style.visibility = "visible";
        navMenu.style.opacity = "1";
    }


})