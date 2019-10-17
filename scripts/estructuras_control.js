//Se importa un archivo js externo
//$.getScript("script.js");
//Ejercicio 1
function estaComprendido1y10 (numero) {
    var numero = parseInt(numero)
    if (numero >= 1 && numero <= 10) {
        alert('Bien! '+numero+' está entre 1 y 10.')
    } else {
        alert('Introduce un número entre 1 y 10.')
    }
    document.getElementById('f1.numero').value = ""
}

//Ejercicios 2 y 3
function ordenarMenorMayor (n1, n2, n3) {
    var n1 = parseFloat(n1)
    var n2 = parseFloat(n2)
    var n3 = parseFloat(n3)
    var ordenados = [n1, n2, n3].sort((a, b) => a - b)
    /*
    La función sort() realiza una ordenación en base a la codificación UNICODE, por
    ello, para ordenar número es necesario configurarla implementando la siguiente
    función:

    function (a, b) {
        return a - b;
    };

    Abreviada de la siguiente forma: (a, b) => a - b
    La función devuelve: 
    -> Un numero negativo si a < b (ordenacion ascendente)
    -> Un numero positivo si a > b (ordenacion descendente)
    -> Cero si a = b
     */
    return ordenados
}
//EJercicio 4
/*El ejercicio obliga a usar switch. De otra menera, hubiese sido más óptimo
obtener la calificación de la siguiente forma:
if (nota >= 0 && nota < 5) {
    alert('Insuficiente');
} else if (nota >= 5 && nota < 6) {
    alert('Suficiente');
} else if (nota >= 6 and nota < 7) {
    alert('Bien');
} else if (nota >= 7 and nota < 9) {
    alert('Notable');
} else if (nota >= 9 && nota <= 10) {
    alert('Sobresaliente');
}*/
function calificacion (nota) {
    var nota = parseInt(nota);
    switch (nota) {
        case 0:
            alert('Insuficiente')
            break
        case 1:
            alert('Insuficiente')
            break
        case 2:
            alert('Insuficiente')
            break
        case 3:
            alert('Insuficiente')
            break
        case 4:
            alert('Insuficiente')
            break
        case 5:
            alert('Suficiente')
            break   
        case 6:
            alert('Bien')
            break
        case 7:
            alert('Notable')
            break
        case 8:
            alert('Notable')
            break
        case 9:
            alert('Sobresaliente')
            break
        case 10:
            alert('Sobresaliente')
            break
        default:
            alert('Introduce una nota entre 0 y 10.')
        
    }
}
//Ejercicio 5
//Cálculo de los números impares entre 100 y 120.
function impares100y120 (){
    var impares = []
    var j = 0
    for (n = 1; n < 20; n++) {
        if (n%2 != 0) {
            impares[j] = 100 + n
            j++
        }
    }
    return impares.toString()
}
//Ejercicio 6
//Cálculo de los múltiplos de 3 entre 1 y 50.
function multiplos3_1y50 (){
    var multiplos = []
    var j = 0
    for (n = 1; n < 50; n++) {
        if (n%3 == 0) {
            multiplos[j] = n;
            j++
        }
    }
    return multiplos.toString()
}
//Ejercicio 6
function sumarnNumeros () {
    var suma = 0, numero
    
    do {
        numero = prompt('Introduce un número:')
        if (numero == undefined) return
        else if (isNaN(numero)) numero = prompt('Introduce un número:')
        suma += parseInt(numero) 
    } while (numero != 0)
    alert('La suma de los números introducidos es '+suma) 
}
//Ejercicio 7
function cuadrados1y10 (){
    var cuadrados = []
    var j = 0
    for (n = 1; n <= 10; n++) {
        cuadrados[j] = Math.pow(n, 2)
        j++
    }
    return cuadrados.toString()
}
//Ejercicio 8
function repetirFrase(text, num){
    var num = parseInt(num)
    if (num <= 0 || num == "" || text == "") {
        alert('Por favor, introduce un texto y el número de veces que quieres repetirlo.')
    } else {
        var frase = []
        var i = 0 
        do {
            frase[i] = text
            i++
        } while (i < num)
        salida = frase.toString()
        alert(salida.replace(/\,/g,'\n'))
        //El parámetro g afecta a toda la cadena de forma globarl, es decir, reemplaza
        //todas las comas por un salto de línea.
    }
}