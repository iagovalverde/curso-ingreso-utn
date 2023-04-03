/*
Nombre: Iago Valverde Pachiani
EJ: IF-10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var notaExamen;
	var mensaje;

	notaExamen = Math.floor(Math.random() * 10) + 1;
	
	if(notaExamen > 8)
	{
		mensaje= `EXCELENTE, sacaste un ${notaExamen} en el examen.`;
	}
	else
	{
		if(notaExamen > 3)
		{
			mensaje = `APROBÓ, sacaste un ${notaExamen} en el examen.`;
		}
		else
		{
			mensaje = `Vamos, la proxima se puede! Sacaste un ${notaExamen} en el examen.`;
		}
	}

	alert(mensaje);
}