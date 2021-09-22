/* Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar 
max, la función debe de determinar cual es el mayor de los 3 y retornarlo */


function max (a,b,c) {

    let numeros = [a,b,c];
    let mayor = 0;

    for(let i = 0; i < numeros.length; i++) {
    
        if (mayor <numeros[i]) {
            mayor = numeros[i];
        }
    }
    
    console.log(mayor);
}
max(6,5,2);






