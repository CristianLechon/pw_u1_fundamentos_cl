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
    elemento.innerText = elemento.innerText.slice(0, -1);
}

function calcularResultado() {
    let elemento = document.getElementById('display');
    // Usamos expresión regular para capturar num1, operador, num2 [signo opcional][número][operador][signo opcional][número]
    let operadores = elemento.innerText.match(/^(-?\d+(?:\.\d+)?)([+\-*/%])(-?\d+(?:\.\d+)?)$/);
    // Extraemos del Array
    num1 = parseFloat(operadores[1]);
    let operador = operadores[2];
    num2 = parseFloat(operadores[3]);
    // dividimos la cadena en partes mediante el operador
    let res = 0;
    if (operador === '+') {
        res = sumar(parseFloat(num1), parseFloat(num2));
    }
    if (operador === '-') {
        res = restar(parseFloat(num1), parseFloat(num2));
    }
    if (operador === '*') {
        res = multiplicar(parseFloat(num1), parseFloat(num2));
    }
    if (operador === '/') {
        res = dividir(parseFloat(num1), parseFloat(num2));
    }
    if (operador === '%') {
        res = porcentaje(parseFloat(num1), parseFloat(num2));  
    }
    elemento.innerText = res;
}

function sumar(valor1, valor2) {
    resultado = valor1 + valor2;
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
    if (num2 === 0){
        return 'Error';
    }
    resultado = num1 / num2;
    return resultado;
}

function porcentaje(num1, num2) {
    resultado = (num1 * num2) / 100;
    return resultado;
}