
import {actualizarNumeroCarrito, agregarAlCarrito, createProduct, renderProductsInCart } from "./carrito.js";
import { renderProducts, updateCartUi,  } from "./ui.js";


document.addEventListener("DOMContentLoaded",()=>{
    renderProducts();
    actualizarNumeroCarrito()

});


document.getElementById("containerList").addEventListener("click", (event)=>{

    if(event.target.classList.contains("btn")){

        const card= event.target.closest(".product");
        // console.log("Card found:", card);
        const productTitle=card.querySelector(".card__title").innerText;
        // console.log("Card found:", productTitle);
        const productPrice=card.querySelector(".card__price").innerText;
        // console.log("Card found:", productPrice);
        const productId=card.getAttribute("data-id");
        // console.log("Card found:", productId);

        const product=createProduct(productId, productTitle, productPrice);
        // console.log(product);

        agregarAlCarrito(product);

        renderProductsInCart()
        updateCartUi()
        
        
        
    }

})



