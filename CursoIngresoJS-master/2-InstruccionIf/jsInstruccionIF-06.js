/*
Nombre: Iago Valverde Pachiani
EJ: IF-06
*/

// informar si la persona es anciano(mayor a 70)

function mostrar()
{
	var edadIngresada;
	var mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 70)
	{
		mensaje = "Sos anciano";
	}
	else
	{
		if(edadIngresada > 17)
		{
			mensaje = "Sos mayor de edad";
		}
		else 
		{
			if(edadIngresada > 12)
			{
				mensaje = "Sos adolescente";
			}
			else
			{
				mensaje = "Sos niño";
			}
		}	
	}
	
	alert(mensaje);
}

/*
var edadIngresada;

edadIngresada = document.getElementById("txtIdEdad").value;
edadIngresada = parseInt(edadIngresada);

if(edadIngresada > 70)
{
	alert(`La persona tiene ${edadIngresada} años y es anciano.`)
}
else if(edadIngresada >= 18)
{
	alert(`La persona tiene ${edadIngresada} años y es MAYOR de edad.`);
}
else if(edadIngresada >= 13 && edadIngresada <= 17)
{
	alert(`La persona tiene ${edadIngresada} años y es un ADOLESCENTE.`);
}
else
{
	alert(`La persona tiene ${edadIngresada} años y es un NIÑO/A.`);
}

*/ 