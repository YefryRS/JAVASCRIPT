/* Crearemos un nuevo closure, para asignar valores y reasignar nuevos elementos a partir de estos mismos */
function builCount(i) {
    let count = i;
    function displayCount() {
        console.log(count++);
    }
    return displayCount;
}

const myCount = builCount(1);
myCount();
myCount();
myCount();


const myOtherCount = builCount(10);
myOtherCount();
myOtherCount();