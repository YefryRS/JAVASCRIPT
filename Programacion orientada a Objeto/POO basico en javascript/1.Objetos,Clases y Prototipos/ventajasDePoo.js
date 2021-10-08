/* A continuacion veremos las ventajas y desventajas de cada una de las formas de hacer objetos en Js */

//Objetos literales. Esta no es escalable y por tanto no deberiamos de usarla.
const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: null
    },
    approverCourses: [
        "curso definitivo de HTML y CSS",
        "curso practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "curso definitivo de HTML y CSS",
                "curso practico de HTML y CSS",
                "curso de Responsive design"
            ]
        },
        {
            name: "Escuela de videojuegos",
            courses: [
                "curso introduccion a la produccion de VGS",
                "curso de Unreal Engine",
                "curso de Unity en 3D"
            ]
        }
    ]
}

// Por tanto haremos programacion orientada a objetos, y para ello haremos clases, y a partir de esta realizaremos instancias para crear objetos

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
    courses: ["Curso de computacion basica",
"curso de html y css"]
});

let escuelaDataSciense = new learningPaths({
    name: "escuela de Data Sciense",
    courses: ["Curso de basico de python",
"curso profesional de git y github"]
});

let escuelaVideojuegos = new learningPaths({
    name: "escuela de Videojuegos",
    courses: ["Curso de videojuegos",
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
        learningPaths = []
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
}
let juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    username: "juantio@dc",
    twitter: "fjjuandc"
})


let Yefry = new Student({
    name: "Yefry",
    username: "yefryRS",
    username: "Yefry@gmail.com",
    instagram: "yefry_rs27",
    learningPaths: [escuelaVideojuegos,escuelaDesarrolloWeb]
})

console.log(juan2);
console.log(Yefry)

// Notemos que para crear nuestra clase o prototipo nos llevo varias lineas de codigo, pero para crear las instancias fue algo super corto