/*
Nombre: Iago Valverde Pachiani
EJ: IF-05
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 13 || edadIngresada > 17)
	{
		alert(`La persona tiene ${edadIngresada} años y NO es un adolescente.`);
	}
	else 
	{
		alert("ok");
	}
}