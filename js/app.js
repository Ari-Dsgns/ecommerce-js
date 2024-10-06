//declaramos la funcion que nos muestra los articulos//
function listaDeArticulos(){

    let catalogo= "Articulos disponibles: \n";

    catalogo += "1. Vinyl Nevermind Nirvana-35.00 \n";
    catalogo += "2. Vinyl VS de Pearl Jam 42.00 \n";
    catalogo += "3. Master of Puppets de Metallica 45.00 \n";
    catalogo += "4. Mutter de Rammstein 58.00 \n";
    catalogo += "5. Nevermind-Nirvana 10.00 \n";
    catalogo += "6. Nevermind-Nirvana 20.00 \n";

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
        alert("Has agregado `vinyl Nevermind de Nirvana` a la lista del carrito");
        }else if (elegirArticulos===2) {
        total += 42.00;
        alert("Has agregado `Vinyl VS de Pearl Jam` a la lista del carrito");
        }
        else if (elegirArticulos===3) {
        total += 45.00;
        alert("Has agregado `Master of Puppets de Metallica` a la lista del carrito");
        }
        else if (elegirArticulos===4) {
        total += 45.00;
        alert("Has agregado `Mutter de Rammstein` a la lista del carrito");
        }

       //preguntamos si continua con la compra para seguir o salir del bucle//
        seguirSeleccionando= prompt("¿Quieres mas articulos al carrito? (s/n)") === "s";

    }

    
        let AplicarDescuento=parseInt(prompt("Escribe `10` para aplicarte un descuento del 10% en el total"));

        while(AplicarDescuento) {
        
        if (AplicarDescuento="10") {

            let nuevoTotal = total-(total*10)/100;
            alert("descuento aplicado correctamente");
        
        
            alert(`Gracias por tu compra. El total es ${nuevoTotal}`);
            break;
        
        
        } if(!isNaN(AplicarDescuento) || AplicarDescuento===null || descuento===""){
            alert("Por favor ingresa un dato valido");
            continue;
        }
    }
} 

seleccionArticulos();// esto genera un comentario de una linea

