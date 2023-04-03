/*
Nombre: Iago Valverde Pachiani
EJ: E/S 05

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
}

/*******


Nombre: Iago Valverde Pachiani
EJ: E/S 01

Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"

function mostrar()
{
	alert("Esto funciona de maravilla");
}




La Premier League de Inglaterra necesita un sistema capaz de reunir las estadísticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.

Simulacro Parcial EJ: 1
Nombre: Iago Valverde Pachiani
Div: E


function mostrar()
{
	var respuesta = "si";
	var nombreJugador;
	var nacionalidadJugador;
	var posicionJugador;
	var cantidadTarjetasRojas;
	var goles;

	var banderaGoles = 0;
	var masGoles;
	var jugadorGoleador;

	var banderaTarjetas = 0;
	var menosTarjetas;
	var jugadorArgentinoMenosTarjetas;

	var porcentajeIngleses;
	var contadorJugadores = 0;
	var contadorJugadoresIngleses = 0;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var notificacion;


	while(respuesta == "si")
	{
		nombreJugador = prompt("Ingrese nombre: ");

		nacionalidadJugador = prompt("Ingrese nacionalidad: ");

		posicionJugador = prompt("Ingrese posicion: [arquero / defensor / mediocampista / delantero]");
		while(!(posicionJugador == "arquero" || posicionJugador == "defensor" || posicionJugador == "mediocampista" || posicionJugador == "delantero"))
		{
			posicionJugador = prompt("Reingrese posicion: [arquero / defensor / mediocampista / delantero]");
		}

		cantidadTarjetasRojas = parseInt(prompt("Ingrese cantidad tarjetas rojas: "));
		while(isNaN(cantidadTarjetasRojas) || cantidadTarjetasRojas < 0)
		{
			cantidadTarjetasRojas = parseInt(prompt("Reingrese cantidad tarjetas rojas: "));
		}

		goles = parseInt(prompt("Ingrese goles: "));
		while(isNaN(goles) || goles < 0)
		{
			goles = parseInt(prompt("Reingrese goles: "));
		}

		contadorJugadores ++;

		if(banderaGoles == 0 || masGoles < goles)
		{
			masGoles = goles;
			jugadorGoleador = nombreJugador;
			banderaGoles = 1;
		}

		if(nacionalidadJugador == "argentino")
		{
			if(banderaTarjetas == 0 || menosTarjetas > cantidadTarjetasRojas)
			{
				menosTarjetas = cantidadTarjetasRojas;
				jugadorArgentinoMenosTarjetas = nombreJugador;
				banderaTarjetas = 1;
			}
		}

		if(nacionalidadJugador == "ingles")
		{
			contadorJugadoresIngleses ++;
		}

		respuesta = prompt("Queres ingresar más jugadores? [si / no]");
	}

	porcentajeIngleses = contadorJugadoresIngleses / contadorJugadores * 100;

	mensajeA = "Goleador del torneo: " + jugadorGoleador;
	mensajeB = "Jugador argentino con menos rojas: " + jugadorArgentinoMenosTarjetas;
	mensajeC = "Porcentaje de ingleses en la liga: " + porcentajeIngleses;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC;

	document.write(notificacion);
}

*/















