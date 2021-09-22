/* Estos van a guardar cualquier tipo de valor, puede ser objeto, estring, numero y se guardan dentro de los corchetes */

/* Para crear un array lo hacemos de la siguiente forma */
var frutas = ["manzana", "platano", "cereza", "fresa"];
console.log(frutas);

/* Si yo no genere el array pero deseo saber cuantos elementos contiene usamos lo sigutiente */
console.log(frutas.length);

/* Ahora, si lo que yo deseo es imprimir a algun elemento en especifico lo hago de la sigueinte manera */
console.log(frutas[0]); /* Aqui solo me apareceria manzana, esto debido a que en programacion NO se inicia con un 1, sino con un 0. Esto tambien se conoce como el indice de los arrays*/

/* Con los arrays tenemos metodos o elementos, y podemos 1) mutar el elemento y 2) recorrer el elemento. Podemos mutarlas de las siguientes maneras: */

var masFrutas = frutas.push("uvas"); /* Aqui añadimos un elementos mas a la lista, y se coloca al final */
var ultimo = frutas.pop("uvas");/* este elimina el ultimo elemento de la lista */

var nuevaLongitud = frutas.unshift("uvas"); /* Aqui añadimos un elementos mas, pero en este caso se coloca al inicio */
var borrarFruta = frutas.shift("uvas"); /* Este borrara el primer elemento de la lista */

var posicion = frutas.indexOf("cereza"); /* Este nos ayuda a saber en que posicion esta algun elemento, nos sera de utilidad en caso de que sea un array con por ejemplos 100 elementos */