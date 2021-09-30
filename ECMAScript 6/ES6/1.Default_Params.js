/* PARAMETROS POR DEFECTO Y CONCATENACION */

/* 1. Asignar valores por defecto para los parametros */

//Antes de Es6
function newFunction(name,age,country) {
    var name = name || "Yefry";
    var age = age || 19;
    var country = country || "Colombia";
    console.log(name,age,country);
}

//es6
function newFunction2(name = "Yefry", age = 19 , country = "Colombia") {
    console.log(name,age,country);
}

newFunction2(); // Este asignara los valores por defecto ya que no asignamos valores
newFunction2("Yesid", 23, "Colombia") //este asignara estos valores


/* 2. Concatenacion  */

let hello = "Hello";
let world = "World";

//antes de es6
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);