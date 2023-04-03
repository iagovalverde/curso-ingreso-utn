/*
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  Dicho parque se caracteriza por su variedad de montañas rusas. Se pide el ingreso del 
nombre del visitante,
la edad (mayores a 12 años),
tipo de pasaporte (sin pasaporte, convencional, premium), 
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%).

Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 
La recaudación en efectivo por las tres montañas rusas.
Porcentaje de visitantes que se subieron a cada montaña rusa.
Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
*/

function mostrar()
{
	var respuesta = "si";
	var nombreVisitante;
	var edadVisitante;
	var tipoPasaporte;
	var 


	var contador = 0;




}
















/*
Nombre: Iago Valverde Pachiani
Div: E
EJ: 1 Examen Ingreso

Aerolíneas Argentinas nos pide hacer una estadística de sus pasajeros a los distintos destinos que ofrece .
Para ellos se pide realizar una app.

Se debe ingresar por cada pasajero

-Nombre del Pasajero
-Destino(“Córdoba”, “Mendoza”, “Neuquén”, “Exterior”)
-Clase (“Ejecutiva”, “Primera”, “Turista”)
-Peso de equipaje de mano(hasta 25 kg inclusive)
-Apellido del Piloto (“Perez”, “Rodriguez”, “Fernandez”)

Se necesita saber

a)El nombre del piloto que llevó más pasajeros a Mendoza.
b)El equipaje más liviano.
c)El promedio de pasajeros que viajaron al Exterior.

NOTA: Deben poder ingresar todos números positivos, no se deben pueden ingresar números negativos.


function mostrar()
{
	var respuesta = "si";
	var nombrePasajero;
	var destinoPasajero;
	var clasePasajero;
	var pesoEquipajeMano;
	var apellidoPiloto;

	var contadorPilotoPerezMendoza = 0;
	var contadorPilotoRodriguezMendoza = 0;
	var contadorPilotoFernandezMendoza = 0;
	var pilotoMasPasajerosMendoza;

	var banderaEquipajeMasLiviano = 0;
	var equipajeMasLiviano;
	var contadorExterior = 0;

	var contadorPasajeros = 0;
	var promedioPasajerosExterior;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var notificacion;

	while(respuesta == "si")
	{
		nombrePasajero = prompt("Ingrese nombre: ");

		destinoPasajero = prompt("Ingrese destino: [Cordoba / Mendoza / Neuquen / Exterior]");
		while(!(destinoPasajero == "Cordoba" || destinoPasajero == "Mendoza" || destinoPasajero == "Neuquen" || destinoPasajero == "Exterior"))
		{
			destinoPasajero = prompt("Reingrese destino: [Cordoba / Mendoza / Neuquen / Exterior]");
		}

		clasePasajero = prompt("Ingrese clase: [ejecutiva / primera / turista]");
		while(!(clasePasajero == "ejecutiva" || clasePasajero == "primera" || clasePasajero == "turista"))
		{
			clasePasajero = prompt("Reingrese clase: [ejecutiva / primera / turista]");
		}

		pesoEquipajeMano = parseFloat(prompt("Ingrese peso equipaje: [Hasta 25kg]"));
		while(pesoEquipajeMano < 1 || pesoEquipajeMano > 25)
		{
			pesoEquipajeMano = parseFloat(prompt("Reingrese peso equipaje: [Hasta 25kg]"));
		}

		apellidoPiloto = prompt("Ingrese apellido piloto: [Perez / Rodriguez / Fernandez]");
		while(!(apellidoPiloto == "Perez" || apellidoPiloto == "Rodriguez" || apellidoPiloto == "Fernandez"))
		{
			apellidoPiloto = prompt("Reingrese apellido piloto: [Perez / Rodriguez / Fernandez]");
		}

		contadorPasajeros ++;

		if(banderaEquipajeMasLiviano == 0 || equipajeMasLiviano > pesoEquipajeMano)
		{
			equipajeMasLiviano = pesoEquipajeMano;
			banderaEquipajeMasLiviano = 1;
		}

		switch(destinoPasajero)
		{
			case "Cordoba":
				break;

			case "Mendoza":
				switch(apellidoPiloto)
				{
					case "Rodriguez":
						contadorPilotoRodriguezMendoza ++;
						break;

					case "Perez":
						contadorPilotoPerezMendoza ++;
						break;	

					case "Fernandez":
						contadorPilotoFernandezMendoza ++;
						break;
					
				}
				break;

			case "Neuquen":
				break;

			case "Exterior":
				contadorExterior ++;
				break;
		}

		respuesta = prompt("Hay mas pasajeros? [si / no]");
	}
	
	promedioPasajerosExterior = contadorExterior / contadorPasajeros;

	if(contadorPilotoFernandezMendoza > contadorPilotoPerezMendoza && contadorPilotoFernandezMendoza > contadorPilotoRodriguezMendoza)
	{
		pilotoMasPasajerosMendoza = "Fernandez";
	}
	else
	{
		if(contadorPilotoPerezMendoza > contadorPilotoRodriguezMendoza && contadorPilotoPerezMendoza >= contadorPilotoFernandezMendoza)
		{
			pilotoMasPasajerosMendoza = "Perez";
		}
		else
		{
			pilotoMasPasajerosMendoza = "Rodriguez"
		}
	}

	mensajeA = "El nombre del piloto que llevó más pasajeros a Mendoza: " + pilotoMasPasajerosMendoza;
	mensajeB = "El equipaje más liviano: " + equipajeMasLiviano;
	mensajeC = "El promedio de pasajeros que viajaron al Exterior: " + promedioPasajerosExterior;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC;

	document.write(notificacion);
}

*/


