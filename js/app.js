//declaramos la funcion que nos muestra los articulos//
function listaDeArticulos(){

    let catalogo= "Articulos disponibles: \n";

    catalogo += "1. Vinyl Nevermind-Nirvana-35.00 \n";
    catalogo += "2. Vinyl Ten-Pearl Jam 42.00 \n";
    catalogo += "3. Vinyl Master of Puppets-Metallica 45.00 \n";
    catalogo += "4. Vinyl Mutter-Rammstein 58.00 \n";
    catalogo += "5. Vinyl Facelift-Alice in Chains 48.00 \n";
    catalogo += "6. Vinyl Revelations-Audioslave 60.00 \n";

    return catalogo;
}

//declaramos la funcion que nos permite elegir los articulos//
function seleccionArticulos() {

    //declaramos las variables de conteo y condicion//
    let total = 0 ;
    let seguirSeleccionando= true;
    
    //iniciamos el ciclo//
    while (seguirSeleccionando) {
        let catalogo= listaDeArticulos();
        let elegirArticulos= prompt(
        catalogo +
        "Indica el numero del articulo que quieres añadir a la lista o escribe `salir` para terminar"
        );


        //validamos datos incorrectos//
        if(elegirArticulos===null || elegirArticulos==""){
        alert("No has ingresado ningun dato");
        continue;
        }

        if (elegirArticulos=== "salir") {
        break;
        }
       //parseamos la variable para que nos devuelva el dato como numero //
        elegirArticulos = parseInt(elegirArticulos);

        if (isNaN(elegirArticulos) || elegirArticulos< 1 || elegirArticulos>6) {
        alert("El numero del articulo no existe, ingresa un numero válido ")
        continue;
        }

       //validamos datos correctos y los sumamos al conteo//
        if (elegirArticulos=== 1) {
        total += 35.00;
        alert("Has agregado `Vinyl Nevermind-Nirvana` al carrito");
        }else if (elegirArticulos===2) {
        total += 42.00;
        alert("Has agregado `Vinyl Ten-Pearl Jam` al carrito");
        }
        else if (elegirArticulos===3) {
        total += 45.00;
        alert("Has agregado `Vinyl Master of Puppets-Metallica` al carrito");
        }
        else if (elegirArticulos===4) {
        total += 58.00;
        alert("Has agregado `Vinyl Mutter-Rammstein` al carrito");
        }
        else if (elegirArticulos===5) {
        total += 48.00;
        alert("Has agregado `Facelift-Alice in Chains` al carrito");
        }
        else if (elegirArticulos===6) {
        total += 60.00;
        alert("Has agregado `Facelift-Alice in Chains` al carrito");
        }

       //preguntamos si continua con la compra para seguir o salir del bucle//
        seguirSeleccionando= prompt("¿Quieres agregar mas articulos al carrito? (s/n)") === "s";

    }

    //una vez fuera del bucle preguntamos si aplica o no descuento pora finalizar //
    aplicarDescuento= prompt("¿Quieres aplicar el descuento del 15% al total de la compra? (s/n) ");

    if(aplicarDescuento==="s") {

    let nuevoTotal = total-(total*15)/100;

        alert(`¡Gracias por tu compra! El total es ${nuevoTotal}€`);

    }
    
    if (aplicarDescuento==="n") {

        alert(`¡Gracias por tu compra! El total es ${total}€`); 

    }


} 

seleccionArticulos()
