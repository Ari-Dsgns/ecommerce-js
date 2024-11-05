import { actualizarNumeroCarrito, agregarAlCarrito, getCartItems } from "./carrito.js";

const products=[

    {
    
        id:1,
        title:"Nevermind",
        subtitle:"Nirvana",
        price:35.00,
        stock:23,
        image: "./assets/nevermind.jpg",

    },

    {
    
        id:2,
        title:"Ten",
        subtitle:"Pearl Jam",
        price:42.00,
        stock:26,
        image: "./assets/ten.jpg",

    },

    {
    
        id:3,
        title:"Master of Puppets",
        subtitle:"Metallica",
        price:45.00,
        stock:16,
        image: "./assets/master.jpg",

    },

    {
    
        id:4,
        title:"Mutter",
        subtitle:"Rammstein",
        price:58.00,
        stock:8,
        image: "./assets/mutter.jpg",

    },

    {
    
        id:5,
        title:"Facelift",
        subtitle:"Alice in Chains",
        price:48.00,
        stock:5,
        image: "./assets/facelift.jpg",

    },

    {
    
        id:6,
        title:"Revelations",
        subtitle:"Audioslave",
        price:60.00,
        stock:9,
        image: "./assets/revelations.jpg",

    },

    {
    
        id:7,
        title:"OK Computer",
        subtitle:"Radiohead",
        price:58.00,
        stock:12,
        image: "./assets/ok.jpg",

    },

    {
    
        id:8,
        title:"Siamese Dream",
        subtitle:"Smashinng Pumpkins",
        price:49.00,
        stock:5,
        image: "./assets/siamese.jpg",

    },

    {
    
        id:9,
        title:"Lateralus",
        subtitle:"Tool",
        price:79.00,
        stock:1,
        image: "./assets/lateralus.jpg",

    },

    {
    
        id:10,
        title:"Rid of Me",
        subtitle:"PJ Harvey",
        price:48.00,
        stock:6,
        image: "./assets/rid.jpg",

    },

    {
    
        id:11,
        title:"Use your Illusion II",
        subtitle:"Guns n'roses",
        price:57.00,
        stock:2,
        image: "./assets/illusion.jpg",

    },

    {
    
        id:12,
        title:"Thirteenth step",
        subtitle:"A Perfect Circle",
        price:46.00,
        stock:13,
        image: "./assets/thirteenth.jpg",

    },

    {
    
        id:13,
        title:"The Rapture",
        subtitle:"Siouxsie and The Banshees",
        price:86.00,
        stock:1,
        image: "./assets/rapture.jpg",

    },
];

export const renderProducts=()=>{

    const containerList= document.getElementById("containerList");

    products.forEach((product)=>{

        const productCard=document.createElement("article");

        productCard.classList.add("product");

        productCard.setAttribute("data-id", product.id);

        productCard.innerHTML= `

        <div class="card border-5 border-white" style="width: 16rem"; id="cards">
            <img src="${product.image}" class="card-img-top"  alt="${product.image}">
            <div class="card-body">
                <h5 class="card__title">${product.title}</h5>
                <h6 class="card__subtitle">${product.subtitle}</h6>
                <h6 class="card__price">${product.price.toFixed(2)}€</h6>
                <a href="#" class="btn"><i class="bi bi-cart"></i> Agregar</a>
            </div>
        </div>
        `;

        containerList.append(productCard);
        // console.log(productCard);
    })

    
};


export function renderProductsInCart(){

    const containerList= document.getElementById("productosCarrito");
    
    const memoria=JSON.parse(localStorage.getItem("vinilos"));
    console.log(memoria);
    if(memoria && memoria.length >0){
        memoria.forEach((product)=>{

        const productCart=document.createElement("div");

        productCart.classList.add("productCart");

        productCart.setAttribute("data-id", product.id);

        productCart.innerHTML= `

        <div class="card border-5 border-white" style="width: 16rem"; id="cards">
            <img src="${product.image}" class="card-img-top"  alt="...">
            <div class="card-body">
                <h5 class="card__title">${product.title}</h5>
                <h6 class="card__subtitle">${product.subtitle}</h6>
                <h6 class="card__price">${product.price}€</h6>
                <a href="#" class="btn"><i class="bi bi-cart"></i> Agregar</a>
            </div>
        </div>
        `;

        containerList.appendChild(productCart);
        // console.log(productCard);
    })
};

}


export const updateCartUi = () => {
    const cartContainer = document.querySelector(".productosCarrito");

    
    const cartItems = getCartItems();

    cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__item");
    cartItem.setAttribute("data-id", item.id);

    cartItem.innerHTML = `
    <div class="cart__item">
        <div class="cart__item-title">${item.title}</div>
        <div>${item.price}</div>
        <div>
            <button class="cart__increase">+</button>
            <button class="cart__decrease">-</button>
            <button class="cart__remove">Eliminar</button>
        </div>
        </div>
    
    `;

    cartContainer.appendChild(cartItem);
    });
};










