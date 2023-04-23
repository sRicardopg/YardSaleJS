const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const burgerList = document.querySelector(".mobile-menu")
function toggleDeskMenu(){
    desktopMenu.classList.toggle("inactive")
}
function toggleBurgerMenu(){
    burgerList.classList.toggle("inactive")
}
menuEmail.addEventListener("click", toggleDeskMenu)

burgerMenu.addEventListener("click", toggleBurgerMenu)
