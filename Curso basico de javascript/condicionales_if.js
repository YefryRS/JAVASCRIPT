/* Dentro del parentesis va nuestra condicion de si algo es verdad. Dentro de los corchetes va lo que va a suceder en caso de que la condicion sea verdad */
/* Si el if no es verdadero podemos ocupar la condicional de else, para indicar que es lo que va a pasar, en caso que que el if no se cumpla */
/* El else if nos permite seguir validando */

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, es tu primera vez")
}
else if (edad > 18) {
    console.log("puedes votar")
}
else {
    console.log ("No puedes votar")
}



/* Tambien tenemos algo llamado el operador ternario, que es la union de el "if" y el "else" en una misma linea de codigo. En el siguiente codigo el "?" hace referencia al "if" y el ":" hace referencia al "else" */

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un Uno" : "No soy un uno";



/* A continuacion hize el reto de piedra, papel o tijera. Use funciones y las condicionales */

function juego(elemento, pc) {

    if (elemento === "piedra" && pc === "tijera" ) {
        return "Haz ganado"
    }
    else if (elemento === "papel" && pc === "piedra" ) {
        return "Haz ganado"
    }
    else if (elemento === "tijera" && pc === "papel" ) {
        return "Haz ganado"
    }

    else if (elemento === "piedra" && pc === "piedra" ) {
        return "Empate"
    }
    else if (elemento === "tijera" && pc === "tijera" ) {
        return "Empate"
    }
    else if (elemento === "papel" && pc === "papel" ) {
        return "Empate"
    }

    else {
        return "perdistes"
    }
}

