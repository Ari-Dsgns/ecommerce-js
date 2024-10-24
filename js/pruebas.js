// const productos=[

//     {
    
//         ref:1,
//         nombre:"Nevermind-Nirvana",
//         precio:35,
//         stock:31,

//     },

//     {
    
//         ref:2,
//         nombre:"Ten-Pearl Jam",
//         precio:42,
//         stock:26,

//     },

//     {
    
//         ref:3,
//         nombre:"Master of Puppets-Metallica",
//         precio:45,
//         stock:16,

//     },

//     {
    
//         ref:4,
//         nombre:"Mutter-Rammstein",
//         precio:58,
//         stock:8,

//     },

//     {
    
//         ref:5,
//         nombre:"Facelift-Alice in Chains",
//         precio:48,
//         stock:10,

//     },

//     {
    
//         ref:6,
//         nombre:"Revelations-Audioslave",
//         precio:60,
//         stock:20,

//     }
// ] 





// const añadirProducto=({ref, nombre, precio, stock})=> {

//     productos.push({ref,nombre,precio,stock});

// };

// const sumarStock=({id,stock})=>{

// productos.push({id,stock});

// return;


// }

// const mostrarProductos=()=>{

//     let mensaje="";

//     for( let producto of productos ) {

//         mensaje += `
//         Ref: ${producto.ref}
//         Nombre ${producto.nombre}
//         Precio ${producto.precio}
//         Stock ${producto.stock}`;
//     }

//     console.table(productos);
    

// };

// const solicitarDatosProducto=()=>{
//     let refProducto =prompt("Ingresa la referencia del producto");
//     let nombreProducto =prompt("Ingresa el nombre del producto");
//     let precioProducto =parseFloat(prompt("Ingresa el precio del producto"));
//     let stockProducto=parseInt(prompt ("Ingresa la cantidad de unidades disponibles"));

//     if(!isNaN(refProducto) && nombreProducto && !isNaN(precioProducto) && !isNaN(stockProducto)){
//         return {ref: refProducto, nombre: nombreProducto, precio:precioProducto, stock:stockProducto };

        
//     } else{
//         alert("Ingresa un dato valido");
//     }

// };

// const eliminarProducto=()=>{
//     alert("prooducto eliminado")
//     //dejamos pendiente eta funcion
// };







