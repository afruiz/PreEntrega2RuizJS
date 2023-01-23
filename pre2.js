


class Vuelo{

    constructor (salida , llegada , clase){

        this.salida = salida;
        this.llegada = llegada;
        this.clase = clase;
    }

    get_datos(){

        console.log("-----------")
        console.log ("Salida: " , this.salida);
        console.log ("Llegada: " , this.llegada);
        console.log ("Clase: " , this.clase);
        console.log();

    }

}


//VUELOS//

let lista_vuelos = [];

for(let i=0 ; i<3 ; i = i+1){

    let salida = prompt("Ingrese su Aeropuerto de salida: BUE - TUC - BRC");
    let llegada = prompt("Ingrese su Aeropuerto de llegada: BUE - TUC - BRC");
    let clase = prompt("Ingrese su clase: TURISTA - BUSINESS");

    let vuelo = new Vuelo(salida , llegada , clase);

    lista_vuelos.push(vuelo);
}

console.log(lista_vuelos);

//FIN VUELOS//


//RENDER VUELOS//

for(let vuelo of lista_vuelos){

    vuelo.get_datos();
}


