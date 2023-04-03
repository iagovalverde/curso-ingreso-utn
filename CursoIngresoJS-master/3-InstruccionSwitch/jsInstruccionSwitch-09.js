/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

Nombre: Iago Valverde Pachiani
EJ: Switch 9
*/

function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioFinal;
	var porcentaje;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 1.2;
					break;

				case "Cordoba":
				case "Cataratas":
					porcentaje = 0.9;
					break;

				case "Mar del plata":
					porcentaje = 0.8;
					break;
			}
			break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.8;
					break;

				case "Cordoba":
				case "Cataratas":
					porcentaje = 1.1;
					break;

				case "Mar del plata":
					porcentaje = 1.2;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":	
				case "Mar del plata":
					porcentaje = 1.1;
					break;

				case "Cordoba":
					porcentaje = 1;
					break;
			}
			break;
	}
	precioFinal = 15000 * porcentaje;
	alert(precioFinal);
}