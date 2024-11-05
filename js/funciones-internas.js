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
=          fuciones internas de la app -Control de stock
=====================================================================================*/

// const productos=[

//     {
    
//         ref:1,
//         nombre:"Nevermind-Nirvana",
//         precio:35,
//         stock:23,

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
//         stock:5,

//     },

//     {
    
//         ref:6,
//         nombre:"Revelations-Audioslave",
//         precio:60,
//         stock:9,

//     },

//     {
    
//         ref:7,
//         nombre:"OK Computer-Radiohead",
//         precio:58,
//         stock:12,

//     },

//     {
    
//         ref:8,
//         nombre:"Siamese Dream-Smashinng Pumpkins",
//         precio:49,
//         stock:5,

//     },

//     {
    
//         ref:9,
//         nombre:"Lateralus-Tool",
//         precio:79,
//         stock:1,

//     },

//     {
    
//         ref:10,
//         nombre:"Rid of Me-PJ Harvey",
//         precio:27,
//         stock:6,

//     }
// ] 

// const controlDeProductos=()=> {

//     let seguirSeleccionando= true;

//     while(seguirSeleccionando) {

//         let opcionesDisponibles=prompt("CONTROL DE PRODUCTOS - Log: Invitado :) \n \n Selecciona entre estas opciones: \n  \n1. Ver lista de productos \n \n2. Agregar nuevo producto \n \n3. Eliminar producto \n \n4. Buscar producto \n \n5. Actualizar stock \n \n6. Salir \n");
        
//         if(opcionesDisponibles==="1"){

//             verProductos();
//             continue;

//         }

//         if(opcionesDisponibles==="2"){

//             const nuevoProducto= solicitarDatosProducto();
//             agregarNuevoProducto(nuevoProducto);
//             alert("Producto agregado correctamente");
//             console.log(verProductos());

//             continue;

//         }

//         if(opcionesDisponibles==="3"){

//             const productoAEliminar=prompt("Escribe el nombre del producto a eliminar")
//             eliminarProducto(productoAEliminar);
//             console.log(verProductos());
//             continue;
//         }

//         if(opcionesDisponibles==="4"){
//             const preguntaBusquedaProducto=prompt("Escribe el nombre del producto que estas buscando")
//             buscarProducto(preguntaBusquedaProducto);
//             continue;
//         }

//         if(opcionesDisponibles==="5"){
//             preguntarStock();
//             continue;

//         }


//         if(opcionesDisponibles==="6"){
//             alert("¡Hasta pronto! ;)")
//             break;
//         }

//         if(opcionesDisponibles===null){
            
//             break;
//         }
        

//         else{
//             alert("ingresa una opcion valida");
//             continue;
//         }
    
//     }

// };

// const verProductos=()=>{

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


// const agregarNuevoProducto=({ref, nombre, precio, stock})=> {

//     productos.push({ref,nombre,precio,stock});

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


// function preguntarStock(){

//     let nombre=prompt("Escribe el nombre del producto");
    
//     let cantidad= parseInt(prompt("Escribe la cantidad a sumar al stock actual"));
    
//     actualizarStock(nombre,cantidad)
//     verProductos()

// };

// const actualizarStock =( nombre, cantidad)=>{
//     productos.forEach(producto => {
//     if (producto.nombre === nombre) {
//         producto.stock += parseInt(cantidad);
//     }
//     });
    
// }



// const eliminarProducto=(nombre)=>{

//     const index= productos.findIndex((producto)=>producto.nombre===nombre)

//         if(index !== -1) {

//         productos.splice(index, 1);

//         alert(`Producto ${nombre} eliminado`);
        

//         }else {

//         alert(`Producto ${nombre} no encontrado`);

//         }
// };


// const buscarProducto=(nombre)=> {

    
//     const resultadoBusqueda= productos.find((producto) => producto.nombre===nombre);

//     if(resultadoBusqueda===nombre);{

//     console.table(resultadoBusqueda)

//     };
// };


// function loggin() {

//     let seguirPreguntando=true;

//     while(seguirPreguntando) {

//         let preguntaUsuario= prompt("Nombre de usuario \n \n (los datos de acceso podrás encontrarlos en el README )");

//         if(preguntaUsuario==="Invitado") {
            
//             break;
//         }
//         else{
            
//             alert("el nombre de usuario no es correcto");
            
//             continue;
//         }
//     }

//     let continuarPreguntando=true;

//     while(continuarPreguntando) {

//         let preguntaContraseña=parseInt(prompt("Escribe tu contraseña"));

//         if(preguntaContraseña ===123456){
//             alert("¡Bienvenido Invitado!")
//             break;
            
//         }

//         if(preguntaContraseña===!isNaN || preguntaContraseña !== 123456){
//             alert("contraseña incorrecta");
//             continue;
//         }
//     }

// };

// loggin();

// controlDeProductos();
