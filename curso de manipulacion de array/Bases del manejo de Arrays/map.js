//map es inmutable, este no modifica el array original, sino que cre uno nuevo. Con map podemos tener un array de unos datos y transformalos a otros datos, manteniendo la longitud o length

const letter = ["a", "b", "c"];

/* const newArray = [];
for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log("for", element);
    newArray.push(element, "++");
} */


const newArray = letter.map(item => item + "++");


console.log("original", letter);
console.log( "new", letter);

