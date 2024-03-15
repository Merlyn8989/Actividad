document.addEventListener("DOMContentLoaded", function() {
    let nombre = sessionStorage.getItem("nombre");
    let fecha = sessionStorage.getItem("fecha");
    let genero = sessionStorage.getItem("genero");
    let phone = sessionStorage.getItem("phone");
    let departamento = sessionStorage.getItem("departamento");
    let ciudad = sessionStorage.getItem("ciudad");
    let descripcion = sessionStorage.getItem("descripcion");

    document.getElementById("nombreUsuario").textContent = nombre;
    document.getElementById("fechaNacimientoUsuario").textContent = fecha;
    document.getElementById("generoUsuario").textContent = genero;
    document.getElementById("numeroTelefonoUsuario").textContent = phone;
    document.getElementById("departamentoUsuario").textContent = departamento;
    document.getElementById("ciudadUsuario").textContent = ciudad;
    document.getElementById("descripcionUsuario").textContent = descripcion;
});
