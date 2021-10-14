/* Ejercicios de Cadenas

Ejercicio 1
Escribir un programa que pregunte el nombre del usuario en la consola y un número entero e imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número introducido. */

/* let usuario = "Yefry";
let repeatUsuario = 3;
 */

//let usuarioCompleto =[];


/* while(repeatUsuario > 0) {
    usuarioCompleto.push(usuario)
    repeatUsuario --;
}
console.log(usuarioCompleto); */


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

