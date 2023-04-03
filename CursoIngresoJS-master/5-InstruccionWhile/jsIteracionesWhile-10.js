/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). 

Nombre: Iago Valverde Pachiani
EJ: While-10
*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var mensaje;
	var numeroIngresado;

	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferenciaPositivosNegativos;
	
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingresar numero:"));

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Reingrese un numero correcto:"))
		}

		if(numeroIngresado > 0)
		{
			cantidadPositivos ++;
			sumaPositivos += numeroIngresado;
		}
		else
		{
			if(numeroIngresado == 0)
			{
				cantidadCeros ++;
			}
			else
			{
				cantidadNegativos ++;
				sumaNegativos += numeroIngresado;
			}
		}

		if(numeroIngresado % 2 == 0)
		{
			cantidadPares ++;
		}

		respuesta = prompt("desea continuar? [si / no]");
	}

	if(cantidadPositivos > 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}
	
	if(cantidadNegativos > 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	
	diferenciaPositivosNegativos = cantidadPositivos - cantidadNegativos;

	mensaje	= "La suma de los negativos es: " + sumaNegativos + "<br>" +
			"La suma de los positivos es: " + sumaPositivos + "<br>" +
			"La cantidad de positivos es: " + cantidadPositivos + "<br>" +
			"La cantidad de negativos es: " + cantidadNegativos + "<br>" +
			"La cantidad de ceros es: " + cantidadCeros + "<br>" +
			"La cantidad de numeros pares es: " + cantidadPares + "<br>" +
			"El promedio de los positivos es: " + promedioPositivos + "<br>" +
			"El promedio de los negativos es: " + promedioNegativos + "<br>" +
			"La diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos;

	document.write(mensaje);
}