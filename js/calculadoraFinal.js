let num1 = 0;
let num2 = 0;
let resultado = 0;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function limpiarDisplay() {
    let elemento = document.getElementById('display');
    elemento.innerText = '';
}

function borrarDisplay() {
    let elemento = document.getElementById('display');
    elemento.innerText = valor;
}

function sumar(num1, num2) {
    resultado = num1 + num2;
    return resultado;
}
function restar(num1, num2) {
    resultado = num1 - num2;
    return resultado;

}
function multiplicar(num1, num2) {
    resultado = num1 * num2;
    return resultado;

}
function dividir(num1, num2) {
    resultado = num1 / num2;
    return resultado;
}

function porcentaje() {

}