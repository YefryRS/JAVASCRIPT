/* PROMEDIO */

/* Creamos las variables */

/* var lista1 = [100, 200, 300, 500];


let sumaLista1 = 0;
for(let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

let promedio = sumaLista1 / lista1.length ; */


/* Creamos las funciones */
function calcularMediaAritmetica(lista) {

   /*  let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
    sumaLista1 = sumaLista + lista[i];
    } */

    const sumaLista = lista.reduce(
        function ( valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento
        }
    ) /* Con el metodo reduce, vamos a mandarle una funcion y con los elementos que tenga los va a ir sumando */

    let promedio = sumaLista / lista.length ;
    return promedio;
}


/* RETO: conectar esto a html */

