/* El encapsulamiento consiste en limitar o esconder el acceso de algunos atributos y propiedades de nuestros objetos, con el fin de que no se puedan alterar nuestros metodos y atributos */


class courses {
    constructor({
        name,
        clases = [],
        comments
    }) {
        this._name = name; //con el guion bajo indicamos que no se puede llamar desde afuera
        this.clases = clases;
        this.comments = comments
    }
    //pero necesitamos conseguir el nombre del curso, y para ello usaremos "getter"
    get name(){
        return this._name
    }
    // y con el set asignaremos el nombre del curso
    set name(newName) {
        if (newName === "Curso malito de programacion basica") {console.error("Deje la pendejada")} 
        else {
            this._name = newName;
        }
    }
}

const cursoProgramacionBasica = new courses({
    name: "Curso gratis de programacion basica",
    clases: "TablasVerdad",
    comments: "usuario"
});

cursoProgramacionBasica.name // Aqui tenemos la posibilidad de asignarle el nombre

const CursoDefinitivoHTMLCSS = new courses({
    name: "curso definitivo de html y css"
});
const cursoPracticoHTMLCSS = new courses({
    name: "curso practico de html y css"
});


class learningPaths {
    constructor({
        name,
        courses,
    }) {
        this.name = name;
        this.courses = courses
    }
}

let escuelaDesarrolloWeb = new learningPaths({
    name: "escuela de desarrollo Web",
    courses: [cursoProgramacionBasica,CursoDefinitivoHTMLCSS,cursoPracticoHTMLCSS]
});

let escuelaDataSciense = new learningPaths({
    name: "escuela de Data Sciense",
    courses: [cursoProgramacionBasica,"Curso de basico de python",
"curso profesional de git y github"]
});

let escuelaVideojuegos = new learningPaths({
    name: "escuela de Videojuegos",
    courses: [cursoProgramacionBasica,"Curso de videojuegos",
"curso de planeacion de videojuegos"]
})


class Student {
    constructor({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approverCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approverCourses = approverCourses;
        this.learningPaths = learningPaths
    }
};

let juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    username: "juantio@dc",
    twitter: "fjjuandc",
    learningPaths: [escuelaDataSciense],
});


let Yefry = new Student({
    name: "Yefry",
    username: "yefryRS",
    username: "Yefry@gmail.com",
    instagram: "yefry_rs27",
    learningPaths: [escuelaVideojuegos,escuelaDesarrolloWeb],
    comments: "Este es un comentario"
});

console.log(juan2);
console.log(Yefry)