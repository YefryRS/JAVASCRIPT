/* PASO 1: Realizar los perimetros y areas con variables fijas, para poder asegurarnos de que funcionen. */

/* Codigo del cuadrado */

console.group("Cuadrados"); /* Con este agrupamos un grupo de console.log */

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + "cm^2"); */

console.groupEnd(); /* Con este le indicamos hasta donde debe agruparlos */


/* Codigo del triangulo */

console.group("Triangulos")

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBase = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados de mi triangulo miden " + ladoTriangulo1 + "cm, " +
     ladoTriangulo2 + "cm, y " + 
     ladoBase + "cm"
    );
console.log("La altura de mi triangulo es de " + alturaTriangulo + "cm")    

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (ladoBase * alturaTriangulo) / 2;
console.log("El area del cuadrado es " + areaTriangulo + "cm^2"); */

console.groupEnd();


/* Codigo del circulo */

console.group("Circulos");

/* const radiocirculo = 4;
const diametroCirculo = radiocirculo * 2;
const pi = Math.PI ;

const circunferenciaCirculo = diametroCirculo * pi;
console.log("la circunferencia de tu circulo es de " + circunferenciaCirculo + "cm");

const areaCirculo = (radiocirculo * radiocirculo) * pi;
console.log("el area de tu circulo es de " + areaCirculo + "cm^2") */

console.groupEnd();



/* PASO 2: Realizamos funciones para encapsular nuestro codigo y de esta manera que las variables no sea fijas */

/* Cuadrado */

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

/* Triangulo */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

/* Circulo */

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} /*  En este caso mandamos a llamar una funcion dentro de otra funcion, y para ello tuvimos que generar una variable */

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

/* PASO 3: Conectaremos nuestra JS con HTML, pero en este caso es para que nuestros usuarios puedan interactuar desde la pagina y no tengan que ingresar a la consola */

/* A continuacion interactuaremos con HTML, teniendo en cuenta las funciones que creamos alla */


function calcularPerimetroCuadrado() {
   const input = document.getElementById("cuadrado"); 
   const value = input.value;
   const perimetro = perimetroCuadrado(value); 
   alert(perimetro);
} /*  Aqui necesitamos tener el valor que los usuarios escriban en nuestro input */ 
/* con "document.getElementById(id de lo que queremos llamar)" leemos desde javascript a html, y permitirnos trarenos el valor */
/* con "value" logramos traer solo el valor */

function calcularAreaCuadrado() {
    const input = document.getElementById("cuadrado"); 
   const value = input.value;
   const area = areaCuadrado(value); 
   alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("triangulo");
    const value1 = Number (input1.value);
    const input2 = document.getElementById("triangulo2");
    const value2 = Number (input2.value);
    const input3 = document.getElementById("base");
    const value3 = Number (input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);               
}

function calcularAreaTriangulo() {
    const input = document.getElementById("base");
    const value = Number (input.value);
    const input2 = document.getElementById("altura");
    const value1 = Number (input2.value);
    const area = areaTriangulo(value, value1);
    alert(area);               
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("circulo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert (perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("circulo");
    const value = input.value;
    const area = areaCirculo(value);
    alert (area);
}




/*RETO */

/* En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo. */


/* Pasos */

/* - hallaremos la formula para poder hacer el procedimiento
   - pasaremos esa formula a variables fijas
   - realizaremos unas funciones con estas variables
   - y los conectaremos con nuestro html para que los usuarios lo hagan directamente*/

/* let lado1 = 10;   
let lado2 = 10;
let base = 4;
 */

function calcularAlturaIsosceles (lado1,lado2,base) {

    if (lado1 === lado2 ) {
        const cateto2 = base / 2;
        const hipotenusaAlCuadrado = lado1 * lado2;
        const cateto2AlCuadrado = cateto2 * cateto2;

        const cateto1 = hipotenusaAlCuadrado - cateto2AlCuadrado
         const altura = Math.sqrt(cateto1);

         return altura;
    }
    else {
        return "este no es un triangulo Isosceles";
    }
}

function CalculaAlturaTrianguloIsosceles() {
    const input = document.getElementById("isosceles1");
    const value1 = Number (input.value);
    const input2 = document.getElementById("isosceles2");
    const value2 = Number (input2.value);
    const input3 = document.getElementById("baseisosceles");
    const value3 = Number (input3.value);
    const altura = calcularAlturaIsosceles(value1, value2, value3);
    alert (altura);
}




Math.sqrt(96) /* Con esto hacemos la raiz cuadrada */
