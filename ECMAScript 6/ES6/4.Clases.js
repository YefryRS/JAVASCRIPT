/* 1. Clases */

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

/* 2. Modulos */

// Para esto tenemos que hacer un export del archivo que deseamos exportar y hacer un import en el archivo que deseamos agregarlo

// ver el archivo de "module"
import {hello} from "./module"

hello();


/* 3.Generators o generadores */

function *helloWorld() {
    if(true) {
        yield "Hello";
    }
    if(true) {
        yield "World";
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);