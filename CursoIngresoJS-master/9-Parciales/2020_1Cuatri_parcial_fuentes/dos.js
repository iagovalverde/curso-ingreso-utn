/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro 
*/

function mostrar()
{
    var respuesta = "si";
    var tipoProducto;
    var cantidadBolsas;
    var precioPorBolsa;

    var acumuladorCantidadBolsas = 0;
    var descuento = 1;
    var valorBruto = 0;
    var valorDescuento = 0;

    var acumuladorBolsaArena = 0;
    var acumuladorBolsaCal = 0;
    var acumuladorBolsaCemento = 0;
    var tipoMasBolsas;
    var precioMasCaro;
    var cantidadPrecio = 0;
    var banderaMasCaro = 0;
    var tipoMasCaro;

    var mensajeAB;
    var mensajeC;
    var mensajeD;
    var notificacion;

    while(respuesta == "si")
    {
        tipoProducto = prompt("Ingrese producto: [arena / cal / cemento]");
        while(!(tipoProducto == "arena" || tipoProducto == "cal" || tipoProducto == "cemento"))
        {
            tipoProducto = prompt("Reingrese producto: [arena / cal / cemento]");
        }

        cantidadBolsas = parseInt(prompt("Ingrese cantidad: "));
        while(isNaN(cantidadBolsas))
        {
            cantidadBolsas = parseInt(prompt("Reingrese cantidad: "));
        }

        precioPorBolsa = parseFloat(prompt("Ingrese precio: "));
        while(isNaN(precioPorBolsa) || precioPorBolsa < 1)
        {
            precioPorBolsa = parseFloat(prompt("Reingrese precio: "));
        }

        cantidadPrecio = cantidadBolsas * precioPorBolsa;
        valorBruto += cantidadBolsas * precioPorBolsa;
        acumuladorCantidadBolsas += cantidadBolsas;

        if(banderaMasCaro == 0 || precioMasCaro < cantidadPrecio)
        {
            precioMasCaro = cantidadPrecio;
            tipoMasCaro = tipoProducto;
            banderaMasCaro = 1;
        }
        
        switch(tipoProducto)
        {
            case "arena":
                acumuladorBolsaArena += cantidadBolsas;
                break;

            case "cal":
                acumuladorBolsaCal += cantidadBolsas;
                break;

            case "cemento":
                acumuladorBolsaCemento += cantidadBolsas;
                break;
        }

        respuesta = prompt("Queres comprar más productos? [si / no]");
    }

    if(acumuladorCantidadBolsas > 30)
    {
        descuento = 0.75;
    }
    else
    {
        if(acumuladorCantidadBolsas > 10)
        {
            descuento = 0.85;
        }
        else
        {
            descuento = 1;
        }
    }

    valorDescuento = valorBruto * descuento;

    if(acumuladorBolsaArena > acumuladorBolsaCal && acumuladorBolsaArena > acumuladorBolsaCemento)
    {
        tipoMasBolsas = "arena";
    }
    else
    {
        if(acumuladorBolsaCal > acumuladorBolsaCemento && acumuladorBolsaCal >= acumuladorBolsaArena)
        {
            tipoMasBolsas = "cal";
        }
        else
        {
            tipoMasBolsas = "cemento";
        }
    }

    if(descuento == 1)
    {
        mensajeAB = "El valor total sin descuento es: " + valorBruto;
    }
    else
    {
        mensajeAB = "El valor total con descuento es: " + valorDescuento;
    }
    mensajeC = "Tipo con más cantidad de bolsas: " + tipoMasBolsas;
    mensajeD = "Tipo más caro: " + tipoMasCaro + "\nCon precio de: " + precioMasCaro; 

    notificacion = mensajeAB + "<br>" + mensajeC + "<br>" + mensajeD;

    document.write(notificacion);
}

/*
    var respuesta = "si";
    var tipoProducto;
    var cantidadBolsas;
    var precioPorBolsa;
    
    var valorDescuento;
    var masDelTipo;
    var tipoMasCaro;
    var precioMasCaro;

    var valorBruto = 0;
    var bolsasArena = 0;
    var bolsasCal = 0;
    var bolsasCemento = 0;
    var banderaPrecio = 0;
    var valorCantidadPrecio = 0;
    var descuento = 1;
    var acumuladorCantidadBolsas = 0;

    var mensajeAB;
    var mensajeC;
    var mensajeD;
    var notificacion;

    while(respuesta == "si")
    {
        tipoProducto = prompt("Ingrese producto: [arena / cal / cemento]");
        while(!(tipoProducto == "arena" || tipoProducto == "cal" || tipoProducto == "cemento"))
        {
            tipoProducto = prompt("Reingrese producto: [arena / cal / cemento]");
        }

        cantidadBolsas = parseInt(prompt("Ingrese cantidad bolsas: "));
        while(isNaN(cantidadBolsas) || cantidadBolsas < 1)
        {
            cantidadBolsas = parseInt(prompt("Reingrese cantidad bolsas: "));
        }

        precioPorBolsa = parseFloat(prompt("Ingrese precio por bolsa: "));
        while(isNaN(precioPorBolsa) || precioPorBolsa < 1)
        {
            precioPorBolsa = parseFloat(prompt("Reingrese precio por bolsa: "));
        }

        valorCantidadPrecio = cantidadBolsas * precioPorBolsa;
        acumuladorCantidadBolsas += cantidadBolsas;
        valorBruto += cantidadBolsas * precioPorBolsa;

        if(banderaPrecio == 0 || precioMasCaro < valorCantidadPrecio)
        {   
            precioMasCaro = valorCantidadPrecio;
            tipoMasCaro = tipoProducto;
            banderaPrecio = 1;
        }

        switch(tipoProducto)
        {
            case "arena":
                bolsasArena += cantidadBolsas;
                break;

            case "cal":
                bolsasCal += cantidadBolsas;
                break;

            case "cemento":
                bolsasCemento += cantidadBolsas;
                break;
        }

        respuesta = prompt("Queres ingresar más productos? [si / no]");
    }

    if(acumuladorCantidadBolsas > 30)
    {
        descuento = 0.75;
    }
    else
    {
        if(acumuladorCantidadBolsas > 10)
        {
            descuento = 0.85;
        }
        else
        {
            descuento = 1;
        }
    }

    valorDescuento = valorBruto * descuento;

    if(bolsasArena > bolsasCal && bolsasArena > bolsasCemento)
    {
        masDelTipo = "arena";
    }
    else
    {
        if(bolsasCal > bolsasCemento && bolsasCal >= bolsasArena)
        {
            masDelTipo = "cal";
        }
        else
        {
            masDelTipo = "cemento";
        }
    }

    if(descuento == 1)
    {
        mensajeAB = "El valor sin descuento es: " + valorBruto;
    }
    else
    {
        mensajeAB = "El valor con descuento es: " + valorDescuento;
    }
    mensajeC = "Tipo con más bolsas: " + masDelTipo;
    mensajeD = "Tipo más caro: " + tipoMasCaro + "\nPrecio más caro: " + precioMasCaro;

    notificacion = mensajeAB + "<br>" + mensajeC + "<br>" + mensajeD;

    document.write(notificacion);
*/