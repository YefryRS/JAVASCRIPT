/* Ejercicios de Cadenas

Ejercicio 1
Escribir un programa que pregunte el nombre del usuario en la consola y un número entero e imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número introducido. */


class nombreUsuario {
    constructor({
        usuario,
        repeatUsuario,
        usuarioCompleto = [],
    }){
        this.usuario = usuario;
        this.repeatUsuario = repeatUsuario;
        this._usuarioCompleto = usuarioCompleto
    }
    get usuarioCompleto() {
        return this._usuarioCompleto;
    }
    set usuarioCompleto(newUser) {
        this._usuarioCompleto = newUser;
    }

    RepeatUser() {
        while(this.repeatUsuario > 0) {
            this.usuarioCompleto.push(this.usuario)
            this.repeatUsuario --;
        }
        console.log(this.usuarioCompleto);
    }
}

let Yefry = new nombreUsuario({
    usuario: "Yefry",
    repeatUsuario: 3,
})
Yefry.RepeatUser();



/* Ejercicio 2
Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.
 */


function user(nombreUsuario) {
    let nombre = nombreUsuario;
    nombre = nombre.toUpperCase();
    let nameUser = [];
    nameUser.push(nombre);
    nombre = nombre.toLocaleLowerCase();
    nameUser.push(nombre);
    console.log(nameUser);
}


let cadena = "Pontraseña";
let cadena2 = "Contraseña";

if (cadena2 == cadena) {
    console.log("introdujiste la misma contraseña")
}
else {
    console.log("Te equivocastes perro")
}



/* Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por pantalla la frase invertida. */

let nombre = "yefry";

let newNombre = nombre.split("").reverse().join("")
console.log (newNombre);

/* Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, donde <NOMBRE> es el nombre de usuario en mayúsculas y <n> es el número de letras que tienen el nombre. */

function nameUsuario(nombre) {
    let letrasName = nombre.length;
    console.log (`el numero de letras es de ${letrasName}`);
}
nameUsuario("Yefry");

/* Ejercicios de condicionales */

/* Escribir un programa que almacene la cadena de caracteres "contraseña" en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas. */

let contraseña = "Contraseña";

let contraseña2 = "contraSeñA";

if (contraseña2.toLowerCase() == contraseña.toLowerCase()) {
    console.log(`${contraseña2} es igual a ${contraseña}`)
}
else {
    console.warn("introduzca la contraseña corrrecta")
}


/* Escribir un programa que pida al usuario dos números y muestre por pantalla su división. Si el divisor es cero el programa debe mostrar un error. */

let numero1 = 91;
let numero2 = 2;

let division = numero1 % numero2;
console.log(division)

if (division === 0){
    console.error ("No se permite este tipo de divisiones")
}
else {
    console.log("Bien hecho")
}

/* Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar. */

let numero = prompt("Dame un numero y te dire si es par o no");

if (numero % 2 === 0) {
    console.log(`${numero} es un numero par`);
}
else {
    console.log(`${numero} es un numero impar`);
}

/* Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no. */

let edad = prompt("cual es tu edad");
let ingresos = prompt("cuantos son tus ingresos mensuales");

if (edad >= 16 && ingresos >= 1000) {
    console.log("tienes que pagar impuestos")
}
else {
    console.log("Aun no debes pagar impuestos")
}

/* Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:

Renta	                  Tipo impositivo
Menos de 10000€	          5%
Entre 10000€ y 20000€	  15%
Entre 20000€ y 35000€	  20%
Entre 35000€ y 60000€	  30%
Más de 60000€	          45%

Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo impositivo que le corresponde. */

let renta = 35000

if (renta < 10000) {
    let impositivo = 5;
    console.log("le corresponde pagar el valor impositivo del " + impositivo +"%")
}
else if (renta >= 10000) {
    let impositivo = 15;
    console.log("le corresponde pagar el valor impositivo del " + impositivo +"%")
}
if (renta > 20000) {
    let impositivo = 20;
    console.log("le corresponde pagar el valor impositivo del " + impositivo +"%")
}
if (renta >= 35000) {
    let impositivo = 30;
    console.log("le corresponde pagar el valor impositivo del " + impositivo +"%")
}

/* En una determinada empresa, sus empleados son evaluados al final de cada año. Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando, traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas. A continuación se muestra una tabla con los niveles correspondientes a cada puntuación. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la puntuación del nivel. */

let user = "yefry";
let nivel = 0.8;
let dinero = 2400;
let dineroTotal = (dinero * nivel) + dinero;

switch(nivel) {
    case 0.0:
        console.log (`tu puntuacion a sido de ${nivel} y por tanto has tenido un rendimiento inaceptable`);
        console.log(`la cantidad de dinero sera de ${dinero}`);
        break;
    case 0.4:
        console.log (`tu puntuacion a sido de ${nivel} y por tanto has tenido un rendimiento aceptable`);
        console.log(`la cantidad de dinero sera de ${dineroTotal}`);
        break;
    case 0.6:
        console.log (`tu puntuacion a sido de ${nivel} y por tanto has tenido un rendimiento meritorio`);
        console.log(`la cantidad de dinero sera de ${dineroTotal}`);
        break;
    case 0.8:
        console.log (`tu puntuacion a sido de ${nivel} y por tanto has tenido unrendimiento meritorio`);
        console.log(`la cantidad de dinero sera de ${dineroTotal}`);
        break;
    case 0.10:
        console.log (`tu puntuacion a sido de ${nivel} y por tanto has tenido urendimiento meritorio`);
        console.log(`la cantidad de dinero sera de ${dineroTotal}`);
        break;
    default:
        console.log(" Que carajos hace usted aca")
}

/* Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€. */

let edadCliente = 2;

if(edadCliente < 4) {
    console.log("Usted puede ingresar gratis");
}
else if(edadCliente <= 18 ) {
    console.log("Usted de pagar 5$");
}
else {
    console.log("Usted de pagar 10$");
}
