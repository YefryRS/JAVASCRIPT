/* La abstraccion es lo que hemos hecho hasta el momento. Que es abstraer los datos de un objeto para crear su prototipo,clase o molde, para despues crear instancias a partir de este prototipo */

class comments {
    constructor({
        user,
        comment,
    }){
        this.user = user;
        this.comment = comment
    }
};

let usuario = new comments({
    user: "YefryRS",
    comment: "este es un comentario"
})

//Crear prototipo de clases para agregar a course
class clases {
    constructor({
        nameClase,
        duration,
        teacher,
    }) {
        this.name = nameClase;
        this.duration = duration;
        this.teacher = teacher;
    }
}

let TablasVerdad = new clases({
    nameClase: "Tablas de Verdad y compuertas logicas",
    duration: 23.52,
    teacher: "Freddy Vega"
});

//Debido a que hay cursos que se repiten en la ruta de aprendiza, creamos esta clase
class courses {
    constructor({
        name,
        clases = [],
        comments
    }) {
        this.name = name;
        this.clases = clases;
        this.comments = comments
    }
}

const cursoProgramacionBasica = new courses({
    name: "Curso gratis de programacion basica",
    clases: TablasVerdad,
    comments: usuario
});
const CursoDefinitivoHTMLCSS = new courses({
    name: "curso definitivo de html y css"
});
const cursoPracticoHTMLCSS = new courses({
    name: "curso practico de html y css"
});

// Se creo con el fin de no repetir lineas de codigo al crear rutas de aprendizaje, mas bien solo llamar la escuela y listo
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

// clase principal
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