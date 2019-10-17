//Ejercicio 1
function ordenarHorizontal (text) {
    if (text.length == 0) {
        alert('Introduce un texto.')
    } else {
        for (i = 0; i < text.length; i++) {
            alert(text.charAt(i))
        }
    }   
}
//Ejercicio 2
function ordenarDelReves (text) {
    var delreves = ""
    if (text.length == 0) {
        alert('Introduce un texto.')
    } else {
        for (i = text.length - 1; i >= 0; i--) {
            delreves =+ text.charAt(i)
            console.log(delreves)
        }
    }
    alert(delreves)
}
//Ejercicio 3
function paresImpares (text) {
    var longitud = text.length
    var pares = []
    //var impares = []
    for (n = 0; n < longitud; n++) {
        var i = 0;
        pares[i] = text.charAt(n)
        aux = pares[i]
        i++
    }
    alert(impares.toString())
    //for (i = 1; i < longitud.length; i++) {
    //    var n = 2 * i
    //    alert('Los carateres que ocupan posiciones pares son: '+text.charAt(n))
    //}
}
//Ejercicio 4
function hackString(string) {
    var string = ''
    for(i = 0; i < string.length; i++) {
        if (charAt(i) == 'a' || charAt(i) == 'e' || charAt(i) == 'i' || charAt(i) == 'o') {
            if (charAt(i) =='a') hackeo += string.replace('a','4')
            else if (charAt(i) =='e') hackeo += string.replace('e','3')
            else if (charAt(i) =='i') hackeo += string.replace('i','1')
            else if (charAt(i) =='o') hackeo += string.replace('o','0')
        }
    }
    return string
}
function replaceStringSlice ()