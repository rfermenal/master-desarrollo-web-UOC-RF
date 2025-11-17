let a = parseInt(prompt("Indica tu primer numero")); //Solicitamos el primer número

let b = parseInt(prompt("Indica tu segundo numero")); //Solicitamos el segundo número

let c = parseInt(prompt("Indica tu tercer numero")); //Solicitamos el seundo número

console.log("Números introducidos: " + "a: " + a + ", " + "b: "+ b + ", " + "c: "+ c); //Mostramos los números introducidos en pantalla


if (a === b + c){ //Aplicamos else if para poder "jugar" con las tres posibles condiciones. Si no se cumple la primera, pasamos a la siguiente.

					// Se aplica operador de comparación estricta porque la suma de a + b debe sí o sí = c

	console.log("Se cumple que a = b + c");

}


else if (b ===  a + c) { // Segunda condición con comparación estricta porque la suma de a + c debe sí o sí = b

	console.log("Se cumple que b = a + c");


}

else if (c === a + b) { // Segunda condición con comparación estricta porque la suma de a + b debe sí o sí = c

	console.log("Se cumple que c = a + b");

}



else  {

	console.log("Los números no cumplen la condición"); // Si no se cumple ninguna de las condiciones anteriores, se indica que no cumplen con la condición


}

