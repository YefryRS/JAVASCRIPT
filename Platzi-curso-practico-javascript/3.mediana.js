/* MEDIANA */

function calcularMediaAritmetica(lista) {
 
     const sumaLista = lista.reduce(
         function ( valorAcumulado = 0, nuevoElemento ){
             return valorAcumulado + nuevoElemento
         }
     )
 
     let promedio = sumaLista / lista.length ;
     return promedio;
 }

/* const lista = [100,200,500,400000000] */

/* const mitadLista = parseInt(lista.length / 2); */


/* function esPar(numero) {
    if(numero % 2 === 0)
    return true;
    else {
        return false;
    }
}

let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedio = calcularMediaAritmetica([elemento1,elemento2])
    mediana = promedio;
} */

/* else {
    mediana = lista[mitadLista]; 
}  */   

/* Fue necesario colocar un parseInt en mitadLista para que nos devolviera un entero, y asi esta mediana funcionara */

/* % 2 === 0, aqui el porcentaje hace referencia al modulom y lo que decimos es que si el modulo o residuo de nuestras division es cero pasara lo que haya en el if */

/* RETO : encapsularlo en una funcion, y con el metodo sort hacer que nuestra lista quede ordenada */

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);

    function esPar(numero) {
        if(numero % 2 === 0)
        return true;
        else {
            return false;
        }
    }
    
    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedio = calcularMediaAritmetica([elemento1,elemento2])
        mediana = promedio;
    }
    else {
        mediana = lista[mitadLista]; 
    }
    return mediana;
}