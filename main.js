const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", toggleElement)
function toggleElement(){
    desktopMenu.classList.toggle("inactive")
}