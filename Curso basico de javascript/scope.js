/* Es el alcance que tienen las variables */

/* Hay 2 tipos de scope */

/* 1. Scope global: Son todas las variables  y funciones que tengamos, como la siguiente*/

var nombre = "Yefry";

/* 2. Scope Local: Son las variables que declaramos e inicalizamos dentrod de una funcion, como la siguiente */

function miFuncion() {
    var Apellido = "Rodelo";
    return nombre + " " + Apellido /* Las comillas con espacion las coloco para que el nombre y apellido tengan un espacio */
}

/* Las variables de mi scope Local tienen acceso a las variables de mi Scope global.  Pero las de mi Scope global no tienen acceso a las de mi Scope Local*/