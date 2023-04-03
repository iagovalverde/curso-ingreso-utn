/*
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

5-solo para alumnos que crean sus propios desafíos
m- inventate uno
n- se creativo en este
o- uno facil 
p- uno dificil
*/

function mostrar()
{
	var respuesta = "si";
	var nombreTitular;
	var lugarIngresado;
	var temporadaIngresada;
	var cantidadDias;
	var importeViaje;
	var alturaPasajero;
	var pesoPasajero;
	var sexoPasajero;
	var equipajeMano;
	var metodoPago;
	
	var acumulador = 0;
	var personasTemporadaAlta = 0;
	var personasTemporadaBaja = 0;
	var acumuladorPesoVillaGessel = 0;
	var acumuladorDiasMadryn = 0;
	var acumuladorDiasVilla = 0;
	var acumuladorDiasCordoba = 0;
	var lugarMasDias;
	var sumaImportes = 0;

	var banderaMasPesado = 0;
	var banderaMasLiviano = 0;
	var pasajeroMasPesado;
	var pasajeroMasLiviano;

	var banderaImporteMadryn = 0;
	var banderaImporteVilla = 0;
	var banderaImporteCordoba = 0;
	var importeMasAltoMadryn;
	var importeMasAltoVilla;
	var importeMasAltoCordoba;
	var lugarMayorImporte;

	var banderaMujerAlta = 0;
	var mujerMasAlta;

	var contadorMercado;
	var contadorTarjeta;
	var contadorEfectivo;
	var pagoMasUtilizado;

	var contadorTemporadaAlta = 0;
	var contadorTemporadaBaja = 0;
	var pasajeroMadryn = 0;
	var pasajeroVilla = 0;
	var pasajeroCordoba = 0;

	var mensaje3i;
	var mensaje3j;

	while(respuesta == "si")
	{

		nombreTitular = prompt("Ingrese nombre: ");
		
		lugarIngresado = prompt("Ingrese lugar: [Puerto Madryn / Villa Gessel / Cordoba]" );
		while(!(lugarIngresado == "Puerto Madryn" || lugarIngresado == "Villa Gessel" || lugarIngresado == "Cordoba"))
		{
			lugarIngresado = prompt("[ERROR] Reingrese lugar: [Puerto Madryn / Villa Gessel / Cordoba]" );
		}

		temporadaIngresada = prompt("Ingrese temporada: [alta / baja]");
		while(!(temporadaIngresada == "alta" || temporadaIngresada == "baja"))
		{
			temporadaIngresada = prompt("[ERROR] Reingrese temporada: [alta / baja]");
		}

		cantidadDias = parseInt(prompt("Ingrese cantidad de dias:"));
		while(isNaN(cantidadDias))
		{
			cantidadDias = parseInt(prompt("[ERROR] Reingrese cantidad de dias:"));
		}

		importeViaje = parseFloat(prompt("Ingrese importe: "));
		while(isNaN(importeViaje))
		{
			importeViaje = parseFloat(prompt("[ERROR] Reingrese importe: "));
		}

		alturaPasajero = parseFloat(prompt("Ingrese altura pasajero: "));
		while(isNaN(alturaPasajero))
		{
			alturaPasajero = parseFloat(prompt("[ERROR] Reingrese altura pasajero: "));
		}

		pesoPasajero = parseFloat(prompt("Ingrese peso pasajero: "));
		while(isNaN(pesoPasajero))
		{
			pesoPasajero = parseFloat(prompt("[ERROR] Reingrese peso pasajero: "));
		}

		sexoPasajero = prompt("Ingrese sexo pasajero: [F / M / NB]");
		while(!(sexoPasajero == "F" || sexoPasajero == "M" || sexoPasajero == "NB"))
		{
			sexoPasajero = prompt("[ERROR] Reingrese sexo pasajero: [F / M / NB]");
		}

		equipajeMano = prompt("Viaja con equipaje de mano? [si / no]");
		while(!(equipajeMano == "si" || equipajeMano == "no"))
		{
			equipajeMano = prompt("[ERROR] Viaja con equipaje de mano? [si / no]");
		}

		metodoPago = prompt("Metodo de pago: [mercado / tarjeta / efectivo]");
		while(!(metodoPago == "mercado" || metodoPago == "tarjeta" || metodoPago == "efectivo"))
		{
			metodoPago = prompt("[ERROR] Metodo de pago: [mercado / tarjeta / efectivo]");
		}

		acumulador ++;
		// 1a / 3i
		if(temporadaIngresada == "alta")
		{
			personasTemporadaAlta ++;
			contadorTemporadaAlta ++;
		}
		else
		{
			personasTemporadaBaja ++;
			contadorTemporadaBaja ++;
		}

		// 1b / 1c / 2f
		switch(lugarIngresado)
		{
			case "Puerto Madryn":
				acumuladorDiasMadryn += cantidadDias;
				pasajeroMadryn ++;
				if(banderaImporteMadryn == 0 || importeMasAltoMadryn < importeViaje)
				{
					importeMasAltoMadryn = importeViaje;
					banderaImporteMadryn = 1;
				}
				break;

			case "Villa Gessel":
				acumuladorPesoVillaGessel += pesoPasajero;
				acumuladorDiasVilla += cantidadDias;
				pasajeroVilla ++;
				if(banderaImporteVilla == 0 || importeMasAltoVilla < importeViaje)
				{
					importeMasAltoVilla = importeViaje;
					banderaImporteVilla = 1;
				}
				break;
			
			case "Cordoba":
				acumuladorDiasCordoba += cantidadDias;
				pasajeroCordoba ++;
				if(banderaImporteCordoba == 0 || importeMasAltoCordoba < importeViaje)
				{
					importeMasAltoCordoba = importeViaje;
					banderaImporteCordoba = 1;
				}
				break;
		}

		// 1d
		sumaImportes += importeViaje;

		// 2e
		if(banderaMasPesado == 0 || pasajeroMasPesado < pesoPasajero)
		{
			pasajeroMasPesado = nombreTitular;
			banderaMasPesado = 1;
		}
		if(banderaMasLiviano == 0 || pasajeroMasLiviano > pesoPasajero)
		{
			pasajeroMasLiviano = nombreTitular;
			banderaMasLiviano = 1;
		}

		// 2g
		if(sexoPasajero == "M")
		{
			if(banderaMujerAlta == 0 || mujerMasAlta < nombreTitular)
			{
				mujerMasAlta = nombreTitular;
				banderaMujerAlta = 1;
			}
		}

		// 3h
		switch(metodoPago)
		{
			case "mercado":
				contadorMercado ++;
				break;

			case "tarjeta":
				contadorTarjeta ++;
				break;

			case "efectivo":
				contadorEfectivo ++;
				break;
		}



		respuesta = prompt("Queres ingresar más pasajeros? [si / no]")
	}


	if(acumuladorDiasMadryn > acumuladorDiasVilla && acumuladorDiasMadryn > acumuladorDiasCordoba)
	{
		lugarMasDias = "Puerto Madryn";
	}
	else
	{
		if(acumuladorDiasVilla > acumuladorDiasCordoba && acumuladorDiasVilla >= acumuladorDiasMadryn)
		{
			lugarMasDias = "Villa Gessel";
		}
		else
		{
			lugarMasDias = "Cordoba";
		}
	}

	// 2f
	if(importeMasAltoMadryn > importeMasAltoVilla && importeMasAltoMadryn > importeMasAltoCordoba)
	{
		lugarMayorImporte = "Puerto Madryn";
	}
	else
	{
		if(importeMasAltoVilla > importeMasAltoCordoba && importeMasAltoVilla >= importeMasAltoMadryn)
		{
			lugarMayorImporte = "Villa Gessel";
		}
		else
		{
			lugarMayorImporte = "Cordoba";
		}
	}

	// 3h 
	if(contadorMercado > contadorTarjeta && contadorMercado > contadorEfectivo)
	{
		pagoMasUtilizado = "mercado";
	}
	else
	{
		if(contadorTarjeta > contadorEfectivo && contadorTarjeta >= contadorMercado)
		{
			pagoMasUtilizado = "tarjeta";
		}
		else
		{
			pagoMasUtilizado = "efectivo";
		}
	}

	// 3i
	if(contadorTemporadaAlta > contadorTemporadaBaja)
	{
		mensaje3i = "Se viajo más en temporada alta";
	}
	else
	{
		mensaje3i = "Se viajo más en temporada baja";
	}

	// 3j
	if(pasajeroMadryn > pasajeroVilla && pasajeroMadryn > pasajeroCordoba)
	{
		mensaje3j = "Madryn tuvo más pasajeros";
	}
	else
	{
		if(pasajeroVilla > pasajeroCordoba && pasajeroVilla >= pasajeroMadryn)
		{
			mensaje3j = "Villa tuvo más pasajeros";
		}
		else
		{
			mensaje3j = "Cordoba tuvo más pasajeros";
		}
	}

}

