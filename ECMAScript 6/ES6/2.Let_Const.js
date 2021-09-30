/* 1.Multilinea en los Stringsn o saltos de kineas */

//antes de es6
let lorem = "Hello world \n" + "Chupa el perro";
console.log(lorem);

//es6
let lorem2 = `Hello world 
Esta es otra linea, Chupa el perro`;
console.log(lorem2);

/* 2. Desestructuracion de elementos */

// antes de es6
let person = {
    name : "oscar",
    age : 32,
    country : "Colombia"
}
console.log(person.name, person.age, person.country);

//es6
let { name, age, country} = person;
console.log (name,age,country,);

/* 3.Operador de propagacion, para unir variables */

// es6
let team1 = ["OScar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

/* 4. let y Const */

{
    var hola = "hola";
}

{
    let hello = "hello";
} // con let nuestras variables lograran tener un scope local, es una mejor manera de generar variables

console.log(hola);
console.log(hello);

const a = "b";
a = "a"; // las constantes tendran un valor que sera constante y no puede cambiar

console.log (a)
