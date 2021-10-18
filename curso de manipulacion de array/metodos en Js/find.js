// Find solamente retornara un objeto que compla con la condicional, y siempre va a atraer un solo elemento. Si hay varios que cumplen con la condicion, este me devuelve el primero que encuentre. Si no encuentra ninguno me devuelve un undefined.

const numbers = [1,30,49,29,10,13];

const rta = numbers.find(item => item === 30);
console.log(rta)

const products = [
    {
        name: "Pizza",
        price: 12,
        id: "Pizzita",
    },
    {
        name: "Burger",
        price: 23,
        id: "Hamburguesa",
    },
    {
        name: "Hot dog",
        price: 34,
        id: "Perro",
    },
    {
        name: "Hot cakes",
        price: 355,
        id: "Hot cakes"
    }
];

const rta2 = products.find(item => item.id === "Hamburguesa");
console.log(rta2)

// Con findIndex busca el elemento y si lo encuentra nos retorna la posicion. Si no lo encuentra nos devolvera un "-1"
const rta3 = products.findIndex(item => item.id === "Hamburguesa");
console.log(rta3)
