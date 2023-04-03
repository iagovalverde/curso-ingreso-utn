/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.

Nombre: Iago Valverde Pachiani
EJ: While-05
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(!(sexoIngresado == "f" || sexoIngresado == "m"))
	{
		sexoIngresado = prompt("Reingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}