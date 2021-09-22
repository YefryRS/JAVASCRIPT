/* Crear una función que reciba como argumento un arreglo, la función debe de retornar el 
nombre que tenga más letras del arreglo */

function masLargo (heroe) {
    let heroes = heroe;
    let heroeLargo = "";

    for(let i = 0; i < heroes.length; i++) {
    
        if(heroeLargo.length < heroes[i].length) {
            heroeLargo = heroes[i]   
        }
    }
    console.log(heroeLargo);
}


masLargo (["Profesor Charles Xavier", "Deadpool", "Ciclope", "Magneto",]);