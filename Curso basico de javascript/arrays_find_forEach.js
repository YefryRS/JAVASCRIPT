var articulos = [
    { nombre: "bici", costo: 3000 }, 
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500},
    { nombre: "audifonos", costo: 1700 },
];

/* El metodo find nos ayudara a encontrar los elementos que estamos buscando, y este valida con un true y false. En otras palabras si existe el articulo lo regresa, si no, no regresa nada*/

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

/* el metodo forEach no crea nuevos arrays, asi que por tanto no creo una nueva variable, sino que mando a llamar el array que ya tengo */

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

/* El ultimo metodo es el some, este tambien dara una validacion de verdadero o falso. El unico resultado que dara sera de true o false. Osea nos dira si existen o no articulos de los que estamos haciendo validacion */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});