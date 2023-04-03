/*
Nombre: Iago Valverde Pachiani
EJ: E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var restoDivision;

	dividendo = document.getElementById("txtIdNumeroDividendo").value; 
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	restoDivision = dividendo % divisor;

	alert("El resto de la division entre " + dividendo + " y " + divisor + " es " + restoDivision);
}
