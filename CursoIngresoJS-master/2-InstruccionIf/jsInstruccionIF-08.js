/*
Nombre: Iago Valverde Pachiani
EJ: IF-08
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18)
	{
		if(estadoCivil != "Soltero")
		{
			// nada
		}
	}
	else
	{
		if(estadoCivil == "Soltero")
		{
			alert("ES soltero y no es menor");
		}
	}
}