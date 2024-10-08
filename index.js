


// function mostrarProductos() { 

//     let productos = "Listado de productos: \n";

//         productos += "1. Vinyl Nevermind-Nirvana 30€ \n";
//         productos += "2. Vinyl Sigh No More-Mumford & Sons 28€ \n";
//         productos += "3. Vinyl Welcome To Sky Valley 35€ \n";
//         productos += "4. Vinyl VS-Pearl Jam 29€ \n";
//         productos += "5. Vinyl Lateralus-Tool 45€ \n";

//     return productos;
// }


// function Comprar() {

//     let total = 0;
//     let continuarComprando = true;

//     while(continuarComprando){
    
//         let productos = mostrarProductos();
//         let seccionar = prompt(
//             productos + 
//             "¿Que producto desear añadir al carrito? Ingresa el numero o escribe `salir` para terminar"
//         );

//         //verificamos si el usuario ingreso un dato ////
//         if (eleccion === null || eleccion === ""){
//         alert (" No has ingresado un dato válido");
//         continue;
//         }

//         //verificamos si el usuario ingreso salir ////
//         if (eleccion === "salir"){
//         break;
//         }

//         eleccion = parseInt(eleccion);

//         //verificamos que el dato este en el rango y sea un numero ////
//         if (isNaN(eleccion) || eleccion < 1 || eleccion > 5 ){
//             alert("Producto inválido, seleccionar de nuevo");
//             continue;
//         }


//         if (eleccion === 1) {
//             total += 30;
//             alert("Has seleccionado Nevermind-Nirvana ");
//         }else if(eleccion === 2){
//             total += 28;
//             alert("Has seleccionado Sigh No More-Mumford & Sons ");
//         }else if (eleccion === 3){
//             total += 35;
//             alert("Has seleccionado Welcome To Sky Valley ");
//         }else if (eleccion === 4){
//             total += 29;
//             alert("Has seleccionado VS-Pearl Jam ");
//         }else if(eleccion === 5){
//             total += 45;
//             alert("Has seleccionado Lateralus-Tool ");
//         }

//         continuarComprando = prompt ("¿Quieres continuar comprando? (si/no)");

//     }

//     alert(`¡Gracias por tu compra! El total es ${total}`);
    
// }



// Comprar();

// let escribirCodigoPromocional=true;




// aplicarDescuento= prompt("¿Escribe el codigo `WELCOME15` para aplicar el descuento del 15% ? de lo contrario escribe `salir` para proceder al pago sin descuento");

//     if(aplicarDescuento==="WELCOME15") {

//     let nuevoTotal = total-(total*15)/100;

//         alert(`¡Gracias por tu compra! El total es ${nuevoTotal}€`);
        

//     }

//     if (aplicarDescuento!=="WELCOME15") {

//         alert(`No has ingresado ningun dato`); 
        


//     }
    
//     if (aplicarDescuento==="salir") {

//         alert(`¡Gracias por tu compra! El total es ${total}€`); 
        

//     }
