class Estudiante{

    constructor(nombre, materia){
        this.nombre = nombre;
        this.materia = materia;
    }

    estudiar(){
        return `El estudiante ${this.nombre} estudia la materia ${this.materia}`
    }
}

class MalEstudiante extends Estudiante{
    estudiar(){
        return `El estudiante ${this.nombre} no estudió para la materia ${this.materia} y sacó mala nota`
    }
}

class BuenEstudiante extends Estudiante{
    estudiar(){
        return `El estudiante ${this.nombre} estudia para la materia ${this.materia} y sacó buena nota`
    }
}

const estudiante1 = new MalEstudiante("Ana", "Matemática");
const estudiante2 = new BuenEstudiante("Federico", "Lenguaje");

estudiante1.estudiar()
estudiante1.estudiar()