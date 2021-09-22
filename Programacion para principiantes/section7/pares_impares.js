/* Determinar que numeros son pares y que numeros son impares */

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for (let i = 0; i < numeros.length; i++) {

    if(numeros[i] % 2 === 0) {
        console.log ("el numero " + numeros[i] + " es un numero par");
    }
    else {
        console.log ("El numero " + numeros[i] +  " es un numero impar");
    }
}

/* todo numero que se divida y su residuo es 0 es par, y los que no son impares, para esto usaremos el signo de "%", que representa la division */
