/* Los ciclos nos permiten ejecutar las mismas lineas de codigo una y otra vez de forma consecutiva */

/* El while es bastante util cuando no sabemos el numero exacto que necesitamos que se ejecute */
/* El for es muy util cuando sabemos la cantidad de veces exacta que necesitamos ejecutar el codigo */

/* ejercicio con while: Terminar cuando la gasolina se haya acabado */

let gasolina = 3;

while (gasolina > 0) {
    /* gasolina = gasolina - 1; */
    gasolina--;
    console.log("gasolina restante " + gasolina)
}

console.log("Ya no tiene gasolina")

/* Ejercicio con for: Realizar tabla de multiplicar */

let base = 10;
let limite = 20;

for( let i = 0; i <= limite; i++) {

    let resultado = base * i;
    console.log("10 x " + i +" = " +resultado );
}

