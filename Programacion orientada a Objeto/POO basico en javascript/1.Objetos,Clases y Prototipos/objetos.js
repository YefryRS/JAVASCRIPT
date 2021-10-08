/* 1. OBJETOS LITERALES Y PROTOTIPOS */

/* Objeto literal, este por defecto es una instancia del prototipo "object" */
let natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso defitinivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ],
    //Ahora crearemos metodos a nuestro objeto, pues de momento solo tenemos atributos, y en JS podemos crearla de la siguiente manera
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    } 
};

//Hacer que Natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.aprobarCurso("Curso de Fronted Developer"); //llamamos el metodo para agragar el nuevo curso
console.log(natalia);


/* Ahora crearemos nuestro prototipo, que sera un molde para el resto de objetos */

function Student (name,age,cursosAprobados) {
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados
    //para crear metodos podemos hacerlo de 2 formas
   /*      1. this.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    } */
}

//Forma 2, creamos el metodo por fuera de la funcion
Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

/* A continuacion crearemos una instancia de este prototipo */

let Yefry = new Student(
    "Yefry",
    15,
    [
        "Curso defitinivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ]
);

Yefry.aprobarCurso("Curso de fronted developer");
console.log(Yefry);


/* 2. CLASES: Las clases en javascript son prototipos solo que con una sintaxis mas parecida a las clases de otros lenguajes de programacion */

//como se ve a continuacion podemos usar un objeto como parametro en ves de varios, ya que de esta manera podremos llamarlos en el order que deseemos y los que querramos

class Student2 {
    constructor({name,
        age,
        cursosAprobados = [],  // a nuestros parametros podemos darle valores por defecto si asi lo deseamos
        twitter,
        Facebook,
        Instagram
    }) {
        this.twitter = twitter,
        this.Facebook = Facebook,
        this.Instagram = Instagram,
        this.name = name,
        this.age = age,
        this.cursosAprobados = cursosAprobados
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

// como se ve aqui podemos mandar a llamar los atributos en el order deseado y solo los que queremos, los que no por defecto tendran undefined. Es por ello que es mas practico llamarlo por 1 solo objeto, que por varrios elementos sueltos
let miguelito = new Student2({
    name: "miguelito",
    age: 28, 
    cursosAprobados: ["Curso de analisis de negocio", "curso de Javascript basico"],
    Facebook: "Rodelo13"
});

miguelito.aprobarCurso("Curso practico de Javascript");

console.log(miguelito);
