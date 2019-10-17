//Ejercicio 1
function calcularSuma (s1, s2, s3) {
    if (s1==""||s2==""||s3=="") alert('Introduce tres sumandos')
    else {
        var s1 = parseFloat(s1);
        var s2 = parseFloat(s2);
        var s3 = parseFloat(s3);
        var suma = s1 + s2 + s3;
        alert (s1+' + '+s2+' + '+s3+' = '+suma);
        ////// Borrado del valor de los input //////
        document.getElementById('f1.s1').value = "";
        document.getElementById('f1.s2').value = "";
        document.getElementById('f1.s3').value = "";
        ////////////////////////////////////////////
    }
}

//Ejercicio 2
function calcularMedia (n1, n2, n3, n4, n5) {
    if (n1==""||n2==""||n3==""||n4==""||n5=="") alert ('Introduce los cinco números')
    else {
        var n1 = parseFloat(n1);
        var n2 = parseFloat(n2);
        var n3 = parseFloat(n3);
        var n4 = parseFloat(n4);
        var n5 = parseFloat(n5);
        var media = (n1 + n2 + n3 + n4 + n5)/5;
        alert('El resultado de la media es ' + media);
        document.getElementById('f2.n1').value = "";
        document.getElementById('f2.n2').value = "";
        document.getElementById('f2.n3').value = "";
        document.getElementById('f2.n4').value = "";
        document.getElementById('f2.n5').value = "";
    }
}

//Ejercicio 3
function calcularCuadrado (numero) {
    if (numero == "") {
        alert('Introduce un número.')
    } else {
        var numero = parseFloat(numero);
        if (numero < 0) {
            alert('ERROR: No se puede calcular la raíz cuadrada de un número negativo');
        } else {
            var cuadrado = Math.pow(numero, 2);
            alert('El cuadrado de '+numero+' es '+cuadrado); 
        }
        document.getElementById('f3.numero').value = "";
    }
}

//Ejercicio 4
function calcularOperaciones (n1, n2) {
    if (n1 == "" || n2 == "") alert('Por favor, introduce un número.')
    else {
        var n1 = parseFloat(n1);
        var n2 = parseFloat(n2);
        var suma = n1 + n2;
        var resta = n1 - n1;
        var producto = n1 * n2;
        if (n2 == 0) {
            var modulo = "No se puede dividir entre cero";
            var cociente = "No se puede dividir entre cero";
        } else {
            var cociente = n1 / n2;
            var modulo = n1 % n2;   
        }
        alert('Los resultados son:\n\t'+n1+' + '+n2+' = '+suma+'\n\t'+n1+' - '+n2+' = '+resta+'\n\t'+n1+' * '+n2+' = '+producto+'\n\t'+n1+' / '+n2+' = '+cociente+'\n\t'+n1+' mod '+n2+' = '+modulo);
        document.getElementById('f4.o1').value = "";
        document.getElementById('f4.o2').value = "";
    }
}

//Ejercicio 5
function sueldo (horas, precio_hora, irpf) {
    if (horas == ""||precio_hora == ""||irpf=="") alert('El/los campo/s está/n vacío/s')
    else {
        var horas = parseFloat(horas);
        var precio_hora = parseFloat(precio_hora);
        var irpf = parseFloat(irpf)/100;
        if (precio_hora < 0) {
            alert('ERROR: El precio de las horas no puede ser negativo.')
        } else {
            var importe_horas = horas * precio_hora; 
        }
        var base_irpf = importe_horas * irpf;
        var total_sueldo = importe_horas - base_irpf;
        alert('El líquido a percibir es '+total_sueldo+' €');
        document.getElementById('f5.horas').value = "";
        document.getElementById('f5.precio_hora').value = "";
        document.getElementById('f5.irpf').value = "";
    }
}

//Ejercicio 6
function calcularSegundos (horas, minutos, segundos) {
    if (horas == ""||minutos == ""||segundos=="") alert('El/los campo/s está/n vacío/s')
    else {
        var horas = parseInt(horas);
        var minutos = parseInt(minutos);
        var segundos = parseInt(segundos);
        horas_segundos = horas * 3600;
        minutos_segundos = minutos * 60; 
        total = horas_segundos + minutos_segundos + segundos;
        alert('El número total de segundos es ' + total)
        document.getElementById('f6.horas').value = "";
        document.getElementById('f6.minutos').value = "";
        document.getElementById('f6.segundos').value = "";
    }
}

//Ejercicio 7
function sueldo2 (unitario, cantidad, descuento, iva) {
    if (unitario == ""||cantidad == ""||descuento==""||iva=="") alert('El/los campo/s está/n vacío/s')
    else {
        var unitario = parseFloat(unitario);
        var cantidad = parseInt(cantidad);
        var descuento = parseFloat(descuento)/100;
        var iva = parseFloat(iva)/100;
        total_descuento = unitario * descuento;
        importe = unitario - total_descuento;
        total_iva = importe * iva;
        total_pagar = importe - total_iva;
        alert('El total a pagar es de '+total_pagar+' €');
        document.getElementById('f7.unitario').value = "";
        document.getElementById('f7.cantidad').value = "";
        document.getElementById('f7.descuento').value = "";
        document.getElementById('f7.iva').value = "";
    }
}
 //Ejercicio 8
