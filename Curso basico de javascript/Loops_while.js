

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

/* Mientras lo que este en el while sea verdad se va a llevar a cabo la validacion */

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); /* Cada vez que se cumpla va a sacar un elemento de nuestro array */
    saludarEstudiantes(estudiante);
}
