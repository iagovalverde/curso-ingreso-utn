/*
Nombre: Iago Valverde Pachiani
EJ: TP 2 

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
    var largoTerreno;
    var anchoTerreno;
    var perimetro;
    var alambreTotal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = (largoTerreno + anchoTerreno) * 2;
    alambreTotal = perimetro * 3;

    alert("El total de alambre necesario acorde el perimetro del terreno es " + alambreTotal);
}

function Circulo () 
{
	var radioTerreno;
    var perimetro; 
    var alambreTotal;

    radioTerreno = document.getElementById("txtIdRadio").value;

    radioTerreno = parseFloat(radioTerreno);

    perimetro = 2 * 3.14 * radioTerreno;
    alambreTotal = perimetro * 3;

    alert("El total de alambre necesario acorde el perimetro del terreno es " + alambreTotal);
}

function Materiales () 
{
	var largoTerreno;
    var anchoTerreno;
    var areaTerreno;
    var bolsaCemento;
    var bolsaCal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    areaTerreno = largoTerreno * anchoTerreno;
    
    bolsaCemento = areaTerreno * 2;
    bolsaCal = areaTerreno * 3;

    alert(`Para un terreno de area ${areaTerreno}m cuadrados se necesitan ${bolsaCemento} bolsas de cemento y ${bolsaCal} bolsas de cal.`);
}