/*

Nombre: Iago Valverde Pachiani
EJ: E/S 02

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'

function mostrar()
{
	var pedirNombre;
	
	pedirNombre = prompt("Por favor, ingrese su nombre");
	alert("Tu nombre es: " + pedirNombre);
}



Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.

Simulacro Parcial EJ: 2
Nombre: Iago Valverde Pachiani
Div: E


function mostrar()
{
	var respuesta = "si";
	var nombreMascota;
	var edadMascota;
	var tipoMascota;
	var pesoMascota;
	var diagnostico;
	var vacunaAntirrabica;

	var banderaMasViejaVacuna = 0;
	var mascotaMasViejaVacuna;
	var edadMasViejaVacuna;
	var contadorNoVacunaConParasitos = 0;

	var contadorGatoDigestivo = 0;
	var contadorPerroDigestivo = 0;
	var contadorHamsterDigestivo = 0;
	var mayorTipoDigestivos;

	var banderaMasJoven = 0;
	var mascotaMasJoven;
	var edadMasJoven;
	var diagnosticoMasJoven;
	var contadorPerroOtitis = 0;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;

	var notificacion;
	

	while(respuesta == "si")
	{
		nombreMascota = prompt("Ingrese nombre: ");

		edadMascota = parseInt(prompt("Ingrese edad: [Entre 1 y 20]"));
		while(edadMascota < 1 || edadMascota > 20)
		{
			edadMascota = parseInt(prompt("Reingrese edad: [Entre 1 y 20]"));
		}

		tipoMascota = prompt("Ingrese tipo: [gato / perro / hamster]");
		while(!(tipoMascota == "gato" || tipoMascota == "perro" || tipoMascota == "hamster"))
		{
			tipoMascota = prompt("Reingrese tipo: [gato / perro / hamster]");
		}

		pesoMascota = parseFloat(prompt("Ingrese peso: "));
		while(pesoMascota < 1)
		{
			pesoMascota = parseFloat(prompt("Reingrese peso: "));
		}

		diagnostico = prompt("Ingrese diagnostico: [problemas digestivos  / otitis / alergias en la piel / parasitos / picazon de abeja]");
		while(!(diagnostico == "problemas digestivos" || diagnostico == "otitis" || diagnostico == "alergias en la piel" || diagnostico == "parasitos" || diagnostico == "picazon de abeja"))
		{
			diagnostico = prompt("Reingrese diagnostico: [problemas digestivos  / otitis / alergias en la piel / parasitos / picazon de abeja]");
		}

		vacunaAntirrabica = prompt("Ingrese vacuna: [si / no]");
		while(!(vacunaAntirrabica == "si" || vacunaAntirrabica == "no"))
		{
			vacunaAntirrabica = prompt("Reingrese vacuna: [si / no]");
		}

		if(vacunaAntirrabica == "si")
		{
			if(banderaMasViejaVacuna == 0 || edadMasViejaVacuna < edadMascota)
			{
				edadMasViejaVacuna = edadMascota;
				mascotaMasViejaVacuna = nombreMascota;
				banderaMasViejaVacuna = 1;
			}
		}
		
		if(vacunaAntirrabica == "no" && diagnostico == "parasitos")
		{
			contadorNoVacunaConParasitos ++;
		}

		switch(tipoMascota)
		{
			case "gato":
				if(diagnostico == "problemas digestivos")
				{
					contadorGatoDigestivo ++;
				}
				break;

			case "perro":
				if(diagnostico == "problemas digestivos")
				{
					contadorPerroDigestivo ++;
				}
				if(diagnostico == "otitis")
				{
					contadorPerroOtitis ++;
				}
				break;

			case "hamster":
				if(diagnostico == "problemas digestivos")
				{
					contadorHamsterDigestivo ++;
				}
				break;
		}

		if(banderaMasJoven == 0 || edadMasJoven > edadMascota)
		{
			edadMasJoven = edadMascota;
			mascotaMasJoven = nombreMascota;
			diagnosticoMasJoven = diagnostico;
			banderaMasJoven = 1;
		}

		respuesta = prompt("Hay más mascotas para ingresar? [si / no]");
	}

	if(contadorGatoDigestivo > contadorPerroDigestivo && contadorGatoDigestivo > contadorHamsterDigestivo)
	{
		mayorTipoDigestivos = "gato";
	}
	else
	{
		if(contadorPerroDigestivo > contadorHamsterDigestivo && contadorPerroDigestivo >= contadorGatoDigestivo)
		{
			mayorTipoDigestivos = "perro";
		}
		else
		{
			mayorTipoDigestivos = "hamster";
		}
	}

	mensajeA = "Mascota mas vieja con vacuna: " + mascotaMasViejaVacuna;
	mensajeB = "Cantidad mascotas sin vacuna y con parasitos: " + contadorNoVacunaConParasitos;
	mensajeC = "Tipo mascota con mas problemas digestivos: " + mayorTipoDigestivos;
	mensajeD = "Nombre mas joven: " + mascotaMasJoven + "\nEdad: " + edadMasJoven + "\nDiagnostico: " + diagnosticoMasJoven;
	mensajeE = "Perros con Otitis: " + contadorPerroOtitis;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" + mensajeD + "<br>" + mensajeE;

	document.write(notificacion);
}

*/















