/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

Nombre: Iago Valverde Pachiani
EJ: Switch 8
*/

function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia": 
			mensaje = "Hace frio en ese destino";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor en ese destino";
			break;
	}
	alert(mensaje);
}