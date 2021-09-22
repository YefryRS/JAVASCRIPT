var articulos = [
    { nombre: "bici", costo: 3000 }, 
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500},
    { nombre: "audifonos", costo: 1700 },
];
/* El primer metodo para recorrer mi array se va a llamar filtrer, y me servira para filtrar ciertas cosas. Este validara si algo es cierto o falso, y lo incluira en un nuevo array*/

var articulosFiltrado = articulos.filter(function(articulo){
    return articulo.costo <= 500
}); /* Este me agrega nuevos articulos que cumplieron dicha validacion. Me crea un nuevo array, pero no me afecta el array principal */

/* El segundo metodo es el de map */
var nombreArticulos = articulos.map (function(articulo) {
    return articulo.nombre
});

