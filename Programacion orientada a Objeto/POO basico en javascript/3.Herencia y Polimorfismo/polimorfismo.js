class Comment {
    constructor({
        content,
        studentName,
        studentRole = "Estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}



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
    isFree: true 
});

cursoProgramacionBasica.name = "Curso gratis de programacion basica" 
cursoProgramacionBasica.clases = "TablasVerdad";


const CursoDefinitivoHTMLCSS = new courses({
    
});
CursoDefinitivoHTMLCSS.name = "curso definitivo de html y css"

const cursoPracticoHTMLCSS = new courses({
    lang: "english" 
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
        this.approvedCourses = approverCourses;
        this.learningPaths = learningPaths
    }

    publicarComentario(commentContent) {
        const comentario = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comentario.publicar();
    }
};

class FreeStudent extends Student{
    constructor(props) {
        super(props);
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
    constructor(props){
        super(props);
    }
    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comentario = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Teacher"
        })
        comentario.publicar();
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

let Freddy = new TeacherStudent({
    name: "Freddy",
    username: "Freddier",
    username: "Freddy@gmail.com",
})
Freddy.publicarComentario("Hello everybody");

console.log(Freddy);
console.log(juan2);
console.log(Yefry)