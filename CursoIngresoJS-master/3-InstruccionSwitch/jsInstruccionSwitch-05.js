/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana."

Nombre: Iago Valverde Pachiani
EJ: Switch 5
*/

function mostrar()
{
	var horaDelDia = txtIdHora.value;
	var mensaje;
	
	switch(horaDelDia)
	{
		case("7"):
		case("8"):
		case("9"):
		case("10"):
		case("11"):
			mensaje = "Es de mañana.";
			break;

		default:
			mensaje = " "
			break;
	}
	alert(mensaje);
}