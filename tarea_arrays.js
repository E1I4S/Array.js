// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const nombre=pedido.shift()
    pedido.unshift("Bebida")
    pedido.push(nombre)
    return pedido
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0
    for(let cont=0;cont<numeros.length;cont=cont+1)
        if(numeros[cont]%2==0)
          suma+=numeros[cont]
    return suma
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    palabras.every(palabras=>palabras.endwith("a"))
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    
  const index=words.findIndex(words=>words==word)
  if(index==-1)
    return[]
const wordsafter=words.slice(index+1)
return wordsafter
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let cont= 0; cont < matrix.length; cont=cont+1) {
        for (let cont2 = 0; cont2 < matrix[cont].length; cont2=cont2+1) {
       if(matrix[cont][cont2=="JavaScript"]){
        return [cont,cont2]
       }
        }
        }
    return [-1,-1]
    }

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    if (books.length === 0) {
        return [-1, -1]; // Si el array está vacío, devuelve [-1, -1]
    }

    let minpages = 0; // Inicializa el índice del libro con menos páginas
    let maxpages = 0; // Inicializa el índice del libro con más páginas

    for (let cont= 1; cont < books.length; cont=cont+1) {
        if (books[cont] < books[minpages]) {
            minIndex = cont; // Actualiza el índice del libro con menos páginas
        }
        if (books[cont] > books[maxpages]) {
            maxpages = cont; // Actualiza el índice del libro con más páginas
        }
    }

    return [minpages, maxpages]; // Devuelve un array con los índices
}


const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
