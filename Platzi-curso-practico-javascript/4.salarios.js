/* Decidi usar el metodo push con el fin de agregar objetos de forma mas ordenada */

function esPar(numero) {
    return (numero % 2 === 0);   
}

const Colombia = [];

Colombia.push({
    nombre: "yefry",
    Salario: 1000
}); 
Colombia.push({
    nombre: "Manuela",
    Salario: 1100
}); 
Colombia.push({
    nombre: "Jenny",
    Salario: 1500
}); 
Colombia.push({
    nombre: "Rolando",
    Salario: 900
}); 
Colombia.push({
    nombre: "Victor",
    Salario: 9000
}); 
Colombia.push({
    nombre: "jashdnajk",
    Salario: 1400
}); 
Colombia.push({
    nombre: "Luisa",
    Salario: 7000
}); 
Colombia.push({
    nombre: "Camila",
    Salario: 1400
}); 
Colombia.push({
    nombre: "natalia",
    Salario: 1000
}); 
Colombia.push({
    nombre: "Patricia",
    Salario: 800
}); 
Colombia.push({
    nombre: "Uber",
    Salario: 800
}); 
Colombia.push({
    nombre: "Geral",
    Salario: 1900
}); 
Colombia.push({
    nombre: "Paula",
    Salario: 1000
}); 
Colombia.push({
    nombre: "Juli",
    Salario: 500
}); 
Colombia.push({
    nombre: "Alberto",
    Salario: 10000
}); 
Colombia.push({
    nombre: "Amparo",
    Salario: 300
}); 
Colombia.push({
    nombre: "Carolina",
    Salario: 1400
}); 
Colombia.push({
    nombre: "Paulette",
    Salario: 8700
}); 
Colombia.push({
    nombre: "Farid",
    Salario: 11000
}); 
Colombia.push({
    nombre: "Angie",
    Salario: 2000
}); 

/* Aqui creeamos esta variable para mapear los objetos y que solo nos retornara el salario */
const salariosCol = Colombia.map (
    function (persona) {
        return persona.Salario;
    }
)

/* Ahora ordenamos nuestros elementos para calcular la mediana */
const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

/* Para calcular la mediana dependera si es par o no */



function calcularMediaAritmetica(lista) {
 
    const sumaLista = lista.reduce(
        function ( valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento
        }
    )

    let promedio = sumaLista / lista.length ;
    return promedio;
}

/* Aqui calcularemos la mediana */
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad -1 ];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log (medianaGeneralCol)

/* Vamos a analizar al top 10% */


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});