var jugador;
var computador;

function Jugador_ganaste () {
    console.log("Jugador ganastes")
}
    if (jugador=="piedra" && computador=="tijera") {
        Jugador_ganaste();
    }
    else if(jugador=="papel" && computador=="piedra") {
        Jugador_ganaste();
    }
    else if (jugador=="tijera" && computador==="papel") {
        Jugador_ganaste();
    }
    else if (jugador == computador) {
        console.log("empate")
    }
    else {
        console.log("perdiste")
    }