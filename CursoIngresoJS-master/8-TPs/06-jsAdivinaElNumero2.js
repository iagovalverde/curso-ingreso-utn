/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var mensaje;

contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	
	console.log(numeroSecreto);
}

function verificar()
{
	numeroIngresado = document.getElementById("txtIdNumero").value;

	document.getElementById("txtIdIntentos").value = contadorIntentos;

	if(numeroIngresado == numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje = "usted es un Psíquico.";
				break;
			
			case 2:
				mensaje = "excelente percepción.";
				break;
			
			case 3:
				mensaje = "Esto es suerte.";
				break;

			case 4:
				mensaje = "Excelente técnica.";
				break;

			case 5:
				mensaje = "usted está en la media.";
				break;
			
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje = "falta técnica";
				break;

			default:
				mensaje = "afortunado en el amor!!";
				break;
		}

		alert(mensaje);
	}

	contadorIntentos ++;
}