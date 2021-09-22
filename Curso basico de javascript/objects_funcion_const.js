/* para realizar una funcion constructora, iniciamos con una funcion */

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var AutoNuevo = new auto("Tesla", "Modelo 3", 2020);
var AutoNuevo2 = new auto("Tesla", "Modelo X", 2018);
var AutoNuevo3 = new auto("Toyota", "Corolla", 2020);


/* A continuacion hize el reto con ayuda de crear los autos con los loops */

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


var autos = [];
for(var i = 0; i < 5; i++) {
    var marca = prompt ("cual es tu marca");
    var modelo = prompt ("Cual es tu modelo");
    var annio = prompt ("cual es tu annio");
    autos.push(new auto(marca,modelo,annio) )
}