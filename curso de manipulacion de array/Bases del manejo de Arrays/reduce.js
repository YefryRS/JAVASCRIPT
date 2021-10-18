// Este reduce un array, no deeberia formar un nuevo array. Es un array que finalmente lo reducimos a un solo valor, por ejemplo si deseamos calcular un resultado

const total = [1,2,3,4];

let sum = 0;

const rta = total.reduce((sum,element) => sum + element, 0)
console.log("rta",rta);