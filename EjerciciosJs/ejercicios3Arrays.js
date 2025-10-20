
//a. Crea un array “datos” vacío con un literal.
let datos = []

//b. Añade a “datos” los números del 1 al 50 con un bucle for.
for (let i = 1;i<51;i++)
    datos.push(i)

//c. Elimina los elementos del 25 al 50 asignando un nuevo tamaño a la propiedad length.
datos.length = 24

//d. Usa el operador spread para hacer una copia del array anterior.
let copia = [...datos]

//e. Crea un array de tamaño 50 con el constructor Array.
let array50 = new Array(50)

//f. Copia el array anterior a otro con la factoría from.
let copiaArray50 = Array.from(array50)

//g. Crea un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializa cada celda con el valor
//i*j.
let multidiemsional = []
for(let i = 0;i<10;i++){
    let row = [];
    for (let j = 0;j<10;j++){
        row.push(i*j)
    } 
    multidiemsional.push(row)
}
/*h. Crea un array con la factoría of con los números del 1 al 5. Después, añade un elemento en la
posición 10 y otro en la 50. Recorre el array con un for imprimiendo los valores, y después con
forEach. ¿Cuál es la diferencia? ¿Cuál es el tamaño del array?*/
let numeroOf= [1,2,3,4,5]
numeroOf[50]=34
numeroOf[10]=38
for(let i = 0;i<51;i++)
    console.log(numeroOf[i])

//i. Elimina dos elementos con delete.
delete numeroOf[2]
delete numeroOf[4]

//j. Calcula el producto de todos los números del array “datos” con forEach.
let producto = 1;
datos.forEach((valor)=> {
    producto = producto*valor;
})
console.log(producto)

//k. Cada elemento x del array “datos” debe cambiarse por x*x. Usa forEach.
datos.forEach((x,indice)=>{
    datos[indice] = x * x
})

/* l. Crea un nuevo array con map recorriendo cada elemento x de “datos”, donde cada elemento
sea un string “El valor es: x”. Usa template strings. */
let stringDeDatos = datos.map((x)=>`El valor es: ${x}`)

//m. Crea un nuevo array mediante map que incremente cada elemento de “datos” en 5 unidades.
let incremetando = datos.map((x)=>{x + 5})

//n. Mediante filter, quédate con los números impares en un nuevo array impares.
let impares = datos.filter((x)=>{x%2 != 0})

//o. Usa find para buscar el número 13.
let resultado = datos.filter((x)=>x==13)

//p. Usa every para comprobar si todos los números son positivos.
let condicion = datos.every((x)=> x > 0)

//q. Calcula la sumatoria del array “datos” mediante reduce.
let sumaDeDatos = datos.reduce((todo,numero) => todo += numero,0)

//r. Calcula el valor más pequeño del array mediante reduce.
let minimo = datos.reduce((salida,numero)=> (salida<numero ? salida : numero), 0)
console.log(minimo)

//s. Usa flat para aplanar el array multidimensional que creaste anteriormente.
let datosAplanado = multidiemsional.flat();

/*t. Tenemos la cadena: “Vamos a usar flatMap. Es igual que map. Pero aplana los arrays”. Separa
mediante split las distintas frases. Después, mediante map, quita los espacios sobrantes (trim).
A continuación, usa flatMap para extraer todas las palabras de cada frase en un único array.*/
let cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays"
let partes = cadena.split(". ")
let palabras = partes.flatMap(frase => frase.trim().split(" "))

/*u. Crea el array a = [1,2,3,4,5] y b = [6,7,8,9,10] con literales. 
Concatena los arrays a y b con concat.
Después, usa el operador spread. 
Crea una variable const cola. Usa unshift y shift para añadir y
quitar elementos. Dado el array resultante de la concatenación de a y b, obtén el subarray desde
el índice 2 hasta el penúltimo elemento (slice). Usa splice para quitar los 2 últimos elementos
de un array.*/
let a = [1,2,3,4,5]
let  b = [6,7,8,9,10]
let amasb = a.concat(b)
let subarray = amasb.slice(2,-1)
console.log(subarray)

//v. Rellena con fill un array de 100 elementos con ‑1.
let menos1 = new Array(100)
menos1.fill(-1)

//w. Crea un array de cadenas. Busca con indexOf una cadena.
let versiculo = "Filipenses 4:13  Todo lo puedo en Cristo que me fortalece."
console.log (versiculo.indexOf("Cristo"))

//x. Comprueba si la cadena “hola” está dentro del array anterior.
console.log(versiculo.indexOf("hola"))

//y. Ordena la lista de cadenas anterior de forma alfabética con sort.
let versiculoPorPalabras = versiculo.split(" ")
let orden = versiculoPorPalabras.sort()
console.log(orden)
/*z. Crea un array vacío de 50 posiciones. Con forEach, asigna valores aleatorios entre 0 y 100. Des‑
pués, ordena con sort de menor a mayor. Cambia y ordena de mayor a menor.*/
let aleatorio = new Array(50).fill(0)
aleatorio.forEach((numero,index)=> aleatorio[index]= (Math.random() * 100).toFixed(2))
console.log("menos a mas" + aleatorio.sort())
console.log("mas a menos" + aleatorio.sort((a,b)=>b-a))
