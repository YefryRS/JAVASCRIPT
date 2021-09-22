/* Lo recomendable es trabajar con clases a menos que la tarea sea extremadamente sencilla */


class Carro {
    constructor(marca1, tipo1, puertas) {
        this.marca = marca1; 
        this.tipo = tipo1;
        this.puertas = puertas;
        this.CreadoEn = "hoy";
        this.encendido = false;
        /* La primera hace referencia a la propiedad de la clase, y la segundalos argumentos de la funcion constructora */
    }

}

let carro = new Carro ("katana","koroko",5);
console.log(carro);

/* La funcion constructor me va a permitir crear cosas de forma automatica */
/* Para establecer una propiedad dentro de la clase usamos el this */


 /* METODOS DE CLASE */

 class Carro {
    constructor(marca1, tipo1, puertas) {
        this.marca = marca1; 
        this.tipo = tipo1;
        this.puertas = puertas;
        this.CreadoEn = "hoy";
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {
        if (this.encendido) {
            console.error ("El carro ya estaba encendido")
        } 
        else {
            this.encendido = true;
            console.log("El carro esta encendido")
        }

        return this;
    }

    realizarViaje(consumo) {
        if (this.encendido === true) {

            if (consumo > this.gasolina) {
                console.log("No puedo realizar el viaje: gasolina " + this.gasolina)
            } else {
              this.gasolina = this.gasolina - consumo;
              return "le queda " + this.gasolina;  
            }
        }
        else {
            console.error("Encienda el carro");
        }
    }

}

let carro = new Carro ("katana","koroko",5);
console.log(carro);


