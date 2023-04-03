/*
Nombre: Iago Valverde Pachiani
EJ: E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var total;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = Number.parseInt(primerNumero);
	segundoNumero = Number.parseInt(segundoNumero);

	total = primerNumero + segundoNumero;
	
	alert("La suma entre " + primerNumero + " y " + segundoNumero + " es " + total);
}

function restar()
{	
	var primerNumero;
	var segundoNumero;
	var total;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = Number.parseInt(primerNumero);
	segundoNumero = Number.parseInt(segundoNumero);

	total = primerNumero - segundoNumero;
	
	alert("El resto entre " + primerNumero + " y " + segundoNumero + " es " + total);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var total;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = Number.parseInt(primerNumero);
	segundoNumero = Number.parseInt(segundoNumero);

	total = primerNumero * segundoNumero;
	
	alert("La multiplicacion entre " + primerNumero + " y " + segundoNumero + " es " + total);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var total;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;
	
	primerNumero = Number.parseInt(primerNumero);
	segundoNumero = Number.parseInt(segundoNumero);

	total = primerNumero / segundoNumero;
	
	alert("La division entre " + primerNumero + " y " + segundoNumero + " es " + total);
}

