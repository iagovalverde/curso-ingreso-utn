/*
En el ingreso a un viaje en avion nos solicitan 
nombre, 
edad, 
sexo("f" o "m") y
estado civil("soltero", "casado" o "viudo") y 
temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	var respuesta = "si";
	var nombrePasajero;
	var edadPasajero;
	var sexoPasajero;
	var estadoCivil;
	var temperaturaCorporal;

	var banderaTemperatura = 0;
	var temperaturaMasAlta;
	var personaTemperaturaMasAlta;
	var mayoresViudos = 0;
	var hombreSolteroViudo = 0;
	var idosoFiebre = 0;
	var hombreSoltero = 0;
	var sumaEdadHombreSoltero = 0;
	var promedio;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var notificacion;

	while(respuesta == "si")
	{
		nombrePasajero = prompt("Ingrese nombre: ");

		edadPasajero = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edadPasajero))
		{
			edadPasajero = parseInt(prompt("Reingrese edad: "));
		}

		sexoPasajero = prompt("Ingrese sexo: [f / m]");
		while(!(sexoPasajero == "f" || sexoPasajero == "m"))
		{
			sexoPasajero = prompt("Reingrese sexo: [f / m]");
		}

		estadoCivil = prompt("Ingrese Estado Civil: [soltero / casado / viudo]");
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
		{
			estadoCivil = prompt("Reingrese Estado Civil: [soltero / casado / viudo]");
		}

		temperaturaCorporal = parseFloat(prompt("Ingrese temperatura corportal: "));
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = parseFloat(prompt("Reingrese temperatura corportal: "));
		}

		if(banderaTemperatura == 0 || temperaturaMasAlta < temperaturaCorporal)
		{
			temperaturaMasAlta = temperaturaCorporal;
			personaTemperaturaMasAlta = nombrePasajero;
			banderaTemperatura = 1;
		}

		if(edadPasajero > 17 && estadoCivil == "viudo")
		{
			mayoresViudos ++;
		}

		if(sexoPasajero == "m")
		{
			if(estadoCivil == "soltero" || estadoCivil == "viudo")
			{
				hombreSolteroViudo ++;
			}
		}

		if(edadPasajero > 60 && temperaturaCorporal > 38)
		{
			idosoFiebre ++;
		}

		if(sexoPasajero == "m")
		{
			if(estadoCivil == "soltero")
			{
				hombreSoltero ++;
				sumaEdadHombreSoltero += edadPasajero;
			}
		}


		respuesta = prompt("Hay más pasajeros para ingresar? [si / no]");
	}

	if(hombreSoltero > 0)
	{
		promedio = sumaEdadHombreSoltero / hombreSoltero;
	}
	else
	{
		promedio = "No se ingresaron hombres solteros";
	}
	
	mensajeA = "La persona con temperatura más alta: " + personaTemperaturaMasAlta;
	mensajeB = "Mayores de edad y viudos: " + mayoresViudos;
	mensajeC = "Hombres solteros o viudos: " + hombreSolteroViudo;
	mensajeD = "Personas con más de 60 y más de 38 temperatura corporal: " + idosoFiebre;
	mensajeE = "Promedio de edad entre hombres solteros: " + promedio;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" + mensajeD + "<br>" + mensajeE;

	document.write(notificacion);
}

/*
	var nombrePasajero;
	var edadPasajero;
	var sexoPasajero;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta = "si";
	var banderaTemperatura = 0;
	var personaTemperaturaMasAlta;
	var temperaturaMasAlta;
	var mayoresViudos = 0;
	var contadorHombreSoltero = 0;
	var contadorHombreViudo = 0;
	var sumaEdadHombreSoltero = 0;
	var contadorIdosoFiebre = 0;
	var promedioEdadHombresSolteros;
	var acumuladorHombreSolteroViudo = 0;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var notificacion;

	while(respuesta == "si")
	{
		nombrePasajero = prompt("Ingrese nombre: ");

		edadPasajero = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edadPasajero) || edadPasajero < 1)
		{
			edadPasajero = parseInt(prompt("Reingrese edad: "));
		}

		sexoPasajero = prompt("Ingrese sexo: [f / m]");
		while(!(sexoPasajero == "f" || sexoPasajero == "m"))
		{
			sexoPasajero = prompt("Reingrese sexo: [f / m]");
		}

		estadoCivil = prompt("Ingrese Estado Civil: [soltero / casado / viudo]");
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
		{
			estadoCivil = prompt("Reingrese Estado Civil: [soltero / casado / viudo]");
		}

		temperaturaCorporal = parseFloat(prompt("Ingrese temperatura corporal: "));
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = parseFloat(prompt("Reingrese temperatura corporal: "));
		}

		// A
		if(banderaTemperatura == 0 || temperaturaMasAlta < temperaturaCorporal)
		{
			temperaturaMasAlta = temperaturaCorporal;
			personaTemperaturaMasAlta = nombrePasajero;
			banderaTemperatura = 1;
		}

		// B
		if(edadPasajero > 17 && estadoCivil == "viudo")
		{
			mayoresViudos ++;
		}

		// D
		if(edadPasajero > 60 && temperaturaCorporal > 38)
		{
			contadorIdosoFiebre ++;
		}

		// C / E
		if(sexoPasajero == "m")
		{
			if(estadoCivil == "soltero")
			{
				contadorHombreSoltero ++;
				sumaEdadHombreSoltero += edadPasajero;
			}
			else
			{
				if(estadoCivil == "viudo")
				{
					contadorHombreViudo ++;
				}
			}
		}

		respuesta = prompt("Hay más pasajeros para ingresar? [si / no]")
	}

	// C 
	acumuladorHombreSolteroViudo = contadorHombreSoltero + contadorHombreViudo;

	// E
	if(contadorHombreSoltero > 0)
	{
		promedioEdadHombresSolteros = sumaEdadHombreSoltero / contadorHombreSoltero;
	}

	mensajeA = "El pasajero con más temperatura: " + personaTemperaturaMasAlta;
	mensajeB = "Mayores de edad viudos: " + mayoresViudos;
	mensajeC = "Hombres solteros o viudos: " + acumuladorHombreSolteroViudo;
	mensajeD = "Personas con más de 60 años con más de 38 temperatura: " + contadorIdosoFiebre;
	mensajeE = "Promedio de edad de los hombres solteros: " + promedioEdadHombresSolteros;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" +  mensajeD + "<br>" +  mensajeE;

	document.write(notificacion);
*/






