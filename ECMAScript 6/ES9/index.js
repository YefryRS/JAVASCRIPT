const obj = {
    name: "Oscar",
    age: 32, 
    country: "MX"
};

// Aqui extraemos el atributo que deseamos y lo demas queda encapsulado
let { name, ... all} = obj;
console.log(name,all)


//Las unidades de propagacion nos permiten unir varios objetos en uno solo

const obj2 = {
    name: "Oscar",
    age: 32, 
}
const obj3 = {
    ...obj2,
    country: "MX"
}

console.log(obj3);


//mas promesas
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? resolve ("Hello World")
        : reject (new Error ("Test Error"))
    });
}

helloWorld()
    .finally(() => console.log("Finalizo"))

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec("2018-04-20");
const year = match[1]
const month = match[2]
const day = match[3]