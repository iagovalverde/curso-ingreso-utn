/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

Nombre: Iago Valverde Pachiani
EJ: While-09
*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = 0;
	respuesta = 'si';
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingresar numero:");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Reingresar un numero correcto:");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroMaximo < numeroIngresado || banderaDelPrimero == 0)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroMinimo > numeroIngresado || banderaDelPrimero == 0)
		{
			numeroMinimo = numeroIngresado;
		}
		banderaDelPrimero = 1;

		respuesta = prompt("desea continuar?");
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}

// isNaN -> es NO un numero

/*
		if(banderaDelPrimero == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		else
		{
			if(numeroMaximo < numeroIngresado)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroMinimo > numeroIngresado)
			{
				numeroMinimo = numeroIngresado;
			}
		}
*/