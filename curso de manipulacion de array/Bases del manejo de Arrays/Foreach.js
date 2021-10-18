//For eeach nos sirve para poder recorrer un array

const letter = ["a", "b", "c"];

for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log("for",element);
}

letter.forEach(element => console.log("forEach",element))