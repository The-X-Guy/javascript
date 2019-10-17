function esNegativo (numero) {
    if (numero >= 0) alert ('El número es positivo')
    else alert('El número es negativo')
}
function esPar (numero) {
    do {
        aux = numero
        aux -= 2
        
    } while (aux != 1 || aux != 0)
    if (aux == 1) alert('El número es par')
            else if (aux == 0) alert('El número es impar')
}
function sumarTodos (minimo, maximo) {
    if (minimo == "" || maximo == "")
        alert('Ambos valores deben ser números')
    else {
        var suma = 0
        var aux = maximo
        var minimo = parseInt(minimo)
        var maximo = parseInt(maximo)
        do {
            suma += maximo
            maximo--
        } while (maximo >= minimo)
        alert('La suma de todos los números entre '+minimo+' y '+aux+' es '+suma)
    }
}
function potencia (base, exponente) {
    var base = parseInt(base)
    var exponente = parseInt(exponente)
    var resultado = 0, contador = exponente
    do {
        base * base 
    } while (contador < exponente)
    alert(base+' elevado a '+exponente+' es igual a '+resultado)
} 
function restasSucesivas (dividendo, divisor) {
    var dividendo = parseInt(dividendo)
    var divisor = parseInt(divisor)
    var aux = dividendo
    var cociente = 0
    do {
        aux -= divisor
        cociente++
    } while (aux >= divisor)
    alert('El cociente es '+cociente+' y el resto es '+aux)
}
function contarNegativos (numero) {
    var prompt = parseInt(numero)
    var positivos, contarNegativos
    if (numero > 0) positivos++
    else negativos++
    alert('Has introducido '+positivos+' número positivos y '+negativos+' números negativos')

}