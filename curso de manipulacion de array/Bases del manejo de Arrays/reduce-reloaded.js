// A continuacion queremos que el reduce nos indique cuantas veces se repite un mismo numero
const items = [1,2,3,3];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] += 1;
    }
    return obj;
}, {});

console.log(rta);