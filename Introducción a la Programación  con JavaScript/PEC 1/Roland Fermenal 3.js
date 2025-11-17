
/*Escribir un código que calcule, dado el sueldo del empleado, lo que tiene que 
cobrar sabiendo que se le tiene que aplicar al sueldo una retención del 20%.*/

let sueldoBruto = 1381.33; // Indicamos el sueldo total de la persona.

sueldoBruto = parseFloat (sueldoBruto); 

let retencion = sueldoBruto * 0.20; // Calculamos el 20% de retención indicado sobre el sueldo de la persona

let sueldoNeto = sueldoBruto - retencion; // restamos la retención al sueldo la persona

console.log("El sueldo neto a cobrar es de: " +  sueldoNeto.toFixed(2) +  " Euros"); // Indicamos el monto total a recibir