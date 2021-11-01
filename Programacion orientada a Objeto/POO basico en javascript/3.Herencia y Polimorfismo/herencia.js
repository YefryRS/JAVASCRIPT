function videoPlay(id){
    let urlSecreta = "https://Platziscrto.com" + id;
    console.log("Se esta producendo desde la url " + urlSecreta);
}
function videoStop(){
    let urlSecreta = "https://Platziscrto.com" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
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
        comments,
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name; 
        this._clases = clases;
        this.comments = comments;
        this.isFree = isFree;
        this.lang = lang
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
    comments: "usuario",
    isFree: true //aqui agragamos la propiedad
});

cursoProgramacionBasica.name = "Curso gratis de programacion basica" 
cursoProgramacionBasica.clases = "TablasVerdad";


const CursoDefinitivoHTMLCSS = new courses({
    
});
CursoDefinitivoHTMLCSS.name = "curso definitivo de html y css"

const cursoPracticoHTMLCSS = new courses({
    lang: "english" // aqui agregamos otra propiedad
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




// La herencia consiste en crear una clase principal, con el fin de crear otras clases que pueden tomar los atributos y metodos de nuestra clase principal. En el siguiente ejemplo se vera su utilidad

//En este caso la clase Student sera nuestra clase padre

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
        this.approvedCourses = approverCourses;
        this.learningPaths = learningPaths
    }
};

class FreeStudent extends Student{ // con extends solicitamos extender las propiedades
    constructor(props) {
        super(props); //Con super llamamos al constructor de la clase madre
    }
    approveCourses(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }
        else {
            console.warn(`lo sentimos ${this.name}. solo puedes tomar cursos abiertos`);
        }
    }
}

// podremos heredar las propiedades mediante la palabra reservada extends
class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourses(newCourse) {
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }
        else {
            console.warn(`lo sentimos ${this.name}. no puedes tomar cursos en ingles`);
        }
    }
}
class ExpertStudent extends Student{
    constructor(){
        super(props);
    }
    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}




let juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    username: "juantio@dc",
    twitter: "fjjuandc",
    learningPaths: [escuelaDataSciense],
});


let Yefry = new BasicStudent({
    name: "Yefry",
    username: "yefryRS",
    username: "Yefry@gmail.com",
    instagram: "yefry_rs27",
    learningPaths: [escuelaVideojuegos,escuelaDesarrolloWeb],
    comments: "Este es un comentario"
});

console.log(juan2);
console.log(Yefry)