const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const burgerList = document.querySelector(".mobile-menu");
const cartIconMenu = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

function toggleDeskMenu() {
    if (shoppingCart.classList.contains("inactive")) {
        desktopMenu.classList.toggle("inactive");
    } else {
        toggleShoppingCart();
        desktopMenu.classList.toggle("inactive");
    }
}
function toggleBurgerMenu() {
    if (shoppingCart.classList.contains("inactive")) {
        //if it is closed
        burgerList.classList.toggle("inactive"); //open
    } else {
        toggleShoppingCart(); //close it first
        burgerList.classList.toggle("inactive"); //open
    }
}
function toggleShoppingCart() {
    if (burgerList.classList.contains("inactive")) {
        //if it is closed
        shoppingCart.classList.toggle("inactive"); //open
    } else {
        toggleBurgerMenu(); //close it first
        shoppingCart.classList.toggle("inactive"); //open
    }
}

menuEmail.addEventListener("click", toggleDeskMenu);

burgerMenu.addEventListener("click", toggleBurgerMenu);

cartIconMenu.addEventListener("click", toggleShoppingCart);

let productlist = [];
productlist.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
    name: "computer",
    price: 600,
    image: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg",
});

function renderProducts(arr) {
    for (product of productlist) {
        const productcart = document.createElement("div");
        productcart.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productName = document.createElement("p");
        productName.innerText = product.name;
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productcart.appendChild(productImg);
        productcart.appendChild(productInfo);

        cardsContainer.appendChild(productcart);
    }
}
renderProducts(productlist)
