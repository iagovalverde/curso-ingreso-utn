/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidadIngresada;

	// A
	edadIngresada = parseInt(prompt("Ingrese la edad: [Entre 18 y 90]"));
	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = parseInt(prompt("[ERROR] Reingrese la edad: [Entre 18 y 90]"));
	}
	document.getElementById("txtIdEdad").value = edadIngresada;

	// B
	sexoIngresado = prompt("Ingrese el sexo: [m / f]");
	while(!(sexoIngresado == "m" || sexoIngresado == "f"))
	{
		sexoIngresado = prompt("[ERROR] Reingrese el sexo: [m / f]");
	}
	if(sexoIngresado = "m")
	{
		sexoIngresado = "Masculino";
	}
	else
	{
		sexoIngresado = "Femenino";
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;

	// C
	estadoCivilIngresado = parseInt(prompt("Ingrese el Estado Civil: [1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos]"));
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = parseInt(prompt("[ERROR] Reingrese el Estado Civil: [1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos]"));
	}
	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado = "Soltero";
			break;

		case 2:
			estadoCivilIngresado = "Casado";
			break;

		case 3:
			estadoCivilIngresado = "Divorciado";
			break;

		case 4:
			estadoCivilIngresado = "Viudo";
			break;
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;

	// D
	sueldoBruto = parseInt(prompt("Ingrese su sueldo: [No menor a 8000]"));
	while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = parseInt(prompt("[ERROR] Reingrese su sueldo: [No menor a 8000]"));
	}
	document.getElementById("txtIdSueldo").value = sueldoBruto;

	// E
	numeroLegajo = parseInt(prompt("Ingrese su numero de Legajo: [4 cifras sin ceros a la izquierda]"));
	while(isNaN(numeroLegajo) || numeroLegajo < 1000 || numeroLegajo > 10000)
	{
		numeroLegajo = parseInt(prompt("[ERROR] Reingrese su numero de Legajo: [4 cifras sin ceros a la izquierda]"));
	}
	document.getElementById("txtIdLegajo").value = numeroLegajo;

	// F
	nacionalidadIngresada = prompt("Ingrese su nacionalidad: [A para argentinos / E para extranjeros / N para nacionalizados.]");
	while(!(nacionalidadIngresada == "A" || nacionalidadIngresada == "E" || nacionalidadIngresada == "N"))
	{
		nacionalidadIngresada = prompt("[ERROR] Reingrese su nacionalidad: [A para argentinos / E para extranjeros / N para nacionalizados.]");
	}
	switch(nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada = "Argentino";
			break;

		case "E":
			nacionalidadIngresada = "Extranjero";
			break;

		case "N":
			nacionalidadIngresada = "Nacionalizado";
			break;
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}
