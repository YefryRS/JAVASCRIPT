/* El hoisting es cuando las variables y las funciones se procesan antes de cualquier otra lines de codigo, PERO unicamente con las declaraciones, las inicializaciones quedaran donde se encuentren. Actualmente solo pasa con versiones viejas de JS. Con versiones de Emascript 6 en adelante se evita con las palabras reservadas "let" y "const" */

console.log(miNombre);

var miNombre = "Yefry";

/* En este caso al darle console.log saldra "undefined", esto debido a que la declaracion de la variable se eleva pero sin su inicializacion. O sea que js veria dicha variable de la siguiente forma */

var miNombre = undefined;

console.log(miNombre); /* esta tomara como referencia a la primer variab;e */

var miNombre = "Yefry"; 

/* Con las funciones pasa distinto, estas si se ejecutaran por completo, y si tienen una variable se ejecutaran siempre y cuando estas se hayan declarado e inicializado antes de llamar la funcion */

hey();

function hey() {
    console.log("Hola " + miNombre);
}

var miNombre = "Diego"

/* Por buenas practicas tanto las funciones como las variables deben de declararse al inicio del codigo */