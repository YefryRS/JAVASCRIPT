function describirPersona(p) {
    console.log(`${p.nombre} tiene una edad de ${p.edad} anios y mide ${p.estatura}`); /* Aqui mandamos a llamar las propiedades con el "." seguido del nombre de la propiedad */
}

let persona = {
    nombre: "Melisa",
    edad : 28,
    estatura: 1.75,
}


describirPersona(persona);

/* ARREGLOS (ARRAYS) DE OBJETOS: Podemos llamar objetos dentro de los arrays */

let persona1 = {
    nombre: "Yefry",
    edad : 19,
}
let persona2 = {
    nombre: "Melissa",
    edad : 21,
}
let persona3 = {
    nombre: "Paula",
    edad : 25,
}

let personas = [persona1,persona2,persona3];


for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    console.log(`${persona.nombre} -- ${persona.edad}`)
}
