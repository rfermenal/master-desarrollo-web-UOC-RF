/*Los libros tienen un código identificador, el ISBN (International Standard Book Number). Hay códigos ISBN de 10 dígitos (ISBN-10) o de 13 dígitos (ISBN-13), estos últimos desde 2007. El dígito de control  de un código ISBN-13 se calcula multiplicando el primer dígito por 1, el segundo por 3, el tercero por 1, el cuarto por 3, etc, hasta llegar al 12º dígito. El 13º dígito es el de control, y es el valor que hay que añadir a la suma de todos estos productos para que sea divisible por 10.

Escribid un programa en JavaScript que compruebe si un código ISBN-13 dado tiene el dígito de control correcto o no. Si el dígito de control es correcto debe escribir por consola el mensaje "CORRECTO", sinó debe escribir "INCORRECTO".

Podéis consultar la wikipedia: https://es.wikipedia.org/wiki/ISBNLinks to an external site.

Ejemplos:

Si el código ISBN es 9781593272821, debe escribir "CORRECTO"
Si el código ISBN es 9781593272820, debe escribir "INCORRECTO"*/



// Guardamos en una variable el ISBN que queremos comprobar
let isbn = "9781593272821"; 


// Se extrae cada dígito del string (del 1 al 13) y se convierten en números para poder multiplicarlos por 1 ó 3 según instrucciones
let d1  = parseInt(isbn[0]);
let d2  = parseInt(isbn[1]);
let d3  = parseInt(isbn[2]);
let d4  = parseInt(isbn[3]);
let d5  = parseInt(isbn[4]);
let d6  = parseInt(isbn[5]);
let d7  = parseInt(isbn[6]);
let d8  = parseInt(isbn[7]);
let d9  = parseInt(isbn[8]);
let d10 = parseInt(isbn[9]);
let d11 = parseInt(isbn[10]);
let d12 = parseInt(isbn[11]);
let d13 = parseInt(isbn[12]); // Este es el dígito de control del ISBN-13


// Se multiplica cada dígito por 1 ó por 3 según la norma ISBN-13 para obtener desde la posición 1 a la 12 del ISBN
let p1  = d1  * 1;
let p2  = d2  * 3;
let p3  = d3  * 1;
let p4  = d4  * 3;
let p5  = d5  * 1;
let p6  = d6  * 3;
let p7  = d7  * 1;
let p8  = d8  * 3;
let p9  = d9  * 1;
let p10 = d10 * 3;
let p11 = d11 * 1;
let p12 = d12 * 3;


// Se genera la suma del resultado obtenido por cada posición
let suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;


// Se calcula el resto al dividir la suma entre 10, que deberá ser un valor entre 0 y 9
let resto = suma % 10;  
// resto será un número entre 0 y 9


// Para obtener el dígito de control calculamos cuánto falta para que la suma de los productos sea un múltiplo de 10.
// Si el resto de dividir entre 10 es 0, el dígito de control es 0
// Si no es 0, el dígito de control es 10 menos ese resto

let controlCalculado = (resto === 0) ? 0 : 10 - resto; 


// Se compara el digito calculado con el dígito real del ISBN proporcionado. Si es igual (comparación estricta), el ISBN es válido

if (controlCalculado === d13) {

    console.log(isbn + " es correcto");   // El ISBN es válido
} else {

    console.log(isbn + " es incorrecto"); // El ISBN es inválido
}


// Guardamos en una variable el ISBN que queremos comprobar
let isbn2 = "9781593272820"; 


// Se extrae cada dígito del string (del 1 al 13) y se convierten en números para poder multiplicarlos por 1 ó 3 según instrucciones
let n1  = parseInt(isbn2[0]);
let n2  = parseInt(isbn2[1]);
let n3  = parseInt(isbn2[2]);
let n4  = parseInt(isbn2[3]);
let n5  = parseInt(isbn2[4]);
let n6  = parseInt(isbn2[5]);
let n7  = parseInt(isbn2[6]);
let n8  = parseInt(isbn2[7]);
let n9  = parseInt(isbn2[8]);
let n10 = parseInt(isbn2[9]);
let n11 = parseInt(isbn2[10]);
let n12 = parseInt(isbn2[11]);
let n13 = parseInt(isbn2[12]); // Este es el dígito de control del ISBN-13


// Se multiplica cada dígito por 1 ó por 3 según la norma ISBN-13 para obtener desde la posición 1 a la 12 del ISBN
let part1  = n1  * 1;
let part2  = n2  * 3;
let part3  = n3  * 1;
let part4  = n4  * 3;
let part5  = n5  * 1;
let part6  = n6  * 3;
let part7  = n7  * 1;
let part8  = n8  * 3;
let part9  = n9  * 1;
let part10 = n10 * 3;
let part11 = n11 * 1;
let part12 = n12 * 3;


// Se genera la suma del resultado obtenido por cada posición
let suma2 = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9 + part10 + part11 + part12;


// Se calcula el resto al dividir la suma entre 10, que deberá ser un valor entre 0 y 9
let resto2 = suma2 % 10;  
// resto será un número entre 0 y 9


// Para obtener el dígito de control calculamos cuánto falta para que la suma de los productos sea un múltiplo de 10.
// Si el resto de dividir entre 10 es 0, el dígito de control es 0
// Si no es 0, el dígito de control es 10 menos ese resto

let controlCalculado2 = (resto2 === 0) ? 0 : 10 - resto2; 


// Se compara el digito calculado con el dígito real del ISBN proporcionado. Si es igual (comparación estricta), el ISBN es válido

if (controlCalculado2 === n13) {

    console.log(isbn2 + " es correcto");   // El ISBN es válido
} else {

    console.log(isbn2 + " es incorrecto"); // El ISBN es inválido
}




