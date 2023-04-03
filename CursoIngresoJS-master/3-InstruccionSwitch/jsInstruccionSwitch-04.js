/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

Meses con 30 días: Abril, Junio, Septiembre y Noviembre.
Meses con 31 días: Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre.
Meses con 28 días: Febrero (Menos cuando es bisiesto que tiene 29 días).

Nombre: Iago Valverde Pachiani
EJ: Switch 4
*/

function mostrar()
{
	var mesDelAño = txtIdMes.value;
	var mensaje;
	
	switch(mesDelAño)
	{	
		case("Febrero"):
			mensaje = "Este mes tiene 28 dias, menos cuando es bisiesto que tiene 29 días.";
			break;

		case("Abril"):
		case("Junio"):
		case("Septiembre"):
		case("Noviembre"):
			mensaje = "Este mes tiene 30 dias.";
			break;
	
		case("Enero"):
		case("Marzo"):
		case("Mayo"):
		case("Julio"):
		case("Agosto"):
		case("Octubre"):
		case("Diciembre"):
			mensaje = "Este mes tiene 31 dias.";
			break;
	}
	alert(mensaje);
}