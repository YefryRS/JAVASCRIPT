// Este nos sirve para unificar todo nuestro array, mediante una coma, punto y coma, guion, etc.

const elements = ["Fire","Air","Water"];


const rta = elements.join("--");
console.log(rta);


const title = "Curso de manipulacion de arrays";

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log (urlFinal);