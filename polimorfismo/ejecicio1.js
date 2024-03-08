class Complejos{
    constructor(nombre, tipo, comportamiento){
        this.nombre = nombre;
        this.tipo = tipo;
        this.comportamiento = comportamiento;
    }

    diagnostico(){
        return `la persona ${this.nombre} tiene el complejo de ${this.tipo} por lo que se comporta ${this.comportamiento}`
    }
    
}

class Inferioridad extends Complejos{
    diagnostico(){
        return`${this.nombre} tiene el complejo de ${this.tipo} por lo que tiene una constante ${this.comportamiento} y se debe a un rechazo o acoso sufrido al paciente`
    }
}

class Superioridad extends Complejos{
    diagnostico(){
        return`${this.nombre} tiene el complejo de ${this.tipo} por lo que se comporta con ${this.comportamiento} y se debe a elogios constantes o fomentar su ego, también a miedos internos`
    }
}

const paciente1 = new Inferioridad("Samanta", "Inferioridad", "Sensación de ser menos capaz o valioso que los demás");
const paciente2 = new Superioridad("Francisco", "Superioridad", "Excesiva arrogancia");

console.log(paciente1.diagnostico());
console.log(paciente2.diagnostico());