/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

Nombre: Iago Valverde Pachiani
EJ: While-07
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	var promedio;
	contador = 0;
	acumulador = 0;
	respuesta ='si';

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numeroIngresado;
		//acumulador+= numeroIngresado;
		contador++;

		respuesta = prompt("Queres seguir sumando? [si/no]");
	}
	
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}