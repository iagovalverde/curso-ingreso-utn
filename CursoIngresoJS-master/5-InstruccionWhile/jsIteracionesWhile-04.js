/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.

Nombre: Iago Valverde Pachiani
EJ: While-04
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	//while(!(numeroIngresado >= 0 && numeroIngresado <= 9))
	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = parseInt(prompt("Reingrese un número entre 0 y 9."));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
}