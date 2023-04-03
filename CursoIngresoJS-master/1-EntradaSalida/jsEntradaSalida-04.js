/* 
Nombre: Iago Valverde Pachiani
EJ: E/S 04

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre!");

	document.getElementById("txtIdNombre").value = nombreIngresado
}
*/


/*
Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro de la venta diaria de cafés, medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.

Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

Cuantas Medialunas se compraron durante toda la jornada.
Cuál fue el producto con más unidades vendidas.
Nombre del cliente, y tipo de producto con mayor cantidad de compras
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
Informar cuál fue el producto menos vendido
*/

function mostrar()
{

}

















/*
2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)

Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.


function mostrar()
{
	var respuesta = "si";
	var tituloLibro;
	var generoLibro;
	var materialLibro;
	var importeLibro;

	var banderaDramaMasBarato = 0;
	var tituloDramaMasBarato;
	var precioDramaMasBarato;

	var contadorLibros = 0;
	var contadorFiccion = 0;
	var contadorDrama = 0;
	var contadorTerror = 0;
	var porcentajeFiccion;
	var porcentajeDrama;
	var porcentajeTerror;

	var banderaPrimerDrama = 0;
	var tituloPrimerDrama;

	var mensajeA;
	var mensajeB;
	var mensajeC;
	var notificacion;


	while(respuesta == "si")
	{
		tituloLibro = prompt("Ingrese titulo: ");

		generoLibro = prompt("Ingrese genero: [ciencia ficcion / drama / terror]");
		while(!(generoLibro == "ciencia ficcion" || generoLibro == "drama" || generoLibro == "terror"))
		{
			generoLibro = prompt("Reingrese genero: [ciencia ficcion / drama / terror]");
		}

		materialLibro = prompt("Ingrese material: [rustica / tapa dura]");
		while(!(materialLibro == "rustica" || materialLibro == "tapa dura"))
		{
			materialLibro = prompt("Reigrese material: [rustica / tapa dura]");
		}

		importeLibro = parseFloat(prompt("Ingrese importe: [menor a 30000]"));
		while(importeLibro < 1 || importeLibro > 30000)
		{
			importeLibro = parseFloat(prompt("Reingrese importe: [menor a 30000]"));
		}

		contadorLibros ++;

		switch(generoLibro)
		{
			case "ciencia ficcon":
				contadorFiccion ++;
				break;

			case "drama":
				contadorDrama ++;
				if(banderaDramaMasBarato == 0 || precioDramaMasBarato > importeLibro)
				{
					precioDramaMasBarato = importeLibro;
					tituloDramaMasBarato = tituloLibro;
					banderaDramaMasBarato = 1;
				}
				if(banderaPrimerDrama == 0)
				{
					tituloPrimerDrama = tituloLibro;
					banderaPrimerDrama = 1;
				}
				break;

			case "terror":
				contadorTerror ++;
				break;
		}

		respuesta = prompt("Desea comprar más libros? [si / no]")
	}

	porcentajeFiccion = contadorFiccion / contadorLibros * 100;
	porcentajeDrama = contadorDrama / contadorLibros * 100;
	porcentajeTerror = contadorTerror / contadorLibros * 100;

	mensajeA = "El drama mas barato: " + tituloDramaMasBarato + "\nImporte: " + precioDramaMasBarato;
	mensajeB = "Porcentaje vendido Ciencia Ficcion: " + porcentajeFiccion + "\nPorcentaje drama: " + porcentajeDrama + "\nPorcentaje terror: " + porcentajeTerror; 
	mensajeC = "El primer drama vendido: " + tituloPrimerDrama;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC;

	document.write(notificacion);
}

*/












/*
	var respuesta = "si";
	var nombreMueble;
	var materialMueble;
	var pesoMueble;
	var alturaMueble;
	var anchuraMueble;
	var precioMueble;
	
	var acumuladorPrecio = 0;
	var contadorMuebles = 0;
	var promedioPrecio;

	var contadorMueblesMadera = 0;
	var contadorMueblesMetal = 0;
	var contadorMueblesVidrio = 0;

	var banderaMetalMasAlto = 0;
	var alturaMetalMasAlto;
	var nombreMetalMasAlto;

	var banderaMuebleMasLiviano = 0;
	var pesoMasLiviano;
	var nombreMasLiviano;

	var porcentajeMuebleMadera;
	var porcentajeMuebleMetal;
	var porcentajeMuebleVidrio;

	var acumuladorPrecioMadera = 0;
	var montoTotalMadera = 0;
	var tarifa;

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

		materialMueble = prompt("Ingrese material:  [madera / metal / vidrio]");
		while(!(materialMueble == "madera" || materialMueble == "metal" || materialMueble == "vidrio"))
		{
			materialMueble = prompt("Reingrese material:  [madera / metal / vidrio]");
		}

		pesoMueble = parseFloat(prompt("Ingrese peso: "));
		alturaMueble = parseFloat(prompt("Ingrese altura: "));
		anchuraMueble = parseFloat(prompt("Ingrese anchura: "));

		precioMueble = parseFloat(prompt("Ingrese precio: "));
		while(precioMueble < 1)
		{
			precioMueble = parseFloat(prompt("Reingrese precio: "));
		}

		acumuladorPrecio += precioMueble;
		contadorMuebles++;

		if(banderaMuebleMasLiviano == 0 || pesoMasLiviano > pesoMueble)
		{
			pesoMasLiviano = pesoMueble;
			nombreMasLiviano = nombreMueble;
			banderaMuebleMasLiviano = 1;
		}

		switch(materialMueble)
		{
			case "madera":
				tarifa = 1.15;
				contadorMueblesMadera ++;
				acumuladorPrecioMadera += precioMueble;
				montoTotalMadera += acumuladorPrecioMadera * tarifa;
				break;

			case "metal":
				tarifa = 0.9;
				contadorMueblesMetal ++;
				if(banderaMetalMasAlto == 0 || alturaMetalMasAlto < alturaMueble)
				{
					alturaMetalMasAlto = alturaMueble;
					nombreMetalMasAlto = nombreMueble;
					banderaMetalMasAlto = 1;
				}
				break;

			case "vidrio":
				tarifa = 0.9;
				contadorMueblesVidrio ++;
				break;
		}

		respuesta = prompt("Queres hacer más compras? [si / no]");
	}

	promedioPrecio = acumuladorPrecio / contadorMuebles;

	porcentajeMuebleMadera = contadorMueblesMadera / contadorMuebles * 100;
	porcentajeMuebleMetal = contadorMueblesMetal / contadorMuebles * 100;
	porcentajeMuebleVidrio = contadorMueblesVidrio / contadorMuebles * 100;

	mensajeA = "Promedio de los muebles: " + promedioPrecio;
	mensajeB = "Cantidad muebles madera: " + contadorMueblesMadera;
	mensajeC = "El mueble de metal más alto: " + nombreMetalMasAlto;
	mensajeD = "El mueble más liviano: " + nombreMasLiviano;
	mensajeE = "Porcentaje madera: " + porcentajeMuebleMadera + "\nPorcentaje metal: " + porcentajeMuebleMetal + "\nPorcentaje vidrio: " + porcentajeMuebleVidrio;
	mensajeF = "Monto total de los muebles sin descuento: " + acumuladorPrecio;
	mensajeE = "Monto total de los muebles de madera con tarifa: " + montoTotalMadera;

	notificacion = mensajeA + "<br>" + mensajeB + "<br>" + mensajeC + "<br>" + mensajeD + "<br>" + mensajeE + "<br>" + mensajeF + "<br>" + mensajeG;

	document.write(notificacion);
*/

