//flat, muestra la profundidad 
let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat());

//
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value *2]));


//texto sin espacio
let hello = "                  hello";
console.log(hello);
console.log(hello.trimStart());


let hello2 = "hello    ";
console.log(hello2);
console.log(hello2.trimEnd());

// conversion de array a object
let entries = [["name", "Oscar"],["age",32]];
console.log(Object.fromEntries(entries))

//
let mySimbl = "My symbol";
let symbol = Symbol(mySimbl);
console.log(symbol.description);