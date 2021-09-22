function imprimirTabla (base, limite) {
    for( let i = 0; i <= limite; i++) {

        let resultado = base * i;
        console.log(base + " x " + i +" = " +resultado );
    }
}
imprimirTabla(10,4);
imprimirTabla(2,10);


/* Ejercicio: Crear una funcion que me permita determinar la calificacion de 3 alumnos. uno con nota de 100, otro con nota de 80, y el ultimo con nota de 59 */

function calificacionNota(nota) {
    let notaLetra;

    if (nota >= 90 ) {
        notaLetra = "A";
    }
    else if (nota >= 80 ) {
        notaLetra = "B";
    }
    else if (nota >= 70 ) {
        notaLetra = "C";
    }
    else if (nota >= 60 ) {
        notaLetra = "D";
    }
    else {
        notaLetra = "F";
    }
    console.log (nota + " es igual a " + notaLetra)
}

calificacionNota(100);
calificacionNota(80);
calificacionNota(59);

