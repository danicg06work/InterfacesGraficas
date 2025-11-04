//a. Desestructura el día, mes y año e imprime la fecha dado el array [‘06’, ‘Octubre’, ‘2021’].
let fecha = ["06", "Octubre", "2021"]
let [dia, mes, anno] = fecha
console.log(fecha)
console.log(`El día es ${dia} de ${mes} de ${anno}`);

//b. Dado un array de números, desestructura los números en posiciones impares.
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let [, , dos, , cuatro, , seis, , ocho] = numeros
console.log(`numeros pares: ${dos} ${cuatro} ${seis} ${ocho}`)

//c. Desestructura el primer número, el segundo y el resto en otra variable.
let [cero, primero, ...otros] = numeros
console.log(`primera posicion ${cero} , segunda posicion ${primero}, el resto: ${otros}`)

//d. Desestructura nombre, apellidos y teléfono del siguiente objeto:
const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433' };
let { nombre, apellidos, telefono } = person
console.log(`nombre: ${nombre}, apellidos: ${apellidos}, telefono : ${telefono}`)

//e. Cambia el siguiente bucle para desestructurar cada entrada e imprimir llave y valor por separa‑
//do:
for (const [key, value] of Object.entries(person)) {
    console.log(`llave: ${key}, valor ${value}`);
}


//f. Dado [{x: 1, y: 2}, {x: 3, y: 4}], desestructura los puntos en las variables x1, y1, x2, y2.
const puntos = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = puntos;
console.log(`Punto 1: (${x1}, ${y1}), Punto 2: (${x2}, ${y2})`);

// Ejercicio g: Crea una función que desestructura nombre y apellidos de un objeto y los
//imprime.

function imprimirNombreCompleto({ nombre, apellidos, ...resto }) {
    console.log(`Nombre Completo: ${nombre} ${apellidos}`);
}
const persona = { nombre: 'Ana', apellidos: 'García', edad: 30, ciudad: 'Madrid', pais: 'España' };
imprimirNombreCompleto(persona);
// Ejercicio h: Dados dos objetos, combínalos en uno solo utilizando el operador spread.
//Después, elimina alguna de las propiedades.

const ob1 = { a: 1, b: 2, c: 3 };
const ob2 = { d: 4, e: 5, f: 6 };
const combinado = { ...ob1, ...ob2 };
const { c, ...sinC } = combinado;
console.log(`Objeto combinado sin propiedad 'c':`, sinC);

// Ejercicio i: Crea una función que retorna un array con 3 valores. Usa la función y
//desestructura los valores.

function returnValores() {
    return [10, 20, 30];
}
const [valor1, valor2, valor3] = returnValores();
console.log(`Valores desestructurados: ${valor1}, ${valor2}, ${valor3}`);

// Ejercicio j: Realiza una clonación profunda de un objeto que contiene otros objetos o
//arrays como propiedades
const objetoAnidado = {
    nombre: 'Carlos',
    detalles: {
        edad: 28,
        habilidades: ['JavaScript', 'React', 'Node.js']
    }
};
const clonProfundo = JSON.parse(JSON.stringify(objetoAnidado));
console.log('Clonación profunda del objeto:', clonProfundo);