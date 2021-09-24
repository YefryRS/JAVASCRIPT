/* Lo mejor es usar la palabra let y no var para no crear un closure involuntario */
function anotheFunction() {
    for(let i = 0; i < 10; i++ ) {
        setTimeout( () => {
            console.log(i);
        },1000)
    }
}

anotheFunction();