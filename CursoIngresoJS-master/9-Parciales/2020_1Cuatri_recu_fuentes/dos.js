/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/

function mostrar()
{
    var respuesta = "si";
    var tipoProducto;
    var cantidadBolsas;
    var precioBolsa;
    var mensajeAB;
    var mensajeD;
    var mensajeF;
    
    var descuento = 1;
    var valorBruto = 0;
    var valorDescuento;
    var mayorTipo;
    var bolsasArena = 0;
    var bolsasCal = 0;
    var bolsasCemento = 0;
    var banderaPrecio = 0;
    var valorCantidadPrecio;
    var precioMasCaro;
    var tipoMasCaro;
    var notificacion;

    var acumuladorCantidadBolsas = 0;

    while(respuesta == "si")
    {
        tipoProducto = prompt("Ingrese tipo: [arena / cal / cemento]");
        while(!(tipoProducto == "arena" || tipoProducto == "cal" || tipoProducto == "cemento"))
        {
            tipoProducto = prompt("[ERROR] Reingrese tipo: [arena / cal / cemento]");
        }

        cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas: "));
        while(isNaN(cantidadBolsas))
        {
            cantidadBolsas = parseInt(prompt("Reingrese cantidad de bolsas: "));
        }

        precioBolsa = parseFloat(prompt("Ingrese precio bolsa: "));
        while(isNaN(precioBolsa) || precioBolsa < 1)
        {
            precioBolsa = parseFloat(prompt("[ERROR] Reingrese precio bolsa: "));
        }

        valorCantidadPrecio = cantidadBolsas * precioBolsa;
        valorBruto += cantidadBolsas * precioBolsa;
        acumuladorCantidadBolsas += cantidadBolsas; 

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

    if(descuento == 1)
    {
        mensajeAB = "El importe total sin descuento es: " + valorBruto;
    }
    else 
    {
        mensajeAB = "El importe total con descuento es: " + valorDescuento;
    }
    
    if(bolsasArena > bolsasCal && bolsasArena > bolsasCemento)
    {
        mayorTipo = "arena";
    }
    else
    {
        if(bolsasCal > bolsasCemento && bolsasCal >= bolsasArena)
        {
            mayorTipo = "cal";
        }
        else
        {
            mayorTipo = "cemento";
        }
    }

    mensajeD = "El tipo con mas cantidad es: " + mayorTipo;
    mensajeF = "El tipo más caro es: " + tipoMasCaro;

    notificacion = mensajeAB + "<br>" + mensajeD + "<br>" + mensajeF;

    document.write(notificacion);
}

