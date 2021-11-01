/* 1. Crear objetos de mejor manera*/

let name = "Yefry";
let age = 19;

//antes de es6
let obj = {name: name, age: age};
console.log(obj);

//es6 
let obj2 = {name, age};
console.log(obj2);

/* 2. Arrow function o funciones flechas. Permiten una sintaxis mas reducidas o un this no vinculable */

const names = [
    {name:"Yefry",age: 19},
    {name:"Yesica",age: 28},
]

//antes de es6 si deseaba obtener los datos de dicho array
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// es6
let listOfNames2 = names.map(item => console.log(item.name));

// otra forma de hacerlo es
const listOfNames3 = (name,age,country) => {
    
}

//Si solamente tenemos un solo parametro, podemos hacerlo de la siguiente manera
const listOfNames3 = name => {
    
}

//Si solamente tenemos un solo parametro y ademas solo vamos a retornar una sola cosa podemos omitir las llaves.

const listOfNames3 = num => num * num;


 
/* 3. Promesas, con las que podemos trabajar el asincronismo */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("HEY")
        }
        else {
            reject("Ups")
        }
    })
}

helloPromise()
.then(Response => console.log(Response))
.catch(error => console.log(error));          