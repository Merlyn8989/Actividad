
class Menú{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    get obtenerNombre(){
        return this.nombre;
    }
    get obtenerPrecio(){
        return this.precio;
    }
}

class Pedido extends Menú{
    constructor(nombre, cantidad, bebida, cantidadB, cliente){
        super(nombre)
        this.cantidad = cantidad;
        this.bebida = bebida;
        this.cantidadB = cantidadB;
        this.estado = "cocina";
        this.cliente = cliente
    }

    get obtenerEstado(){
        return this.estado;
    }

    cambiarEstado(){
        return this.estado = "listo";
    }

}


let comida1 = new Menú("Hamburguesa y papas", 5);
let comida2 = new Menú("Tacos de Birria", 4);
let comida3 = new Menú("Nachos", 3);
let comida4 = new Menú("Bebidas de industria la constancia", 1.50);

//interfaz de menú

const nombre1 = document.getElementById("comida1");
nombre1.innerText = comida1.obtenerNombre;

const nombre2 = document.getElementById("comida2");
nombre2.innerText = comida2.obtenerNombre;

const nombre3 = document.getElementById("comida3");
nombre3.innerText = comida3.obtenerNombre;

const nombre4 = document.getElementById("comida4");
nombre4.innerText = comida4.obtenerNombre;

const precio1 = document.getElementById("precio1");
precio1.innerText = comida1.obtenerPrecio;

const precio2 = document.getElementById("precio2");
precio2.innerText = comida2.obtenerPrecio;

const precio3 = document.getElementById("precio3");
precio3.innerText = comida3.obtenerPrecio;

const precio4 = document.getElementById("precio4");
precio4.innerText = comida4.obtenerPrecio;


//Interfaz de pedidos

function hacerPedido(){

    const cliente = document.getElementById("nombre").value;
    const comidas = document.getElementById("comidas").value;
    const comidaCantid = parseInt(document.getElementById("cantComi").value);
    
    const bebidas = document.getElementById("bebidas").value;
    const bebidasCantid = parseInt(document.getElementById("cantbebi").value);
    let pedido1 = new Pedido(comidas, comidaCantid, bebidas, bebidasCantid, cliente);

    let totalCom = 0;
    let totalbeb = 0;

    // Calcular el total de comida seleccionada
    switch (comidas) {
        case comida1.obtenerNombre:
            totalCom = comidaCantid * comida1.obtenerPrecio;
            break;
        case comida2.obtenerNombre:
            totalCom = comidaCantid * comida2.obtenerPrecio;
            break;
        case comida3.obtenerNombre:
            totalCom = comidaCantid * comida3.obtenerPrecio;
            break;
        default:
            console.log("Lo lamentamos, por el momento no disponemos de ");
    }

    // Calcular el total de bebida seleccionada
    if (bebidas !== " " && bebidas !== "ninguna") {
        totalbeb = comida4.obtenerPrecio * bebidasCantid;
    }
    
    // Calcular el pago total
    let pagoTotal = totalCom + totalbeb;

    setTimeout(() => {
        pedido1.cambiarEstado();
        alert(`${pedido1.cliente} su pedido es ${pedido1.nombre} y ${pedido1.bebida}. Su pedido está ${pedido1.estado}. Total a pagar:  $ ${pagoTotal}.`);
    }, 3000);

    // Mostrar los detalles del pedido en la tabla
    document.getElementById("contenidoDatos").innerHTML =
        '<table border = "1">' +
        '<tr>' +
        '<th>Cliente</th>' +
        '<th>Comida</th>' +
        '<th>cantidad</th>' +
        '<th>Bebida</th>' +
        '<th>Cantidad</th>' +
        '<th>Estado</th>' +
        '</tr>' +
        '<tr>' +
        `<td><label id="nom"></label></td>` +
        `<td><label id="com"></label></td>` +
        `<td><label id="cantc"></label></td>` +
        `<td><label id="beb"></label></td>` +
        `<td><label id="cantb"></label></td>` +
        `<td><label id="esta"></label></td>` +
        '</tr>' +
        '</table>';
    
    // Mostrar los detalles del pedido en la tabla
    document.getElementById("nom").innerText = pedido1.cliente;
    document.getElementById("com").innerText = pedido1.nombre;
    document.getElementById("cantc").innerText = pedido1.cantidad;
    document.getElementById("beb").innerText = pedido1.bebida;
    document.getElementById("cantb").innerText = pedido1.cantidadB;
    document.getElementById("esta").innerText = pedido1.estado;

}


