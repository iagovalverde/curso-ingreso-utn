/*
Nombre: Iago Valverde Pachiani
EJ: E/S 09 BIS
Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt), y tambien pedirle al usuario mediante una entrada de datos cual es el aumento a realizar, y luego mostrar el importe con el aumento en el TextBox"RESULTADO".*/

function mostrarAumento()
{	
	var importeIngresado;
	var aumentoPercentual;
	var valorFinal;

	importeIngresado = document.getElementById("txtIdSueldo").value;
	importeIngresado = parseInt(importeIngresado);
	
	aumentoPercentual = prompt("Cual es el percentual de aumento?");

	valorFinal = importeIngresado + importeIngresado * aumentoPercentual / 100;

	document.getElementById("txtIdResultado").value = valorFinal;
}

