/*
Nombre: Iago Valverde Pachiani
EJ: IF-04
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert(`La persona es un adolescente con ${edadIngresada} años.`);
	}
	else
	{
		alert("ok");
	}
}