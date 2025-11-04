//1. Crea una función que cuente el número de vocales de una cadena de caracteres.
const contarVocales=(cadena)=>{
    var contador = 0;
    for (const caracter of cadena) {
        if(caracter == "a"||caracter =="e"||caracter=="i"||caracter=="o"||caracter=="u")
            contador++
    }
    return contador
}
//console.log(contarVocales("Manuel"))

/*2. Crea una función que determine si una cadena es un palíndromo, es decir, que se lee igual hacia
delante que hacia atrás.*/
const esPalindromo=(cadena)=>{
    var cadenaAlReves = ""
    for (const caracter of cadena) {
        cadenaAlReves = caracter + cadenaAlReves
    }
    if(cadena==cadenaAlReves){
        return true
    }else{
        return false
    }
}
//Palindromo mas grande:
//console.log(esPalindromo("saippuakivikauppias"))

/*3. Crea una función que capitalice una cadena de texto. Es decir que todas las palabras empiecen
por mayúscula.*/
const capitalizarCadenas=(cadena)=>{
    const coleccionPalabras = cadena.split(" ")
    let cadenaCapitalizada = ""

    for (let palabra of coleccionPalabras) {
        let nuevapalabra = ""
        let i = 0;
        for (const caracter of palabra) {
            if(i == 0){
                nuevapalabra += caracter.toUpperCase()
            }else{
                nuevapalabra += caracter
            }
            i++
        }
        cadenaCapitalizada += nuevapalabra + " ";
    }   
    return cadenaCapitalizada 
}

//console.log(capitalizarCadenas("el quijote y sancho panza"))


/*4. Dado un array de cadenas y una longitud n, crea una función que filtre el array dejando solo las
cadenas de menor longitud que n.*/
const decirCadenasPorX=(arr,numero)=>{
    let cadenas = []
    for (const cadena of arr) {        
        if(cadena.length>numero){
            cadenas.push(cadena)
        }
    }
    return  cadenas
}
let coleccionCadenas =["hola", "adios","ok","Hasta mañana"]
//console.log(decirCadenasPorX(coleccionCadenas,3))

/*5. Crea una función que cree el acrónimo de una cadena de caracteres tomando la primera letra de
cada palabra y convirtiéndola a mayúscula. Por ejemplo la frase anterior sería CUFQCEADU….*/
const acronomizar = (cadena)=>{
    let salida =""
    let coleccionPal = cadena.split(" ")
    for (const palabra of coleccionPal) {
        salida +=(palabra[0].toUpperCase())
    }
    return salida
}
//console.log(acronomizar("National Aeronautics Space Administration."))

//6. Crea una función que cuente las frases, palabras y letras presentes en un texto.
const contarTodo = (cadena)=>{
    let nFrase = cadena.split(".").length
    let nPalabras = cadena.split(" ").length
    let nLetras = 0
        for (const element of cadena.trim()) {
            nLetras += 1
        }         
    return `Numero de frases: ${nFrase}, Numero de palabras: ${nPalabras}, Numero de letras: ${nLetras}`
}

//console.log(contarTodo("A quien no le gusta abrir cajas. Eso dijo mi amigo el ludopata."))

//7. Crea una función que identifique si hay elementos duplicados en un array.
const hayDuplicados = (coleccion)=>{
    for (let i = 0; i < coleccion.length; i++) {
        for (let j = i+1; j < coleccion.length; j++) {
            if(coleccion[i]===coleccion[j]){
                return true
            }
        }     
    }
    return false
}

const sinDuplicados = [1,2,3,4,5]   
const conDuplicados = [1,2,3,4,2]
//console.log(hayDuplicados(conDuplicados))

/*8. Crea una función que debe retornar verdadero si alguno de los elementos de un array está re‑
petido n veces.*/
const hayDuplicadosPorX = (coleccion,numero)=>{
    let contador = 0;
    for (let i = 0; i < coleccion.length; i++) {
        for (let j = i+1; j < coleccion.length; j++) {
            if(coleccion[i]===coleccion[j]){
                contador++
            }
        }     
    }
     if(contador >= numero){
        return true
    }else {
        return false 
    }   
}

//console.log(hayDuplicadosPorX(conDuplicados,2))

/*9. Crea un array que intercale dos arrays dados. Por ejemplo dados [a,b,c,d] y [1,2,3,4] el resultado
sería [a,1,b,2,c,3,d,4]*/
const intercalarArray = (coleccion1,coleccion2)=>{
    let salida = []
    //tienen que ser del mismo tamaño, sino explota.
    for (let i = 0; i < coleccion1.length; i++) {
        salida.push(coleccion1[i])
        salida.push(coleccion2[i])
    }
    return salida
}
//console.log(intercalarArray(sinDuplicados,conDuplicados))
/*10. Crea una función que rote los elementos de un array n posiciones. Por ejemplo, dado el array
[1,2,3,4,5,6] y el número 2 el resultado será: [5,6,1,2,3,4]*/
const darVueltaArray=(coleccion)=>{
    let salida = []
    let contador = coleccion.length-1
    for (const elemento of coleccion) {
        salida[contador]=elemento
        contador--
    }
    return salida
}
console.log(darVueltaArray(sinDuplicados))


