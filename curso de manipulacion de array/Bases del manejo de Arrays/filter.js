//Filter ayuda a flitrar los elementos de un array en base a una condicion, al igual que map es inmutable

const words = ["spray", "limit", "elite", "exuberant"];
const newArray = [];


const rta = words.filter(item => item.length >= 6)
console.log("rta",rta);
console.log("original", words);

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

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log("rta3",rta3);

const search = (query) =>{
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log(search("Nico"));