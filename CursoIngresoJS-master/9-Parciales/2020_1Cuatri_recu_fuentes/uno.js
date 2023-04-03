/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;
	var contador = 0;
	var banderaJabon = 0;
	var unidadesBarbijo = 0;
	var unidadesJabon = 0;
	var unidadesAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlcohol = 0;
	var precioJabonCaro;
	var unidadesJabonCaro;
	var fabricanteJabonCaro;
	var mayorTipo;
	var promedioCompra;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var notificacion;

	while(contador < 1)
	{
		tipoProducto = prompt("Ingrese el producto [barbijo / jabon / alcohol]");
		while(!(tipoProducto == "barbijo" || tipoProducto == "jabon" || tipoProducto == "alcohol"))
		{
			tipoProducto = prompt("[ERROR] Reingrese el producto [barbijo / jabon / alcohol]");
		}

		precioProducto = parseFloat(prompt("Ingrese el precio: [Entre 100 y 300]"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("[ERROR] Reingrese el precio: [Entre 100 y 300]"));
		}

		cantidadProducto = parseInt(prompt("Ingrese la cantidad: [Hasta 1000]"));
		while(isNaN(cantidadProducto) || cantidadProducto < 1 || cantidadProducto > 1000)
		{
			cantidadProducto = parseInt(prompt("[ERROR] Reingrese la cantidad: [Hasta 1000]"));
		}

		marcaProducto = prompt("Ingrese la marca: ");
		fabricanteProducto = prompt("Ingresa el fabricante: ");

		switch(tipoProducto)
		{
			case "barbijo":
				unidadesBarbijo += cantidadProducto;
				contadorBarbijo ++;
				break;

			case "jabon":
				unidadesJabon += cantidadProducto;
				contadorJabon ++;
				if(banderaJabon == 0 || precioProducto > precioJabonCaro)
				{
					precioJabonCaro = precioProducto;
					unidadesJabonCaro = cantidadProducto;
					fabricanteJabonCaro = fabricanteProducto;
					banderaJabon = 1;
				}
				break;

			case "alcohol":
				unidadesAlcohol += cantidadProducto;
				contadorAlcohol ++;
				break;
		}

		contador ++;
	}
	
	if(unidadesBarbijo > unidadesJabon && unidadesBarbijo > unidadesAlcohol)
	{
		mayorTipo = "Barbijo";
		promedioCompra = unidadesBarbijo / contadorBarbijo;
	}
	else
	{
		if(unidadesJabon > unidadesAlcohol && unidadesJabon >= unidadesBarbijo)
		{
			mayorTipo = "Jabon"
			promedioCompra = unidadesJabon / contadorJabon;
		}
		else
		{
			mayorTipo = "Alcohol"
			promedioCompra = unidadesAlcohol / contadorAlcohol;
		}
	}

	if(banderaJabon == 1)
	{	
		mensajeA = "Precio jabon más caro: " + precioJabonCaro + "\n" + 
				" Cantidad: " + unidadesJabonCaro + "\n" +
				" Fabricante: " + fabricanteJabonCaro;
	}
	mensajeB = "Tipo con mas unidades: " + mayorTipo + " Promedio: " + promedioCompra;
			
	mensajeC = "Total de unidades de barbijo: " + unidadesBarbijo;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC;

	document.write(notificacion);
}
