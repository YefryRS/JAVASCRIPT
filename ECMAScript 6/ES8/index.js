// Entries nos convertira los datos en un array

const data = {
    fronted: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

// Con "length" podemos saber cuantos elementos existen en este array
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


// Con values solo obtendremos los valores de nuestros objetos
const data2 = {
    fronted: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);


const string = "Hello";
console.log(string.padStart(7,"hi"));
console.log(string.padEnd(12," ---- "));