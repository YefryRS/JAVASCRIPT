/* Determinar cual es el numero mayor */

let numeros = [1, 6, 8, 40, 2, 7, 100, 3, 5 ];
let numeroMayor = 0;

for (let i = 0; i <= numeros.length; i++) {
    
    if(numeros[i] >= numeroMayor) {
        numeroMayor = numeros[i];
    }

}

console.log("EL numero mayor es " + numeroMayor);