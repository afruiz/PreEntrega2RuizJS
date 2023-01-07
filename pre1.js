

function precio_vuelo( salida , llegada ){

    let precio;

    if( salida == "Buenos Aires" && llegada == "Bariloche" ){
        precio = 10000;

        return precio
    }

    else if( salida == "Buenos Aires" && llegada == "Tucuman" ){
        precio = 12000;

        return precio
    }

    else if( salida == "Tucuman" && llegada == "Buenos Aires" ){
        precio = 12000;

        return precio
    }

    else if( salida == "Tucuman" && llegada == "Bariloche" ){
        precio = 18000;

        return precio
    }

    else if( salida == "Bariloche" && llegada == "Buenos Aires" ){
        precio = 10000;

        return precio
    }

    else if( salida == "Bariloche" && llegada == "Tucuman" ){
        precio = 18000;

        return precio
    }

    else{
        return false
    }
}


console.log("Bienvenidos a Aerolíneas Cóndor");
let salida = "";

while ( salida != "FIN"){
    salida = prompt("Ingrese ciudad de salida: Buenos Aires - Tucuman - Bariloche              Para finalizar escriba FIN");
    if( salida != "FIN"){
        let llegada = prompt("Ingrese ciudad de llegada: Buenos Aires - Tucuman - Bariloche");
        console.log("Salida desde: ", salida);
        console.log("Llegada a: ", llegada);
        console.log("El precio de su vuelo es: ", precio_vuelo( salida , llegada ));
    }
}