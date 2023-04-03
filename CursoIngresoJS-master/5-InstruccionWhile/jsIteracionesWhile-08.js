/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.

Nombre: Iago Valverde Pachiani
EJ: While-08
*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if(numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			multiplicacionNegativos *= numeroIngresado;
		}

		respuesta = prompt("Queres seguir sumando? [si/no]");
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}