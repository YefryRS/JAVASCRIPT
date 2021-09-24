/* La palabra reservada debugger nos permitira pausar nuestro codigo antes de que termine de ejecutarse */

var a = "Hello";

function hello() {
    let b = "Hello World";
    const c = "Hello World!"
    if(true) {
        let d = "Hello World!!"
        debugger
    }
}

hello();