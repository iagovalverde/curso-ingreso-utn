/*
Nombre: Iago Valverde Pachiani
EJ: IF-01
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada == 15)
	{
		alert("Niña bonita");
	}
	else
	{
		alert("ok");
	}
	
}