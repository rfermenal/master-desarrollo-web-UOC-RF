/*Escribid un programa en JavaScript que, dada una fecha como un número de día (Número natural entre 1 y 31, 
ambos incluidos) y un número de mes (número natural entre 1 y 12, ambos incluidos), 
muestre por consola el nombre del mes y la estación del año, según estos rangos de datos:

Entre 21/03 y 20/06 la estación es "primavera"
Entre 21/06 y 22/09 la estación es "verano"
Entre 23/09 y 20/12 la estación es "otoño"
Entre 21/12 y 20/03 la estación es "invierno"

Ejemplos:

Si el día es 1 y el mes es 5 debe escribir "mayo" y "primavera".
Si el día es 25 y el mes es 6 debe escribir "junio" y "verano".
Si el día es 31 y el mes es 12 debe escribir "diciembre" e "invierno".*/


let dia = parseInt(prompt("Por favor indica el Día")); //Solicitamos día

let mes = parseInt(prompt("Por favor indica el Mes")); //Solicitamos el mes

let Mes // Creamos la variable Mes para "alojar" o identificar el mes indicado por el usuario

switch (mes) {
  case 1:
    Mes = "Enero";
    break;
    
  case 2:
    Mes = "Febrero";
    break;
    
  case 3:
    Mes = "Marzo";
    break;
    
  case 4:
    Mes = "Abril";
    break;
    
  case 5:
    Mes = "Mayo";
    break;
    
   case 6:
    Mes = "Junio";
    break;
    
    case 7:
    Mes = "Julio";
    break;
    
	case 8:
   	Mes = "Agosto";
    break;
    
	case 9:
    Mes = "Septiembre";
    break;
    
    case 10:
    Mes = "Octubre";
    break;
    
	case 11:
    Mes = "Noviembre";
    break;
    
	case 12:
    Mes = "Diciembre";
    break;
    
    
  default:
    console.log("No has colocado un mes válido | Debe ser de 1 al 12");
}


let estacion;

if ((mes === 3 && dia >= 21) || (mes > 3 && mes < 6) || (mes === 6 && dia <= 20)) {
    estacion = "Primavera";
}
else if ((mes === 6 && dia >= 21) || (mes > 6 && mes < 9) || (mes === 9 && dia <= 22)) {
    estacion = "Verano";
}
else if ((mes === 9 && dia >= 23) || (mes > 9 && mes < 12) || (mes === 12 && dia <= 20)) {
    estacion = "Otoño";
}
else {
    estacion = "Invierno";
}


console.log(Mes + " "+ estacion);
