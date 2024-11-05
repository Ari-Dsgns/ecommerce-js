const cartItems=[];

export const createProduct = (id,title,price) =>({id,title,price});

export const getCartItems = () => {
    return [...cartItems];
  };
// console.log(createProduct)

export function agregarAlCarrito(producto) {

    const memoria=JSON.parse(localStorage.getItem("vinilos"));

    console.log(memoria);

    if(!memoria) {

        const nuevoProducto=producto;

        nuevoProducto.cantidad=1;

        localStorage.setItem("vinilos", JSON.stringify([nuevoProducto]));

    }else {

        const indiceProducto=memoria.findIndex(vinilos=>vinilos.id===producto.id);

        console.log(indiceProducto);

        if(indiceProducto===-1) {

            const nuevaMemoria=memoria;

            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));

        
        }else {

            memoria[indiceProducto].cantidad++;

        };

        const memoriaActualizada=localStorage.setItem("vinilos", JSON.stringify(memoria));
        actualizarNumeroCarrito()
        


    };
};

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto=producto;
    nuevoProducto.cantidad=1;
    return nuevoProducto;

}

export const cuentaCarritoElement= document.getElementById("cuenta-carrito");

export function actualizarNumeroCarrito(){
    const memoria=JSON.parse(localStorage.getItem("vinilos"));
    const cuenta=memoria.reduce((acum,current) =>acum+current.cantidad,0);
    cuentaCarritoElement.innerText=cuenta;

};


export function renderProductsInCart(){

    const containerList= document.getElementById("productosCarrito");

    const cartItems = getCartItems();
    
    const memoria=JSON.parse(localStorage.getItem("vinilos"));
    console.log(memoria);
    if(memoria && memoria.length >0){
        cartItems.forEach((product)=>{

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



