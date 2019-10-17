function esPrimo (numero) {
    let divisor = 2;
    if (numero < 0) alert("Por favor, introduce un número natural.");
    else {
        while (numero%divisor != 0 && divisor < numero) {
            divisor++;
        };
        /*Si divisor = numero, significa que el resultado de todos los módulos es distinto de cero, y si el
        resultado de todos los módulos es cero, el número es cero, pues no hay más divisor que él mismo y
        la unidad.*/ 
        if (divisor == numero) return true;
        else return false;
    }
} 
function numeroPrimo (numero) {
    if(esPrimo(numero)) alert(numero+' es primo');
    else alert(numero+' no es primo.');
};

function calcularDivisores (numero) {
    if (numero < 0 || numero%1 != 0 || numero == '') alert("Por favor, introduce un número natural.");
    else if (numero.length > 6)
        alert("ERROR: el número introducido es mayor de 999.999.");
    else if (numero == 1)
        alert("El divisor de 1 es el mismo. 1 es la unidad.")
    else if (esPrimo(numero))
        alert("Los divisores de "+numero+" son "+numero+" y 1")
    else if (numero == 0)
        alert('El número cero tiene infinitos divisores.')
    else {
        let divisores = [];
        for (i = numero; i >= 1; i--) {
            if (numero%i == 0)
                divisores.push(i);
        };
        alert("Los divisores de "+numero+" son "+divisores.join(",\u0020"));
    };
};

function calcularFactorial (numero) {
    let resultado = 1;
    for (i = 0, aux = numero; aux >= 1; i--, aux--)
        resultado *= aux;
    if (resultado == Infinity)
        alert('El valor de '+numero+'! es demasiado grande.');
    else
        alert(numero+'! es '+resultado);
};

function sumarCifras (numero) {
    var aux = numero;
    if (isNaN(numero))
        alert('Por favor, introduce un número.');
    else {
        var digitos = [];
        while (numero) {
            digitos.push(numero % 10);
            numero = Math.floor(numero/10);
        }
        var resultado = 0;
        for (i = 0; i < digitos.length; i++)
            resultado += digitos[i];
        alert('La suma de los dígitos de '+aux+' es '+resultado);
    }
}
/*
function sumarCifras (numero) {
    var aux = numero, esDecimal = false;
    var parte_entera, parte_decimal, posicion;
    if (isNaN(numero))
        alert('Por favor, introduce un número.');
    else {
        for(i = 0; i < numero.lenght; i++) {
            if (numero.charAt(i) == '.') {
                posicion = numero.charAt(i);
                esDecimal = true;
            }
        };
        var separar = function (numero) {
            let digitos = [];
            while (numero) {
            digitos.push(numero % 10);
            numero = Math.floor(numero/10);
            }
            return digitos;
        }
        let digitos = [];
        if (esDecimal) {
            parte_entera = numero.substr(0, posicion);
            parte_decimal = numero.substr(posicion);
            digitos += separar(parte_entera);
            digitos += separar(parte_decimal);
        } else 
            digitos = separar(parte_entera);
            console.log(parte_entera);
        
        var resultado = 0;
        for (i = 0; i < digitos.length; i++)
            resultado += digitos[i];
        alert('La suma de los dígitos de '+aux+' es '+resultado);
    }
}
*/
function dec2bin (numero) {
    if (isNaN(numero))
        alert('Por favor, introduce un número entero positivo.');
    else {
        let resultado = '';
        for (i = 0, aux = numero; aux > 0; i++, aux = aux/2) {
            do {
                resultado += aux%2;
                console.log(aux);
            } while (aux > 0)
        }
        alert(resultado);
    }
}