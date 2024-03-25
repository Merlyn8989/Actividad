class libro {
    constructor(nombre, autor, precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }
}

class librería{
    constructor(libros = []) {
        this.libros = libros;
    }

    agregarCarrito(libro) {
        this.libros.push(libro);
    }

    calcularTotal() {
        let total = 0
        for (const libro of this.libros) {
          total += libro.getPrecio()
        }
    
        return total
    }
}

const libreria = new librería()
libreria.agregarCarrito(new libro("Cronicas Marcianas","Ray Bradbury", 12))
libreria.agregarCarrito(new libro("fahrenheit 451","Ray Bradbury", 15))

const total = libreria.calcularTotal();
console.log(`Su total a pagar es ${total}`);

