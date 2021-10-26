/* Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces. */

/* Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces. */

let saludo = "hola";

for (let i = 0; i < 10; i++) {
    let saludo2 = [];
    saludo2.push(saludo)
    console.log(saludo2)
}

/* Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad). */

let edad = 19;

for (let i = 1; i <= edad; i++) {
    console.log(`Tu tienes ${i} años`);
}

/* Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número separados por comas. */

let numero = 30;
let numerosArray = []

for (let i = 1; i < numero; i++) {
    //Console.log(i); y despues de esto realizaba el i2
    let i2 = i++;
    numerosArray.push(i2);
}

console.log(numerosArray);

/* Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla la cuenta atrás desde ese número hasta cero separados por comas. */

let numero = 5;
let numerosArray = []

for (let i = numero; i >= 0; i--) {
    numerosArray.push(i)
}

console.log(numerosArray);

/* Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión. */

let cantidadInvertir = 1000;
let interesAnual = 10;
let cantidadAños = 5;
let retornoInversion = 1000 * .10;
console.log(retornoInversion) 

for (let i = 1; i <= cantidadAños; i++) {
    let suma = cantidadInvertir + retornoInversion;
    let newCantidad = suma + retornoInversion;
    console.log(newCantidad)
}

//terminarlo
