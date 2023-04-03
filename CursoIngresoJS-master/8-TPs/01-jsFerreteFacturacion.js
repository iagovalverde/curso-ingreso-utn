/*
Nombre: Iago Valverde Pachiani
EJ: TP 1 - C

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var primerPrecioInserido;
    var segundoPrecioInserido;
    var tercerPrecioInserido;
    var precioFinal;

	primerPrecioInserido = document.getElementById("txtIdPrecioUno").value;
    segundoPrecioInserido = document.getElementById("txtIdPrecioDos").value;
    tercerPrecioInserido = document.getElementById("txtIdPrecioTres").value;

    primerPrecioInserido = parseFloat(primerPrecioInserido);
    segundoPrecioInserido = parseFloat(segundoPrecioInserido);
    tercerPrecioInserido = parseFloat(tercerPrecioInserido);

    precioFinal = primerPrecioInserido + segundoPrecioInserido + tercerPrecioInserido;

    alert("La suma de los precios de los productos es " + precioFinal);
}

function Promedio () 
{
    var primerPrecioInserido;
    var segundoPrecioInserido;
    var tercerPrecioInserido;
    var valorPromedio;

	primerPrecioInserido = document.getElementById("txtIdPrecioUno").value;
    segundoPrecioInserido = document.getElementById("txtIdPrecioDos").value;
    tercerPrecioInserido = document.getElementById("txtIdPrecioTres").value;

    primerPrecioInserido = parseFloat(primerPrecioInserido);
    segundoPrecioInserido = parseFloat(segundoPrecioInserido);
    tercerPrecioInserido = parseFloat(tercerPrecioInserido);

    valorPromedio = (primerPrecioInserido + segundoPrecioInserido + tercerPrecioInserido) / 3;

    alert("El promedio de los precios de los productos es " + valorPromedio);
}

function PrecioFinal () 
{
	var primerPrecioInserido;
    var segundoPrecioInserido;
    var tercerPrecioInserido;
    var precioFinal;

	primerPrecioInserido = document.getElementById("txtIdPrecioUno").value;
    segundoPrecioInserido = document.getElementById("txtIdPrecioDos").value;
    tercerPrecioInserido = document.getElementById("txtIdPrecioTres").value;

    primerPrecioInserido = parseFloat(primerPrecioInserido);
    segundoPrecioInserido = parseFloat(segundoPrecioInserido);
    tercerPrecioInserido = parseFloat(tercerPrecioInserido);

    precioFinal = (primerPrecioInserido + segundoPrecioInserido + tercerPrecioInserido) * 1.21;

    alert("La suma de los precios de los productos con IVA de 21% es " + precioFinal);
}