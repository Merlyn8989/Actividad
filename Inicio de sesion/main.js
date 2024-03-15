class Sesion {
    constructor(usuario, contraseña, userReg, contraReg){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.userReg = userReg;
        this.contraReg = contraReg;
    }

    validarDatos(){
        if(this.usuario == this.userReg && this.contraseña == this.contraReg){
            return "Ha inciado sesión"

        }else if(this.usuario == this.userReg && this.contraseña != this.contraReg){
            return "Su contraseña es incorrecta"

        }else if(this.usuario != this.userReg && this.contraseña == this.contraReg){
            return "Nombre de usuario incorrecto"
        }else{
            return "Sus datos son incorrectos"
        }
    }
}

class Usuario extends Sesion{
    constructor(usuario, contraseña, userReg, contraReg){
        super(usuario, contraseña, userReg, contraReg)
    }
}

const btnSesion = document.getElementById("btnSesion");

console.log(btnSesion);

btnSesion.addEventListener("click", ()=>{
    let user = document.getElementById("user").value;
    let contraseña = document.getElementById("contra").value;

    const usuario1 = new Usuario(user, contraseña, "Nicole", "123");

    let mensaje = usuario1.validarDatos();

    if(mensaje == "Ha inciado sesión"){
        document.getElementById("ventana").style.display = "block";
    }else{
        document.getElementById("inicioSesion").innerText = mensaje;
    }
})

const btnCrearPerfil = document.getElementById("crearPerfil")
btnCrearPerfil.addEventListener("click", ()=>{
    let name = document.getElementById("name").value;
    let fecha = document.getElementById("fechaNacimiento").value;
    let genero = document.getElementById("genero").value;
    let phone = document.getElementById("phone").value;
    let departamento = document.getElementById("departamento").value;
    let ciudad = document.getElementById("ciudad").value;
    let descripcion = document.getElementById("descripcion").value;

    sessionStorage.setItem("nombre", name);
    sessionStorage.setItem("fecha", fecha);
    sessionStorage.setItem("genero", genero);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("departamento", departamento);
    sessionStorage.setItem("ciudad", ciudad);
    sessionStorage.setItem("descripcion", descripcion);

    location.href = "perfil.html"
})





    

