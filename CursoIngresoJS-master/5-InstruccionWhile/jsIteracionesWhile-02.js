/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.

Nombre: Iago Valverde Pachiani
EJ: While-02
*/
function mostrar()
{
	var contador;
	contador = 10; 

	while(contador > 0)
	{
		alert("numero: " + contador);

		// variable de control
		contador = contador - 1;
		// contador -=1; contador +=1;
		// contador --; contador ++;
	}
}