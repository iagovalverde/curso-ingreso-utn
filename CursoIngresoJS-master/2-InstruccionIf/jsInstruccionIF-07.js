/*
Nombre: Iago Valverde Pachiani
EJ: IF-07
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		alert("ok");
	}
}