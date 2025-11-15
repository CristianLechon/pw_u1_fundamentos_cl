function confirmar() {
    validarCampos();
}

function validarCampos() {
    const errores = [];

    let nombre = document.getElementById("id_nameCardholder").value;
    if (nombre === "") {
        errores.push('Nombre necesario'); 
        mostrarAsterisco('id_error_nombre');
    } else {
        limpiarMensajes();
    }

    let cardNumber = document.getElementById("id_numberCard").value;
    if (cardNumber === "") {
        errores.push('Número de tarjeta es necesario');
        mostrarAsterisco('id_error_numberCard');
    } else {
        limpiarMensajes();
    }

    let fecha = document.getElementById("id_fecha").value;
    if (fecha === "") {
        errores.push('Fecha es necesario');
        mostrarAsterisco('id_error_fecha');
    } else {
        limpiarMensajes();
    }

    let cvv = document.getElementById("id_cvv").value;
    if (cvv === "") {
        errores.push('cvv es necesario');
        mostrarAsterisco('id_error_cvv');
    } else {
        limpiarMensajes();
    }

    if (errores.length > 0) {
        mostrarMensaje(errores.join('\n'));
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
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}