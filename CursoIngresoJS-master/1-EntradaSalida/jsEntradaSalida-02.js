/*

*/


function mostrar()
{

}






















/*
Nombre: Iago Valverde Pachiani
Div: E
EJ: 2 Examen Ingreso

Valve nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un Juego 
en particular, con los atributos definidos más abajo).

Se debe ingresar en cada venta.
-Nombre del juego
-Cantidad de jugadores(1 a 4)
-Edad permitida(Validar que sea mayor a 17 años)
-Nombre del comprador
-Tipo de juego(“plataforma”,”Arcade”,”Online”) 
-Precio

Debido a la suba del dólar  el gobierno pone un impuesto del 15% ante la compra de Juegos de plataforma.
Los Juegos Arcade tienen un 10% de descuento.

Se pide

a)Nombre del comprador más joven que solo compró juegos de plataforma.
b)Cantidad total de juegos vendidos que solo sean de 4 jugadores 
c)Qué tipo de juego fue el más vendió 
d)Nombre del juego más caro
e)Porcentaje (promedio) de Edades de los compradores de juegos
f)Monto total recaudado bruto de todos los Juegos (sin descuentos ni impuestos)

NOTA: Los precios no podrán ser cero ni negativo.


function mostrar()
{
	var respuesta = "si";
	var nombreJuego;
	var cantidadJugadores;
	var edadPermitida;
	var nombreComprador;
	var tipoJuego;
	var precioJuego;

	var banderaMasJoven = 0;
	var nombreJugadorMasJoven;
	var edadJugadorMasJoven;

	var contadorJuegoPlataforma = 0;
	var contadorJuegoArcade = 0;
	var contadorJuegoOnline = 0;
	var tipoMasVendido;

	var banderaJuegoMasCaro = 0;
	var nombreJuegoMasCaro;
	var precioJuegoMasCaro;

	var contadorCompradores = 0;
	var acumuladorEdadJugadores = 0;
	var promedioEdadJugadores;
	var contadorJuegos4Jugadores = 0;
	var montoTotal = 0;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var mensajeF;
	var notificacion;

	while(respuesta == "si")
	{
		nombreJuego = prompt("Ingrese nombre juego: ");

		cantidadJugadores = parseInt(prompt("Ingrese cantidad jugadores: [1 a 4]"));
		while(cantidadJugadores < 1 || cantidadJugadores > 4)
		{
			cantidadJugadores = parseInt(prompt("Reingrese cantidad jugadores: [1 a 4]"));
		}

		edadPermitida = parseInt(prompt("Ingrese edad permitida: [mayor a 17]"));
		while(edadPermitida < 18)
		{
			edadPermitida = parseInt(prompt("Reingrese edad permitida: [mayor a 17]"));
		}

		nombreComprador = prompt("Ingrese nombre comprador: ");

		tipoJuego = prompt("Ingrese tipo de juego: [plataforma / arcade / online]");
		while(!(tipoJuego == "plataforma" || tipoJuego == "arcade" || tipoJuego == "online"))
		{
			tipoJuego = prompt("Reingrese tipo de juego: [plataforma / arcade / online]");
		}

		precioJuego = parseFloat(prompt("Ingrese precio juego: "));
		while(precioJuego < 1)
		{
			precioJuego = parseFloat(prompt("Reingrese precio juego: "));
		}

		contadorCompradores ++;
		acumuladorEdadJugadores += edadPermitida;
		montoTotal += precioJuego;

		if(tipoJuego == "plataforma")
		{
			if(banderaMasJoven == 0 || edadJugadorMasJoven > edadPermitida)
			{	
				edadJugadorMasJoven = edadPermitida;
				nombreJugadorMasJoven = nombreComprador;
				banderaMasJoven = 1;
			}
			
		}

		switch(tipoJuego)
		{
			case "plataforma":
				contadorJuegoPlataforma ++;
				break;

			case "arcade":
				contadorJuegoArcade ++;
				break;

			case "online":
				contadorJuegoOnline ++;
				break;
		}


		if(cantidadJugadores == 4)
		{
			contadorJuegos4Jugadores ++;
		}

		if(banderaJuegoMasCaro == 0 || precioJuegoMasCaro < precioJuego)
		{
			precioJuegoMasCaro = precioJuego;
			nombreJuegoMasCaro = nombreJuego;
			banderaJuegoMasCaro = 1;
		}

		respuesta = prompt("Compras más juegos? [si / no]");
	}
	
	promedioEdadJugadores = acumuladorEdadJugadores / contadorCompradores;

	if(contadorJuegoPlataforma > contadorJuegoArcade && contadorJuegoPlataforma > contadorJuegoOnline)
	{
		tipoMasVendido = "plataforma";
	}
	else
	{
		if(contadorJuegoArcade > contadorJuegoOnline && contadorJuegoArcade >= contadorJuegoPlataforma)
		{
			tipoMasVendido = "arcade";
		}
		else
		{
			tipoMasVendido = "online";
		}
	}

	mensajeA = "Nombre del comprador más joven que solo compró juegos de plataforma: " + nombreJugadorMasJoven;

	mensajeB = "Cantidad total de juegos vendidos que solo son de 4 jugadores: " + contadorJuegos4Jugadores;

	mensajeC = "Tipo juego mas vendido: " + tipoMasVendido;

	mensajeD = "Nombre del juego más caro: " + nombreJuegoMasCaro;

	mensajeE = "Promedio edad jugadores: " + promedioEdadJugadores;

	mensajeF = "Monto total sin descuentos: " + montoTotal;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" + mensajeD + "<br>" + mensajeE + "<br>" + mensajeF;

	document.write(notificacion);
}

*/