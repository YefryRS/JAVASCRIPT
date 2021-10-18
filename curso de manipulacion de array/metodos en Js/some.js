// este indica si algun elemento cumple la condicion. Este retorna un true o false

const numbers = [1,2,3,4];

const rta = numbers.some(item => item %2 === 0);
console.log(rta);





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

const rta2 = orders.some(item => item.delivered);
console.log(rta2);
