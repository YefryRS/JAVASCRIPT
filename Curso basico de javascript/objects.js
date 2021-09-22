/* Los objetos pueden equipararse a objetos reales, los cuales tienen propiedades en especifico, pero que podrian variar. Por ejemplo, un carro tiene las propiedades de "marca", "modelo", "año", y lo que cambiaria seria el tipo de marca, modelo y año */

var miAuto = {
    marca: "Toyota",
    modelo:"Corolla",
    Año: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.Annio}`)
    }
}; /* Asi puedo escribir un objeto en JS */

/* El this es una variable que hace referencia a mi objeto */

/* Para ver mi objeto "auto" escribo el nombre del objeto */
miAuto

/* Si deseo acceder a un elemento especifico seria de la siguiente manera */
miAuto.marca /* Coloco un punto y pongo el nombre del valor que deseo */

miAuto.detalleDelAuto(); 

/* las propiedades que se colocan como funciones se les conoce como metodos de objetos */