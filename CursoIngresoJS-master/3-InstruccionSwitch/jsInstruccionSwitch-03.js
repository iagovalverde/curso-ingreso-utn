/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"

Nombre: Iago Valverde Pachiani
EJ: Switch 3
*/

function mostrar()
{
	var mesDelAño = txtIdMes.value;
	var mensaje;
	
	switch(mesDelAño)
	{
		case("Febrero"):
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		
		case("Enero"):
		case("Marzo"):
		case("Abril"):
		case("Mayo"):
		case("Junio"):
		case("Julio"):
		case("Agosto"):
		case("Septiembre"):
		case("Octubre"):
		case("Noviembre"):
		case("Diciembre"):
			mensaje = "Este mes tiene 30 o más días";
			break;
	}
	alert(mensaje);
}