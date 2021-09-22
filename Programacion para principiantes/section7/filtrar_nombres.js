/* Crear una función que reciba un arreglo como argumento, la función debe de retornar OTRO 
arreglo pero filtrando todos los nombres que empiezan con una determinada letra. */



function filtrarPorLetra (heroe,letra) {
    let nuevoHeroe = [];

    let heroes = heroe;

    let heroesCon = letra;

    for (let i = 0; i < heroes.length;i++) {

        let heroes2 = heroes[i];

        if (heroes2[0] === heroesCon) {
            nuevoHeroe.push(heroes2);
        }
    }
    return nuevoHeroe;
}

filtrarPorLetra(["Doom", "Dr. Strange", "Hulk", "She Hulk", "Spiderman", "Captain Marvel"], "S")