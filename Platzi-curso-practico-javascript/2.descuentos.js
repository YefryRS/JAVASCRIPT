/* EL primer paso sera crear variables fijas para confirmar que estas funciones */

/* const precioOriginal = 120;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento ) / 100;

console.log ({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});  */

/* Aqui creamos un objeto para poder varias variables a la vez */



/* El segundo paso sera crear nuestra funcion */

function calcularDescuento (precioOriginal, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento ) / 100;
    return precioConDescuento;
}


/* El tercer paso sera conectarlo a nuestro HTML para que los usuarios lo hagan desde alla */

function onClickButtonPriceDiscount() {
    const InputPrice =  document.getElementById("InputPrice");
    const priceValue = Number (InputPrice.value);
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = Number (inputDiscount.value);
    const calcularDescuentoTotal = calcularDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son " + calcularDescuentoTotal; /* De esta manera logramos sacar un mensaje que no sea un alert */
}

/* RETO: ME costo un monton hacerlo pero lo consegui */

/* Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

 */


/* Pasos
   - Crear cupones
   - crearemos variables para almacenar nuestros cupones
   - dichas variables seran llamadas en un if
   - encapsularemos este codigo en una funcion
   - conectaremos en nuestro html
    */

/* const cupones = "deportivos"; */    
/* const precio =  100 */

function cuponesDescuentos (cupones,precio) {
  switch (cupones) {
    case "camisas":
      let descuentoC = 15;
      var descuentoCupones = calcularDescuento(precio, descuentoC)
      return descuentoCupones;
    break;
    case "pantalones":
      let descuentoP = 10;
      var descuentoCupones = calcularDescuento(precio, descuentoP)
      return descuentoCupones;
    break;
    case "zapatos":
      let descuentoZ = 20;
      var descuentoCupones = calcularDescuento(precio, descuentoZ)
      return descuentoCupones;
    break;
    case "chaquetas":
      let descuentoChaq = 5;
      var descuentoCupones = calcularDescuento(precio, descuentoChaq)
      return descuentoCupones;
    break;
    case "deportivos":
      let descuentoD = 30;
      var descuentoCupones = calcularDescuento(precio, descuentoD)
      return descuentoCupones;
    break;
    default:
      return precio;
  }
}

function onClickButtonPriceDiscount() {
  const InputPrice =  document.getElementById("InputPrice");
  const priceValue = Number (InputPrice.value);
  const Inputcupones = document.getElementById("Inputcupones");
  const cuponesValue =  Inputcupones.value;
  const calcularDescuentoTotal = cuponesDescuentos(cuponesValue, priceValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "Tu prenda te queda a " + calcularDescuentoTotal;
}