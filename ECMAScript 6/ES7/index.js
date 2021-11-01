// podemos usar "include" para saber si un valor si se encuentra en un array

let numbers = [1,2,3,7,8];

if(numbers.includes(0)) {
    console.log("Si se encuentra el valor 8");
}
else {
    console.log("No se encuentra");
}

// Con doble * (**) podemos realizar una potenciacion
let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(result)