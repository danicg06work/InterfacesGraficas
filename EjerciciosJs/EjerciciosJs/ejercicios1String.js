//1
console.log(`Primera linea.
Segunda linea.
Tercera linea.`);

//2
let cadenaConEscape = "Primera linea \n salto de linea "
console.log (cadenaConEscape)

//3
let cadenaConBarra = "Aquí esta la barra \\"
console.log (cadenaConBarra)

//4 
let cadenaSumada = "Hola" + "mundo"

//5
let nombre = "Juan";
 let cadenaTemplate = `Me llamo ${nombre}`
 console.log(cadenaTemplate)

//6
let separarCadena ="Parte1. Parte2. Parte3."
let ArrayCadenas = separarCadena.split(".")
console.log(ArrayCadenas)
 
//g. Convierte un texto dado a minúsculas.
let textoMayuscula = "HOLA ESTOY EN MINUSCULA"
let textoMinuscula = textoMayuscula.toLowerCase()
console.log(textoMinuscula)

//h. Convierte un texto dado a mayúsculas.
textoMayuscula = textoMinuscula.toUpperCase

//i. Recorre el texto carácter por carácter usando un bucle e imprímelo.
let textoRecorrer = "     Este texto se va ir recorriendo por caracter."
for (let i=0; i < textoRecorrer.length;i++){
    console.log(textoRecorrer[i])
}

//j. Busca una subcadena dentro de un texto
let textoABuscar = "recorriendo"
let posicion = textoRecorrer.indexOf(textoABuscar);
console.log(posicion)

//k. Extrae una subcadena desde la posición 3 hasta el final del texto y guárdala en una variable.
console.log( textoRecorrer.substring(3)) 

//l. Extrae una subcadena desde la posición 3 hasta la primera ocurrencia de una palabra en el texto
//y guárdala en una variable.

console.log(textoRecorrer.substring(3,textoRecorrer.indexOf(textoABuscar)))

//m. Reemplaza todos los espacios en el texto por un guion ‑.
let remplazar = "12 3 2025"
console.log(remplazar.replaceAll(" ","-"))

//n. Elimina los espacios en blanco antes y después del texto.
console.log(textoRecorrer.trim())

//o. Crea una cadena que no contenga ningún espacio partiendo de otra cadena dada
console.log(remplazar.replaceAll(" ",""))

//p. Crea una función que invierta una cadena de texto.
function invertirCadena(cadena){
    return cadena.split('').reverse().join('');
}
textoInvertido = "oditrevni atse otxet etsE"
console.log(invertirCadena(textoInvertido))

//q. Usa una expresión regular para comprobar si la cadena contiene números
console.log(separarCadena+ " tiene numeros? = ["+/\d/.test(separarCadena)+"]")

//r. Usa una expresión regular para comprobar si la cadena termina en un punto.
console.log(textoRecorrer+" termina en . ? = ["+/.$/.test(textoRecorrer)+"]")

//s. Usa una expresión regular para comprobar si la cadena comienza con una mayúscula
console.log(nombre + "empieza en mayuscula? = ["+/[A-Z]/.test(nombre)+"]")

//t. Usa una expresión regular para comprobar si la cadena contiene un número de teléfono con
//código internacional.
console.log("+34 123 456 789" + " es un numero internaiconal? " + /\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}/.test("+34 123 456 789")+"]")

// u. Reemplaza cualquier ocurrencia de un + seguido de números por la cadena SECRETO
let textoSecreto = "el numero es 13".replace(/\d{1,3}/g, "SECRETO");
console.log(textoSecreto);