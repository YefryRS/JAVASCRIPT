const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    }
];

// Uno de los usos de map es crear un nuevo array solamente con las propiedades que yo desee trabajar
console.log("original", orders);
const rta = orders.map(item => item.total);
console.log("rta", rta);

// aqui deseamos agregar un nuevo atributo a nuestro objeto. Ahora, como estamos modificando un objeto que se encuentra en memoria, esto nos modificara nuestro array, a pesar que map es inmutable. Esto solo pasa con los objetos

/* const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
}); */


const rta3 = orders.map(item => {
    return {
        ...item, // con los 3 puntos clonamos los atributos del objeto en un nuevo objeto, sin modificarlo en memoria
        tax: .19
    }
});

/* console.log("rta2", rta2);
console.log("original", orders); */

console.log("rta3", rta3);
console.log("original", orders);

