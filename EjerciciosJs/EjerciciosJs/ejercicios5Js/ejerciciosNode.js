//1

let arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));

function calcularFrecuencias(array) {
    let frecuencias = Array(100).fill(0);
    array.forEach(num => {
        frecuencias[num]++;
    });
    return frecuencias;
}
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}


function ordenarArrayJS(array) {
    return array.sort((a, b) => a - b);
}

//2
function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
//console.log("Factorial de 5:", factorial(5))


//3
function buscarOcurrencias(texto, palabra) {
    let posiciones = [];
    let index = texto.indexOf(palabra);
    while (index !== -1) {
        posiciones.push(index);
        index = texto.indexOf(palabra, index + palabra.length);
    }
    return posiciones;
}
let texto = "La palabra es un elemento clave en la palabra escrita.";
// console.log("Posiciones de 'palabra':", buscarOcurrencias(texto, "palabra"));

//4
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) { console.log("fizzbuzz"); } 
        else if (i % 3 === 0) { console.log("fizz"); } 
        else if (i % 5 === 0) { console.log("buzz"); } 
        else {
            console.log(i);
        }
    }
}

//7
function contarVocalesConsonantes(texto) {
 let vocales = 0;
 let consonantes = 0;
 const vocalesSet = new Set('aeiouAEIOU');

 for (let letra of texto) {
 if (/[a-zA-Z]/.test(letra)) {
 if (vocalesSet.has(letra)) {
 vocales++;
 } else {
 consonantes++;
 }
 }
 }

 return { vocales, consonantes };
 }


