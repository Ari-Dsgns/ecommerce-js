/* ====================================================
=          Carrito de la compra para el usuario
======================================================= */

//declaramos la funcion que nos muestra los articulos//

// function listaDeArticulos(){

//     let catalogo= "Articulos disponibles: \n";

//     catalogo += "1. Vinyl Nevermind-Nirvana-35.00 \n";
//     catalogo += "2. Vinyl Ten-Pearl Jam 42.00 \n";
//     catalogo += "3. Vinyl Master of Puppets-Metallica 45.00 \n";
//     catalogo += "4. Vinyl Mutter-Rammstein 58.00 \n";
//     catalogo += "5. Vinyl Facelift-Alice in Chains 48.00 \n";
//     catalogo += "6. Vinyl Revelations-Audioslave 60.00 \n";

//     return catalogo;
// }

// //declaramos la funcion que nos permite elegir los articulos//

// function seleccionArticulos() {

//     //declaramos las variables de conteo y condicion//
//     let total =Math.round (0) ;
//     let seguirSeleccionando= true;
    
//     //iniciamos el ciclo//
//     while (seguirSeleccionando) {
//         let catalogo= listaDeArticulos();
//         let elegirArticulos= prompt(
//         catalogo +
//         "Indica el numero del articulo que quieres añadir a la lista o escribe `salir` para terminar"
//         );


//         //validamos datos incorrectos//
//         if(elegirArticulos===null || elegirArticulos==""){
//         alert("No has ingresado ningun dato");
//         continue;
//         }

//         if (elegirArticulos=== "salir") {
//             seguirSeleccionando=false;
//             escribirCodigoPromocional=false;
//         break;
//         }
//         //parseamos la variable para que nos devuelva el dato como numero //
//         elegirArticulos = parseInt(elegirArticulos);

//         if (isNaN(elegirArticulos) || elegirArticulos< 1 || elegirArticulos>6) {
//         alert("El numero del articulo no existe, ingresa un numero válido ")
//         continue;
//         }

//         //validamos datos correctos y los sumamos al conteo//
//         if (elegirArticulos=== 1) {
//         total += 35.00;
//         alert("Has agregado `Vinyl Nevermind-Nirvana` al carrito");
//         }else if (elegirArticulos===2) {
//         total += 42.00;
//         alert("Has agregado `Vinyl Ten-Pearl Jam` al carrito");
//         }
//         else if (elegirArticulos===3) {
//         total += 45.00;
//         alert("Has agregado `Vinyl Master of Puppets-Metallica` al carrito");
//         }
//         else if (elegirArticulos===4) {
//         total += 58.00;
//         alert("Has agregado `Vinyl Mutter-Rammstein` al carrito");
//         }
//         else if (elegirArticulos===5) {
//         total += 48.00;
//         alert("Has agregado `Facelift-Alice in Chains` al carrito");
//         }
//         else if (elegirArticulos===6) {
//         total += 60.00;
//         alert("Has agregado `Facelift-Alice in Chains` al carrito");
//         }

//         //preguntamos si continua con la compra para seguir o salir del bucle//
//         seguirSeleccionando= prompt("¿Quieres agregar mas articulos al carrito? (s/n)") ;

        

//         if (seguirSeleccionando==="s") {
//         continue;

//         }if(seguirSeleccionando==="n"){
            
//             break;
//         }

//         if (seguirSeleccionando===null) {
//             alert(`Ingresa un dato válido`);
//             continue;
//         }
    
//     }
    

//     let totalSindescuento= Math.round (total*85/100);
//     let escribirCodigoPromocional=true;

//         while(escribirCodigoPromocional) {

//         aplicarDescuento= prompt("¿Escribe `welcome` para aplicar el descuento del 15% al total? o escribe `no tengo cupon` para proceder al pago sin descuento. De lo contrario escribe `salir` para terminar");

//         if(aplicarDescuento==="welcome") {

//         let nuevoTotal = Math.round (total-(total*15)/100);

