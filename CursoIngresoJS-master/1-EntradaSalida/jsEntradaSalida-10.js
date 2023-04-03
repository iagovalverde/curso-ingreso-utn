/*
Nombre: Iago Valverde Pachiani
EJ: E/S 10 BIS

Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt),y tambien pedirle al usuario mediante una entrada de datos cual es el descuento a realizar, y luego mostrar el importe final con el descuento en el TextBox y el descuento realizado en un Alert.*/

function mostrarAumento()
{
	var importeIngresado;
	var descuentoPercentual;
	var valorReducido;
	var valorFinal;

	importeIngresado = document.getElementById("txtIdImporte").value;
	importeIngresado = parseFloat(importeIngresado);
	
	descuentoPercentual = prompt("Cual es el percentual de descuento?");
	descuentoPercentual = parseFloat(descuentoPercentual);

	valorFinal = importeIngresado - importeIngresado * descuentoPercentual / 100;
	valorReducido = importeIngresado - valorFinal;

	document.getElementById("txtIdResultado").value = valorFinal;

	alert("El valor reducido fue de " + valorReducido)
}

/*
function mostrarAumento()
{
	var descuentoSolicitado;
	var importeInicial;
	var descuento;
	var importeDescontado;

	descuentoSolicitado = prompt("Ingresar el descuento a realizar:");
	importeInicial = document.getElementById("txtIdImporte").value;

	descuentoSolicitado = parseFloat(descuentoSolicitado);
	importeInicial = parseFloat(importeInicial);

	descuento = importeInicial * descuentoSolicitado/100;
	importeDescontado = importeInicial - descuento;

	document.getElementById("txtIdResultado").value = importeDescontado;

	alert("El descuento realizado fue de: " + descuento);

}

*/