/*

Nombre: Iago Valverde Pachiani
EJ: E/S 03

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'

function mostrar()
{
	var nombreIngresado;

	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert("Tu nombre es: " + nombreIngresado);
}






Simulacro Parcial EJ: 3
Nombre: Iago Valverde Pachiani
Div: E

Una fábrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos más abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de  muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podrán ser cero ni negativo.


function mostrar()

{
	var respuesta = "si";
	var nombreMueble;
	var materialMueble;
	var pesoMueble;
	var alturaMueble;
	var anchuraMueble;
	var precioMueble;

	var contadorMuebles = 0;
	var acumuladorPrecioMuebles = 0;
	var promedioPrecioMuebles;

	var alturaMetalMasAlto;
	var banderaMetalMasAlto = 0;
	var nombreMuebleMetalMasAlto;

	var banderaMuebleMasLiviano = 0;
	var pesoMuebleMasLiviano;
	var nombreMuebleMasLiviano;

	var contadorMueblesMadera = 0;
	var contadorMueblesMetal = 0;
	var contadorMueblesVidrio = 0;

	var porcentajeMuebleMadera;
	var porcentajeMuebleMetal;
	var porcentajeMuebleVidrio;

	var valorTotalMadera;
	var descuento;
	var tarifaMadera;
	var acumuladorPrecioMadera = 0;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var mensajeF;
	var mensajeG;
	var notificacion;

	while(respuesta == "si")
	{
		nombreMueble = prompt("Ingrese nombre: ");

		materialMueble = prompt("Ingrese material: [madera / metal / vidrio]");
		while(!(materialMueble == "madera" || materialMueble == "metal" || materialMueble == "vidrio"))
		{
			materialMueble = prompt("Reigrese material: [madera / metal / vidrio]");
		}

		pesoMueble = parseFloat(prompt("Ingrese peso: "));
		alturaMueble = parseFloat(prompt("Ingrese altura: "));
		anchuraMueble = parseFloat(prompt("Ingrese anchura: "));

		precioMueble = parseFloat(prompt("Ingrese precio: "));
		while(precioMueble < 1)
		{
			precioMueble = parseFloat(prompt("Reingrese precio: "));
		}

		contadorMuebles ++;
		acumuladorPrecioMuebles += precioMueble;

		switch(materialMueble)
		{
			case "madera":
				tarifaMadera = 1.15;
				contadorMueblesMadera ++;
				acumuladorPrecioMadera += precioMueble;
				break;

			case "metal":
				descuento = 0.9;
				contadorMueblesMetal ++;
				if(banderaMetalMasAlto == 0 || alturaMetalMasAlto < alturaMueble)
				{	
					alturaMetalMasAlto = alturaMueble;
					nombreMuebleMetalMasAlto = nombreMueble;
					banderaMetalMasAlto = 1;
				}
				break;

			case "vidrio":
				descuento = 0.9;
				contadorMueblesVidrio ++;
				break;
		}

		if(banderaMuebleMasLiviano == 0 || pesoMuebleMasLiviano > pesoMueble)
		{
			pesoMuebleMasLiviano = pesoMueble;
			nombreMuebleMasLiviano = nombreMueble;
			banderaMuebleMasLiviano = 1;
		}

		respuesta = prompt("Vas a comprar más muebles? [si / no]");
	}

	if(banderaMetalMasAlto == 0)
	{
		nombreMuebleMetalMasAlto = "No se compraron muebles de metal";
	}
	
	promedioPrecioMuebles = acumuladorPrecioMuebles / contadorMuebles;

	porcentajeMuebleMadera = contadorMueblesMadera / contadorMuebles * 100;
	porcentajeMuebleMetal = contadorMueblesMetal / contadorMuebles * 100;
	porcentajeMuebleVidrio = contadorMueblesVidrio / contadorMuebles * 100;

	valorTotalMadera = acumuladorPrecioMadera * tarifaMadera;

	mensajeA = "Precio promedio por mueble vendido: " + promedioPrecioMuebles;
	mensajeB = "Cantidad total de muebles de madera: " + contadorMueblesMadera;
	mensajeC = "El mueble de metal más alto: " + nombreMuebleMetalMasAlto;
	mensajeD = "El mueble más liviano: " + nombreMuebleMasLiviano;
	mensajeE = "Porcentaje de muebles madera: " + porcentajeMuebleMadera + "\nPorcentaje metal: " + porcentajeMuebleMetal + "\nPorcentaje vidrio: " + porcentajeMuebleVidrio;
	mensajeF = "Monto total sin descuentos: " + acumuladorPrecioMuebles;
	mensajeG = "Monto total recaudado de muebles de madera con descuento: " + valorTotalMadera;
	
	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" + mensajeD + "<br>" + mensajeE + "<br>" + mensajeF + "<br>" + mensajeG;

	document.write(notificacion);
}


*/