//             alert(`¡Gracias por tu compra! El total es ${nuevoTotal}€. Con el cupon "welcome" has ahorrado ${total-nuevoTotal}€`);
//             break;

//         }
    
//         if (aplicarDescuento==="no tengo cupon") {

//             alert(`¡Gracias por tu compra! El total es ${total}€. Con el cupon "welcome" podrias haber ahorrado unos ${total-totalSindescuento}€ ¡Prueba aplicarlo la proxima vez! ;)`);
//             break;

//         }
//         if (aplicarDescuento==="salir") {
//             break;
//         }

//         if (aplicarDescuento!=="welcome" || aplicarDescuento!=="no tengo cupon"|| aplicarDescuento==="") {

//             alert(`Ingresa un dato válido`); 
//             continue;
        
//         }
        
        
//     }


// } 

// seleccionArticulos()





/* ================================================================================
=          fuciones internas de la app -Control de los productos
=====================================================================================*/


const productos=[

    {
    
        ref:1,
        nombre:"Nevermind-Nirvana",
        precio:35,
        stock:31,

    },

    {
    
        ref:2,
        nombre:"Ten-Pearl Jam",
        precio:42,
        stock:26,

    },

    {
    
        ref:3,
        nombre:"Master of Puppets-Metallica",
        precio:45,
        stock:16,

    },

    {
    
        ref:4,
        nombre:"Mutter-Rammstein",
        precio:58,
        stock:8,

    },

    {
    
        ref:5,
        nombre:"Facelift-Alice in Chains",
        precio:48,
        stock:10,

    },

    {
    
        ref:6,
        nombre:"Revelations-Audioslave",
        precio:60,
        stock:20,

    }
] 





const añadirProducto=({ref, nombre, precio, stock})=> {

    productos.push({ref,nombre,precio,stock});

};


const mostrarProductos=()=>{

    let mensaje="";

    for( let producto of productos ) {

        mensaje += `
        Ref: ${producto.ref}
        Nombre ${producto.nombre}
        Precio ${producto.precio}
        Stock ${producto.stock}`;
    }

    console.table(productos);
    

};

const solicitarDatosProducto=()=>{
    let refProducto =prompt("Ingresa la referencia del producto");
    let nombreProducto =prompt("Ingresa el nombre del producto");
    let precioProducto =parseFloat(prompt("Ingresa el precio del producto"));
    let stockProducto=parseInt(prompt ("Ingresa la cantidad de unidades disponibles"));

    if(!isNaN(refProducto) && nombreProducto && !isNaN(precioProducto) && !isNaN(stockProducto)){
        return {ref: refProducto, nombre: nombreProducto, precio:precioProducto, stock:stockProducto };

        
    } else{
        alert("Ingresa un dato valido");
    }

};

const eliminarProducto=()=>{
    alert("prooducto eliminado")
    //dejamos pendiente eta funcion
};


//pdte funcion actualizar stock===

const controlProductos=()=> {

    let seguirSeleccionando= true;

    while(seguirSeleccionando) {

        let opcionesDisponibles=prompt("Selecciona entre estas opciones: \n  \n1. Agregar productos \n \n2. Ver productos \n \n3. Eliminar productos \n \n4. Salir");

        if(opcionesDisponibles==="1"){

            const nuevoProducto= solicitarDatosProducto();
            añadirProducto(nuevoProducto);
            alert("Producto agregado correctamente")
            //aqui podriamos hacer un actualizar stock?
            continue;

        }

        if(opcionesDisponibles==="2"){

            mostrarProductos();
            continue;

        }

        if(opcionesDisponibles==="3"){
            eliminarProducto();
            continue;
        }

        if(opcionesDisponibles==="4"){
            alert("¡Hasta pronto!")
            break;
        }

        if(opcionesDisponibles===null){
            //quieres salir)
            break;
        }
        

        else{
            alert("ingresa una opcion valida");
            continue;
        }
    
    }

};

controlProductos()
