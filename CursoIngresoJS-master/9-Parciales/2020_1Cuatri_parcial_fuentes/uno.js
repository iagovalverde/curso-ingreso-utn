/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var contador = 0;
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;

	var acumuladorBarbijo = 0;
	var acumuladorJabon = 0;
	var acumuladorAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlcohol = 0;

	var banderaAlcohol = 0;
	var precioAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var mayorTipo;
	var promedio;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var notificacion;


	while(contador < 5)
	{
		tipoProducto = prompt("Ingrese tipo: [barbijo / jabon / alcohol]");
		while(!(tipoProducto == "barbijo" || tipoProducto == "jabon" || tipoProducto == "alcohol"))
		{
			tipoProducto = prompt("Reingrese tipo: [barbijo / jabon / alcohol]");
		}

		precioProducto = parseFloat(prompt("Ingrese precio: [Entre 100 y 300]"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("Reingrese precio: [Entre 100 y 300]"));
		}

		cantidadProducto = parseInt(prompt("Ingrese cantidad: [Hasta 1000]"));
		while(isNaN(cantidadProducto) || cantidadProducto < 1 || cantidadProducto > 1000)
		{
			cantidadProducto = parseInt(prompt("Reingrese cantidad: [Hasta 1000]"));
		}

		marcaProducto = prompt("Ingrese marca: ");
		fabricanteProducto = prompt("Ingrese fabricante: ");

		switch(tipoProducto)
		{
			case "barbijo":
				contadorBarbijo ++;
				acumuladorBarbijo += cantidadProducto;
				break;

			case "jabon":
				contadorJabon ++;
				acumuladorJabon += cantidadProducto;
				break;

			case "alcohol":
				contadorAlcohol ++;
				acumuladorAlcohol += cantidadProducto;
				if(banderaAlcohol == 0 || precioAlcoholBarato > precioProducto)
				{
					precioAlcoholBarato = precioProducto;
					cantidadAlcoholBarato = cantidadProducto;
					fabricanteAlcoholBarato = fabricanteProducto;
					banderaAlcohol = 1;
				}
				break;
		}

		contador ++;
	}

	if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		mayorTipo = "barbijo";
		promedio = acumuladorBarbijo / contadorBarbijo;
	}
	else
	{
		if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon >= acumuladorBarbijo)
		{
			mayorTipo = "jabon";
			promedio = acumuladorJabon / contadorJabon;
		}
		else
		{
			mayorTipo = "alcohol";
			promedio = acumuladorAlcohol / contadorAlcohol;
		}
	}

	if(banderaAlcohol == 1)
	{
		mensajeA = "Precio alcohol más barato: " + precioAlcoholBarato + "\nCantidad : " + cantidadAlcoholBarato + "\nFabricante: " + fabricanteAlcoholBarato;
	}
	else
	{
		mensajeA = "No se compraron alcoholes";
	}	
	mensajeB = "Tipo con más unidades: " + mayorTipo + "\nPromedio: " + promedio;
	mensajeC = "Unidades de jabon total: " + acumuladorJabon;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC;

	document.write(notificacion);

}



/*
	var contador = 0;
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;

	var precioAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var banderaAlcohol = 0;

	var unidadesBarbijo = 0;
	var unidadesJabon = 0;
	var unidadesAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlcohol = 0;

	var mayorTipo;
	var promedio;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var notificacion;

	while(contador < 5)
	{
		tipoProducto = prompt("Ingrese tipo: [barbijo / jabon / alcohol]");
		while(!(tipoProducto == "barbijo" || tipoProducto == "jabon" || tipoProducto == "alcohol"))
		{
			tipoProducto = prompt("Reingrese tipo: [barbijo / jabon / alcohol]");
		}

		precioProducto = parseFloat(prompt("Ingrese precio: [Entre 100 y 300]"));
		while(precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("Reingrese precio: [Entre 100 y 300]"));
		}

		cantidadProducto = parseInt(prompt("Ingrese cantidad: [Entre 1 y 1000]"));
		while(cantidadProducto < 1 || cantidadProducto > 1000)
		{
			cantidadProducto = parseInt(prompt("Reingrese cantidad: [Entre 1 y 1000]"));
		}

		marcaProducto = prompt("Ingrese marca: ");
		fabricanteProducto = prompt("Ingrese fabricante: ");

		switch(tipoProducto)
		{
			case "barbijo":
				contadorBarbijo ++;
				unidadesBarbijo += cantidadProducto;
				break;

			case "jabon":
				contadorJabon ++;
				unidadesJabon += cantidadProducto;
				break;

			case "alcohol":
				contadorAlcohol ++;
				unidadesAlcohol += cantidadProducto;
				if(banderaAlcohol == 0 || precioAlcoholBarato > precioProducto)
				{
					precioAlcoholBarato = precioProducto;
					cantidadAlcoholBarato = cantidadProducto;
					fabricanteAlcoholBarato = fabricanteProducto;
					banderaAlcohol = 1;
				}
				break;
		}

		contador ++;
	}

	if(unidadesBarbijo > unidadesJabon && unidadesBarbijo > unidadesAlcohol)
	{	
		mayorTipo = "barbijo";
		promedio = unidadesBarbijo / contadorBarbijo;
	}
	else
	{
		if(unidadesJabon > unidadesAlcohol && unidadesJabon >= unidadesBarbijo)
		{
			mayorTipo = "jabon";
			promedio = unidadesJabon / contadorJabon;
		}
		else
		{
			mayorTipo = "alcohol";
			promedio = unidadesAlcohol / contadorAlcohol;
		}
	}

	if(banderaAlcohol == 1)
	{
		mensajeA = "Alcohol más barato: " + precioAlcoholBarato + "\nCantidad: " + cantidadAlcoholBarato + "\nFabricante: " + fabricanteAlcoholBarato;
	}
	else
	{	
		mensajeA = "No se compraron alcoholes";
	}
	mensajeB = "Tipo con más unidades: " + mayorTipo + "\nPromedio: " + promedio;
	mensajeC = "Jabones en total: " + unidadesJabon;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC;

	document.write(notificacion);
*/