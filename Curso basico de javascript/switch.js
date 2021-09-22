/* Este va a trabajar por casos, si el caso es verdad se ejecuta lo de la linea de codigo, sino se sigue al siguiente caso */

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy Uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");
} 
 

/* El siguiente es el reto */


function Ganador (user,pc) {
    switch (true) {
        case user === pc:
            console.log("empate");
            break;
        case user === "tijera" && pc === "papel":  
            console.log("ganastes");
            break;
        case user === "piedra" && pc === "tijera":
            console.log("ganastes");
            break;
        case user === "papel" && pc === "piedra":
            console.log("ganastes");
            break;
        default:
            console.log("Perdistes")
    }
    
} 
