// cuando tenemos arrays dentro de un array, flat los unifica en una sola linea

const matriz = [
    [1,2,3,[2,3]],
    [4,5,6],
    [7,8,9]
];

// Con flat podemos especificar hasta que nivel de arrays deseamos que baje, en el caso de que solo sea 1 array dentro de otro, no necesitaremos especificarlo
const rta = matriz.flat(3);
console.log(rta);