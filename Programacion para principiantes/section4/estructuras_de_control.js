/* IF, ELSE Y ELSE IF */

let nota = 3.5;

if (nota >= 3.5) {
    console.log("Haz aprobado la materia");
}
else if (nota < 2) {
    console.log("por favor estudie mas");
}
else {
    console.log("Debes recuperar");
}

/* Ejercicio practico */

let nota = 100;
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


/* SWITCH */

let dia = 1;

switch (dia) {
    case 0:
        console.log("Hoy es domingos perros");
        break;
    case 1:
        console.log("Hoy es lunes perros");
        break;
    case 2:
        console.log("Hoy es martes perros");
        break;    
    case 3:
        console.log("Hoy es miercoles perros");
        break;
    default :
        console.log("Hoy no es nada");
}