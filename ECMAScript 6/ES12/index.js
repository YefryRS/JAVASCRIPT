// con replaceAll cambiamos todas las palabras por una nueva

const string = "Javascript al carajo, Javascript es un crack";

const replacedString = string.replace("Javascript", "Python");
console.log(replacedString)

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2)


//metodos privados

class Message {
    show(val) {
        console.log(val);
    };
}

const mensaje = new Message();
mensaje.show("Hola")

// Promise any

const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(Response => console.log(Response));  