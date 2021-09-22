/* Decidi dejarlo hasta aca temporalmente con el fin de practicar por mi cuenta, y luego si retomar */

const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }
        else {
            lista1Count[elemento] = 1;
        }
        lista1Count[elemento] = 1;
    }
);