function sacarIva_neto (total, iva) {
    if (total == ""||iva=="") alert('Por favor, introduce un precio y el iva.')
    else {
        var total = parseFloat(total);
        var iva =  parseFloat(iva)/100;
        total_iva = total * iva;
        neto = total - total_iva;
        alert('El precio neto es de '+neto+' € y el importe del IVA es de '+total_iva+' €');
        document.getElementById('f8.total').value = "";
        document.getElementById('f8.iva').value = "";
    }
}

//Ejercicio 9
function elevarNumero (base, exp) {
    if (base ==""||exp=="") alert('introduce un número y un exponente')
    else {
        var base = parseFloat(base);
        var exp = parseFloat(exp);
        resultado = Math.pow(base, exp);
        if (isNaN(resultado)) {
            alert('ERROR: El resultado tiende a infinito');
        } else if (resultado == Infinity) {
            alert('ERROR: El resultado tiende a infinito');
        } else {
            alert(base+ ' elevado a '+exp+' es '+resultado);
        }
        document.getElementById('f9.base').value = "";
        document.getElementById('f9.exp').value = "";
    }
}

//Ejercicio 10
function sueldoExtra (ordinaria, precio_ordinaria, extra, precio_extra, irpf) {
    var ordinaria = parseInt(ordinaria);
    var precio_ordinaria = parseFloat(precio_ordinaria);
    var extra = parseInt(extra);
    var precio_extra = parseFloat(precio_extra);
    var irpf = parseFloat(irpf);
    var importe_ordinaria = ordinaria * precio_ordinaria;
    var importe_extra = extra * precio_extra;
    var total_horas = importe_ordinaria + importe_extra;
    var total_importe = total_horas - (total_importe * irpf);
    alert('El salario es de '+total_importe+' €');
    document.getElementById('f10.horas').value = "";
    document.getElementById('f10.precio_ordinaria').value = "";
    document.getElementById('f10.horas_extra').value = "";
    document.getElementById('f10.precio_extra').value = "";
    document.getElementById('f10.irpf').value = "";
}
//Ejercicio 11
function convertirF (f) {
    if (f=="") alert('introduce una temperatura dentro de un rango válido.')
    else {
        var f = parseFloat(f);
        if (f < -459.67){
            alert ('ERROR: La temperatura no puede ser inferior al cero absoluto (-459.67ºF)')
        } else {
            c = (f - 32) * (5 / 9);
            alert(f+ ' ºF son '+c+' ºC');
        }
        document.getElementById('f11.f').value = "";
    }
}

//Ejercicio 12
function superficieTriangulo (b, h) {
    if (b==""||h=="") alert('Introduce la base y la altura')
    else {
        var b = parseFloat(b);
        var h = parseFloat(h);
        if (b < 0 || h < 0){
            alert('ERROR: Las dimensiones no pueden ser negativas.')
        } else {
            superficie = (b * h) / 2;
            alert('La superficie del triángulo es de '+truncate(superficie, 2)+' cm2.');
        }
        document.getElementById('f12.base').value = "";
        document.getElementById('f12.altura').value = "";
    }
}

//Ejercicio 13
function dimensionCircunferencia (radio) {
    if (radio=="") alert('Por favor, introduce un radio en centímetros.')
    else {
        var radio = parseFloat(radio);
        if (radio >= 0) {
            var area = Math.PI * radio * radio;
            var longitud = 2 * Math.PI * radio;
            alert('Las dimensiones de la circunferencia son:\n\t -> Área: ~'+area.toFixed(2)+' cm2\n\t -> Longitud: ~'+longitud.toFixed(2)+' cm');
        } else {
            alert('ERROR: Las dimensiones no pueden ser negativas.');
        }
        document.getElementById('f13.radio').value = "";
    }
}

//Ejercicio 14
function calcularDias (dias_totales) {
    var dias = parseInt(dias);
    if (dias_totales == "") {
        alert('ERROR: El campo no puede estar vacío');
    } else if (dias_totales < 0) {
        alert('ERROR: El valor no puede ser negativo');
    } else {
        var años = (dias_totales - (dias_totales%365)) / 365;
        var meses = ((dias_totales%365)-((dias_totales%365)%30))/30;
        var dias = (dias_totales % 365) % 30;
        alert(dias_totales+' días son: '+años+' años, '+meses+' meses y '+dias+' días.');
    }
    document.getElementById('f14.dias').value = "";
}

//Ejercicio 15
function descomponerNumero (numero_original) {
    var numero = parseInt(numero_original);
    var millares = parseInt(millares);
    var centenas = parseInt(centenas);
    var unidades = parseInt(unidades);
    if (numero_original == "") {
        alert('Por favor, introduce un número entero no superior a 4 cifras.');
    } else if (numero_original > 9999){
        alert('El número no puede ser de más de 4 cifras');
    } else if (numero_original < 0) {
        alert('El número no puede ser menor que cero.')
    } else {
        millares = Math.trunc(numero/1000);
        numero = numero - millares * 1000;
        centenas = Math.trunc(numero/100);
        numero = numero - centenas * 100;
        decenas = Math.trunc(numero/10);
        numero = numero - decenas * 10;
        unidades = numero;
        alert('La descomposición del número '+numero_original+' es: '+millares+' millares, '+centenas+' centenas, '+decenas+' decenas y '+unidades+' unidades');
    }
    document.getElementById('f15.numero').value = "";
}