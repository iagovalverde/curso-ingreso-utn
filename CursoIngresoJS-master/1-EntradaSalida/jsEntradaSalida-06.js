/*
Nombre: Iago Valverde Pachiani
EJ: E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	primerNumero = Number.parseInt(primerNumero);
	segundoNumero = document.getElementById("txtIdNumeroDos").value;
	segundoNumero = Number.parseInt(segundoNumero);
	suma = primerNumero + segundoNumero;
	
	alert("La suma entre " + primerNumero + " y " + segundoNumero + " es " + suma);
}