/* 
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivil;
	var temperaturaCorporal;
	var mensaje;

	var mayorViudo = 0;
	var hombreSolteroViudo = 0;
	var terceraEdadFiebre = 0;
	var promedioEdadHombresSolteros = 0;
	var contadorHombreSoltero = 0;
	var sumaEdadHombresSolteros = 0;
	var temperaturaMasAlta;
	var banderaTemperatura = 0;
	var respuesta = "si";
	var personaTemperaturaMasAlta;

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese el nombre: ");

		edadIngresada = parseInt(prompt("Ingrese la edad: "));
		while(isNaN(edadIngresada) || edadIngresada < 1)
		{
			edadIngresada = parseInt(prompt("Reingrese una edad válida: "));
		}

		sexoIngresado = prompt("Ingrese el sexo: [f / m]");
		while(!(sexoIngresado == "f" || sexoIngresado == "m")) 
		{
			sexoIngresado = prompt("[ERROR] Reingrese el sexo: [f / m]");
		}

		estadoCivil = prompt("Ingrese el estado civil: [soltero / casado / viudo]");
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
		{
			estadoCivil = prompt("[ERROR] Reingrese el estado civil: [soltero / casado / viudo]");
		}

		temperaturaCorporal = parseFloat(prompt("Ingrese la temperatura corporal: "));
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = parseFloat(prompt("[ERROR] Reingrese la temperatura corporal: "));
		}

		// A
		if(banderaTemperatura == 0 || temperaturaMasAlta < temperaturaCorporal)
		{
			temperaturaMasAlta = temperaturaCorporal;
			personaTemperaturaMasAlta = nombreIngresado;
			banderaTemperatura = 1;
		}
		// B
		if(edadIngresada > 17 && estadoCivil == "viudo")
		{
			mayorViudo ++;
		}
		// C
		if(sexoIngresado == "m")
		{
			if(estadoCivil == "soltero" || estadoCivil == "viudo")
			{
				hombreSolteroViudo ++;
			}
		}
		// D
		if(edadIngresada > 60 && temperaturaCorporal > 38)
		{
			terceraEdadFiebre ++;
		}

		// E 
		if(sexoIngresado == "m")
		{
			if(estadoCivil == "soltero")
			{
				contadorHombreSoltero ++;
				sumaEdadHombresSolteros += edadIngresada;
			}
		}

		respuesta = prompt("Hay más pasajeros para ingresar? [ si / no ]");
	}
	
	if(contadorHombreSoltero > 0)
	{
		promedioEdadHombresSolteros = sumaEdadHombresSolteros / contadorHombreSoltero;	
	}

	mensaje = `A. La persona con más temperatura es: ${personaTemperaturaMasAlta}` + "<br>" +
			`B. De los mayores de edad ${mayorViudo} están viudos` + "<br>" + 
			`C. La cantidad de hombres solteros o viudos es: ${hombreSolteroViudo}` + "<br>" +
			`D. La cantidad de mayores de 60 con más de 38 de temperatura es: ${terceraEdadFiebre}` + "<br>" +
			`E. El promedio de edad entre los hombres solteros es: ${promedioEdadHombresSolteros}`;

	document.write(mensaje);
*/