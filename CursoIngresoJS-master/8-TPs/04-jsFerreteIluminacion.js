/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

Nombre: Iago Valverde Pachiani
EJ: TP 4
*/

// SWITCH IF
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioFinal;
    var marcaLampara;
    var descuento;
    var impuesto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;

    descuento = 1;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            break;

        case 3:
            if(marcaLampara == "ArgentinaLuz")
            {
                descuento = 0.85;
            }
            else
            {
                if(marcaLampara == "FelipeLamparas")
                {
                    descuento = 0.9;
                }
                else
                {
                    descuento = 0.95;
                }
            }
            break;
        
        case 4:
            if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
            {
                descuento = 0.75;
            }
            else
            {
                descuento = 0.8;
            }
            break;

        case 5:
            if(marcaLampara == "ArgentinaLuz")
            {
                descuento = 0.6;
            }
            else
            {
                descuento = 0.7;
            }
            break;
        
        default:
            descuento = 0.5;
            break;
    }

    precioFinal = cantidadLamparas * 35 * descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120)
    {
        impuesto = precioFinal * 1.1 - precioFinal;
        alert(`Usted pago ${impuesto} de IIBB.`);
    }
}

/*  SWITCH-SWITCH

    var cantidadLamparas;
    var precioFinal;
    var marcaLampara;
    var descuento;
    var impuesto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;

    descuento = 1;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            break;

        case 3:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento = 0.85;
                    break;
                
                case "FelipeLamparas":
                    descuento = 0.9;
                    break;
                
                default:
                    descuento = 0.95;
                    break;
            }
            break;
        
        case 4:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 0.75;
                    break;
                
                default:
                    descuento = 0.8;
                    break;
            }
            break;

        case 5:
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento = 0.6;
                    break;

                default:
                    descuento = 0.7;
                    break;
            }
            break;

        default:
            descuento = 0.5;
            break;
    }   

    precioFinal = cantidadLamparas * 35 * descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120)
    {
        impuesto = precioFinal * 1.1 - precioFinal;
        alert(`Usted pago ${impuesto} de IIBB.`);
    }
*/

/*  IF-SWITCH

    var cantidadLamparas;
    var precioFinal;
    var marcaLampara;
    var descuento;
    var impuesto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;

    descuento = 1;

    if(cantidadLamparas >= 6)
    {
        descuento = 0.5;
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            switch(marcaLampara)
            {
                case "ArgentinaLuz":
                    descuento = 0.6;
                    break;

                default:
                    descuento = 0.7;
                    break;
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                switch(marcaLampara)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.75;
                        break;
                    
                    default:
                        descuento = 0.8;
                        break;
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    switch(marcaLampara)
                    {
                        case "ArgentinaLuz":
                            descuento = 0.85;
                            break;
                        
                        case "FelipeLamparas":
                            descuento = 0.9;
                            break;

                        default:
                            descuento = 0.95;
                            break;
                    }
                }
            }
        }
    }

    precioFinal = cantidadLamparas * 35 * descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120)
    {
        impuesto = precioFinal * 1.1 - precioFinal;
        alert(`Usted pago ${impuesto} de IIBB.`);
    }
*/

/*  IF-ELSE

    var cantidadLamparas;
    var precioFinal;
    var marcaLampara;
    var descuento;
    var impuesto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value;

    // A
    if(cantidadLamparas >= 6)
    {
        descuento = 0.5;
    }
    else
    {   // B 
        if(cantidadLamparas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                descuento = 0.6;
            }
            else
            {
                descuento = 0.7;
            }
        }
        else
        {   // C
            if(cantidadLamparas == 4)
            {
                if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
                {
                    descuento = 0.75;
                }
                else
                {
                    descuento = 0.8;
                }
            }
            else
            {   // D
                if(cantidadLamparas == 3)
                {
                    if(marcaLampara == "ArgentinaLuz")
                    {
                        descuento = 0.85;
                    }
                    else
                    {
                        if(marcaLampara == "FelipeLamparas")
                        {
                            descuento = 0.9;
                        }
                        else
                        {
                            descuento = 0.95;
                        }
                    }
                }
                else
                {
                    descuento = 1;
                }
            }
        }
    }

    precioFinal = cantidadLamparas * 35 * descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    // E
    if(precioFinal > 120)
    {
        impuesto = precioFinal * 1.1 - precioFinal;
        alert(`Usted pago ${impuesto} de IIBB.`);
    }
*/