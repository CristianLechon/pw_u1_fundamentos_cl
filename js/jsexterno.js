function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(id_elementoPadre, html) {
    //Manera quemada
    //document.getElementById('id_div').innerHTML='<h1 id="id_calculadora">Calculadora</h1>'
    document.getElementById(id_elementoPadre).innerHTML = html;
}
function contruirH1() {
    return '<h1 id="id_calculadora">Calculadora</h1>';
}
function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}
function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}
function mostrarlemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;

    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = resultado;
}

function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}

function fundamentosJS() {
    /* Tipos de variables */
    var nombre = "Cristian"; // es la mas antigua, y ya es considerada obsoleta (variables cambiantes)
    let apellido = "Lechon"; // variables cambiantes
    let apellido2 = 25; // tiene tipado dinamico
    apellido2 = "Teran"; // no es recomendable hacer este tipo de cambio.
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diasSemana = ['Lunes', 'Martes', '...'];
    const IVA = 12.8; //Para constantes
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);
    //Arreglos
    const arregloDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    arregloDiasSemana.push('Jueves');
    console.log(arregloDiasSemana);
    arregloDiasSemana.unshift('Dias'); //Para agregar al inicio
    console.log(arregloDiasSemana);
    console.log(arregloDiasSemana[0]);
    console.log('Manejo de nulos, undefined y vacio');
    arregloDiasSemana.push(null); //Ausencia de un valor
    arregloDiasSemana.push(''); //cadena vacia
    console.log(arregloDiasSemana[5]);
    console.log(arregloDiasSemana[6]);
    console.log(arregloDiasSemana[7]); // no existe

    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);
    /* Sentencias de Control */
    let edad = 19;
    // Primera sentencia
    if (edad >= 18) {
        console.log('Es mayor de Edad');
    } else {
        console.log('Es menor de Edad');
    }
    // Segunda sentencia
    let dia = 'Lunes';
    switch (dia) {
        case 'Lunes':
            console.log('Es Lunes');
            break
        case 'Martes':
            console.log('Es Martes');
            break;
        default:
            console.log('No es ninguno de esos días');
            break;
    }
    // Tercer sentencia
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
    const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja'];
    // Para arreglos of
    for (let fruta of frutas) {
        console.log(fruta);
    }

    /* Manejo de objetos */
    const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Teran';
    console.log(profesor);

    if (profesor.ciudad === 'Quito') {
        console.log('Es Quiteño');
    }

    if (profesor.edad !== 36) {
        console.log('Es diferente de 36');
    } else {
        console.log('Es 36');
    }

    // in Para objetos
    for (let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);
    }

    const e1 = {
        nombre: 'Cristian',
        apellido: 'Lechon',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    const e2 = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    const arregloEstudiantes = [e1, e2, {
        nombre: 'Edison 3',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }];
    console.log(arregloEstudiantes[0]);
    console.log(arregloEstudiantes[2]);

    /* Desestructuracion */
    // Arreglos
    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [p1, p2, p3, p4, p5] = ar1;
    console.log(p1);
    console.log(p4);
    const [primero, , , , , , ultimo] = ar1;
    console.log(primero);
    console.log(ultimo);

    const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(ar1);

    //Objetos

    const e3 = {
        nombre1: 'Cristian 1',
        apellido: 'Lechon',
        edad: 24,
        ecuatoriano: true,
        genero: 'M',
        ciudad1: 'Quito'
    };

    const { nombre1, ciudad1 } = e3;
    console.log(nombre1);
    console.log(ciudad1);

    const { nombre: n, ciudad: ciu } = {
        nombre: 'Cristian 2',
        apellido: 'Lechon',
        edad: 24,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };
    console.log(n);
    console.log(ciu);

    const e4 = {
        nombre1: 'Cristian 1',
        apellido: 'Lechon',
        edad: 24,
        ecuatoriano: true,
        genero: 'M',
        ciudad1: 'Quito',
        direccion: {
            calle: "Av. America",
            barrio: "La Gasca",
            numeracion: "2343"
        }
    };
    console.log(e4.direccion);
    console.log(e4.direccion.barrio);

    /* Objeto de tipo objeto */
    const { edad: ed, direccion } = e4;
    console.log(ed);
    console.log(direccion);
    const { calle } = direccion;
    console.log(calle);
    // En un solo paso
    const { direccion:
        {
            barrio, calle: c1, numeracion
        }
    } = e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);
}

function imprime([a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

