/*
Nombre: Iago Valverde Pachiani
EJ: IF-02
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18)
	{
		alert("Persona mayor de edad");
	}
	else 
	{
		alert("ok");
	}
}