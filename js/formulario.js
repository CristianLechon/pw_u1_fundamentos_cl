function guardar() {
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;

    if (nombre === "") {
        // No usar alert, este mensaje es vulnerable
        //alert('Campo Incompleto');
        mostrarMensaje('Nombre necesario');
        mostrarAsterisco('id_error_nombre');
    } else {
        limpiarMensajes();
    }

    let apellido = document.getElementById("id_apellido").value;

    if (apellido === "") {
        mostrarMensaje('Apellido necesario');
        mostrarAsterisco('id_error_apellido');
    } else {
        limpiarMensajes();
    }
    let fecha = document.getElementById("id_fecha").value;
    if (fecha === "") {

    }
    let email = document.getElementById("id_email").value;
    if (email === "") {
        mostrarMensaje('Email necesario');
        mostrarAsterisco('id_error_email');
    } if (!validarEmail(email)) {
        mostrarMensaje('Email invalido');
    }
    let password = document.getElementById("id_password").value;
    if (password === "") {

    }
}
function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = "";
    mensaje.style.display = "block";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}