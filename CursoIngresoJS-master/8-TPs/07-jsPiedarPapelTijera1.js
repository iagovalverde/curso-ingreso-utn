/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var rock;
var papel;
var tijera;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

    alert(eleccionMaquina);
}

function piedra()
{

}

function papel()
{


}

function tijera()
{
	

}
