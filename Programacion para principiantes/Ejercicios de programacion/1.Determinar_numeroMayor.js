/* Realizar un programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales */

function DeterminarNumeroMayor (a,b) {

    if (a === 0) {
        console.error("No es valido el numero cero");
    }
    else if (b === 0) {
        console.error("No es valido el numero cero");
    }
    else if (a > b) {
        console.log(a + " es el mayor y " + b + " es el menor");
    }
    else if (a === b) {
        console.log("Son exactamente iguales")
    }
    else  {
        console.log(b + " es el mayor y " + a + " es el menor");
    }
}
