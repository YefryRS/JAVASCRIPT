/*  Tareas, procedimientos o un conjunto de sentencias que usamos para generar ciertas acciones con los valores ya guardados en las variables*/


 /* Existen 2 tipos de funciones */

 /* 1.Declarativas, se llaman asi debido a qie justamente estamos usando la palabra function para mandar a llamar la funcion.

  se generan de la siguiente manera */
function miFuncion() {
    return 3;
}
miFuncion(); 

 /* 2.Expresion, tambien se conocen como anonimas, ya que a la funcion como tal no le colocamos un nombre, el nombre se lo colocamos es a la variables no a la funcion.
 
 se generan con variables */
 var miFuncion = function (a,b) {
     return a + b;
 }  
miFuncion();

/* Cuando necesitemos usar nuestra funcion debemos de llamarla y para ello la llamamos con el nombre de la funcion con los parentesis (si tienes parametros los metes, pero los valores) */

/* Una manera de concatenar sin usar el signo "+" es de la siguiente forma: */

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`)
} 

/* Con el return tambien podemos obtener resultados de una funcion  */

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
} 