/* Crearemos una funcion con unos metodos internos para obtener informacion de una variable o asignarle un valor, pero nunca lo podremos hacer desde afuera. */

function person() {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Oscar");

console.log(newPerson.getName());