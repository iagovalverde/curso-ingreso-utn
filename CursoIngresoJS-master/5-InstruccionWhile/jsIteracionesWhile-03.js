/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

Nombre: Iago Valverde Pachiani
EJ: While-03
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Reingrese el número clave.");
	}

	alert("Bienvenido");
}
