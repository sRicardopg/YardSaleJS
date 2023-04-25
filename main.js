const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const burgerList = document.querySelector(".mobile-menu")
const cartIconMenu = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".product-detail")
function toggleDeskMenu(){
    desktopMenu.classList.toggle("inactive")
}
function toggleBurgerMenu(){
    if (shoppingCart.classList.contains("inactive")){//if it is closed
        burgerList.classList.toggle("inactive")//open
    }else{
        toggleShoppingCart() //close it first
        burgerList.classList.toggle("inactive") //open
    }
    
}
function toggleShoppingCart(){
    if(burgerList.classList.contains("inactive")){ //if it is closed
        shoppingCart.classList.toggle("inactive")//open
    }else{
        toggleBurgerMenu()  //close it first
        shoppingCart.classList.toggle("inactive") //open
    }
}
menuEmail.addEventListener("click", toggleDeskMenu)

burgerMenu.addEventListener("click", toggleBurgerMenu)

cartIconMenu.addEventListener("click", toggleShoppingCart)