function videoPlay(id){
    let urlSecreta = "https://Platziscrto.com" + id;
    console.log("Se esta producendo desde la url " + urlSecreta);
}
function videoStop(){
    let urlSecreta = "https://Platziscrto.com" + id;
    console.log("Pausamos la url " + urlSecreta);
}
// Con los exports indicamos cuales son las unicas partes de javascript que exportaremos a nuestro html

export class PlatziClass {
    constructor({
        name,
        videoID
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

class courses {
    constructor({
        name,
        clases = [],
        comments
    }) {
        this._name = name; 
        this._clases = clases;
        this.comments = comments
    }
    get clases() {
        return this._clases
    }
    set clases(newClases) {
        if ( newClases === "TablasVerdad"){
            this._clases = newClases
        }
        else {
            console.error("No sea pendejo")
        }
    }
    get name(){
        return this._name
    }
    set name(newName) {
        if (newName === "Curso malito de programacion basica") {console.error("Deje la pendejada")} 
        else {
            this._name = newName;
        }
    }
}

// Ruta de programacion basica
const cursoProgramacionBasica = new courses({
    comments: "usuario"
});

cursoProgramacionBasica.name = "Curso gratis de programacion basica" // Aqui tenemos la posibilidad de asignarle el nombre
cursoProgramacionBasica.clases = "TablasVerdad";


const CursoDefinitivoHTMLCSS = new courses({

});
CursoDefinitivoHTMLCSS.name = "curso definitivo de html y css"

const cursoPracticoHTMLCSS = new courses({
    
});
cursoPracticoHTMLCSS.name = "curso practico de html y css"

class learningPaths {
    constructor({
        name,
        courses,
    }) {
        this._name = name;
        this.courses = courses
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

let escuelaDesarrolloWeb = new learningPaths({
    courses: [cursoProgramacionBasica,CursoDefinitivoHTMLCSS,cursoPracticoHTMLCSS]
});
escuelaDesarrolloWeb.name = "escuela de desarrollo Web";

let escuelaDataSciense = new learningPaths({
    courses: [cursoProgramacionBasica,"Curso de basico de python",
"curso profesional de git y github"]
});
escuelaDataSciense.name = "escuela de Data Sciense";

let escuelaVideojuegos = new learningPaths({
    courses: [cursoProgramacionBasica,"Curso de videojuegos",
"curso de planeacion de videojuegos"]
})
escuelaVideojuegos.name = "escuela de Videojuegos";


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