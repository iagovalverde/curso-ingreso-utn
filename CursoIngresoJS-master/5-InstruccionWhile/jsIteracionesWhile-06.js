/*
Nombre: Iago Valverde Pachiani
EJ: While-06
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0 ;
	
	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;
	}
	
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}