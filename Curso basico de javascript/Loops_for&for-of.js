/* Un loop es un ciclo, el cual va a hacer que una tarea se repita, sin necesidad de hacerlo manualmente */

/* En el siguiente ejemplo cada vez que un estudiante entre a la clase quiero que reciba un saludo */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

/* Este es el primer loop, el for su estructura es parecida a la de una funcion, en los parentesis se pasa un parametro, y si se cumple lo del parametro se lleva a cabo lo que esta entre las llaves */

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}  /* Aqui estamos diciendo que "i" inicialmente vale "0" y mientras su valor sea menor a la longitud de la variables estudiantes pasara lo que hay en la siguiente linea de codigo, y ademas con el "i++" incrementara su valor por 1, o sea 1ro vale "0", luego "1", luego "2", etc. */


/* Otra manera es de la siguiente forma, aqui la variable es el singular del grupo del array */

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}  /* Aqui estamos diciendo que tenemos una variable de estudiantes, y vamos a mandar a llamar cada estudiante 1 por 1 */

var pregunta = 4;

while(pregunta == 4) {
    console.log("lo has hecho bien")
}

/* Array */
var numeros = [2,5,6,0,8,1];
var edad = [12,29,90];
var mayorEdad = [true, false];


function nombramelo () {
    for(var unidad of edad) {
        console.log("este es el numero" + unidad);
    }
}

/* objeto */

let miAuto = {
    marca: "Toyota",
    modelo:"Corolla",
    Año: 2020,
}; 

// function showObjectKeys (newObject = {}) {
//     for (const key in newObject) {
//         console.log(`${key}: ${newObject[key]}`)
//     }
// }

const showObjectKeys = (newObject = {}) => {
    for (const key in newObject) {
        console.log(`${key}: ${newObject[key]}`)
    }
} 

