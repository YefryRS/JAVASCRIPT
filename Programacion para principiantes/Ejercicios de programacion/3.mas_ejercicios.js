/* Ejercicios de Cadenas

Ejercicio 1
Escribir un programa que pregunte el nombre del usuario en la consola y un número entero e imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número introducido. */


class nombreUsuario {
    constructor({
        usuario,
        repeatUsuario,
        usuarioCompleto = [],
    }){
        this.usuario = usuario;
        this.repeatUsuario = repeatUsuario;
        this._usuarioCompleto = usuarioCompleto
    }
    get usuarioCompleto() {
        return this._usuarioCompleto;
    }
    set usuarioCompleto(newUser) {
        this._usuarioCompleto = newUser;
    }

    RepeatUser() {
        while(this.repeatUsuario > 0) {
            this.usuarioCompleto.push(this.usuario)
            this.repeatUsuario --;
        }
        console.log(this.usuarioCompleto);
    }
}

let Yefry = new nombreUsuario({
    usuario: "Yefry",
    repeatUsuario: 3,
})
Yefry.RepeatUser();



/* Ejercicio 2
Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.
 */


function user(nombreUsuario) {
    let nombre = nombreUsuario;
    nombre = nombre.toUpperCase();
    let nameUser = [];
    nameUser.push(nombre);
    nombre = nombre.toLocaleLowerCase();
    nameUser.push(nombre);
    console.log(nameUser);
}


let cadena = "Pontraseña";
let cadena2 = "Contraseña";

if (cadena2 == cadena) {
    console.log("introdujiste la misma contraseña")
}
else {
    console.log("Te equivocastes perro")
}

