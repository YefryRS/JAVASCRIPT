// Este metodo es mutable
const months = ["March","Jan","Feb","Dec"];
months.sort();
console.log(months);

const numbers = [1,30,4,21,100000];
numbers.sort((a,b) => a - b);
console.log(numbers);

const words = ["spray", "limit", "elite", "exuberant"];
words.sort();
console.log(words);

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
orders.sort((a,b) => a.total - b.total);
console.log(orders);