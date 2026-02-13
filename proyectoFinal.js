function obtenerEdadValida() {
    let edad;
    do {
        edad = parseInt(prompt("Ingrese la edad del cliente: "));
        if (isNaN(edad) || edad < 0 || edad > 100) {
            alert("Por favor, ingrese un número válido para la edad.");
        } else if (edad < 18) {
            alert("Lo siento, no puedes cotizar si es menor de 18 años.");
        }

    } while (isNaN(edad) || edad < 18 || edad > 100);

    return edad;
}

function calcularRecargoEdad(precioBase, edad) {
    if (edad >= 18 && edad <= 24) {
        return precioBase * 0.10;
    } else if (edad <= 49) {
        return precioBase * 0.20;
    } else {
        return precioBase * 0.30;
    }
}

function iniciarCotizacion(nombreCliente) {

    const edadCliente = obtenerEdadValida();
    let precioBase;
    do {
        precioBase = parseFloat(prompt("Ingrese el precio base de la cotización: "));
        if (isNaN(precioBase) || precioBase <= 0) {
            alert("Por favor, ingrese un número válido para el precio base.");
        }
    } while (isNaN(precioBase) || precioBase <= 0);

    const pareja = prompt("¿El cliente tiene pareja? (si/no)").toLowerCase();


    let recargoTotal = 0;

    recargoTotal += calcularRecargoEdad(precioBase, edadCliente);


    if (pareja === "si") {
        let edadPareja;
        do {
            edadPareja = parseInt(prompt("Ingrese la edad de la pareja: "));
            if (isNaN(edadPareja) || edadPareja < 0 || edadPareja > 100) {
                alert("Edad inválida.");
            } else if (edadPareja < 18) {
                alert("No se puede asegurar si la pareja es menor de edad.");
            }
        } while (isNaN(edadPareja) || edadPareja < 18 || edadPareja > 100);

        recargoTotal += calcularRecargoEdad(precioBase, edadPareja);
    }

    const hijos = parseInt(prompt("Ingrese la cantidad de hijos (0 si no tiene): ")) || 0;
    const propiedades = parseInt(prompt("Ingrese la cantidad de propiedades (0 si no tiene): ")) || 0;
    const ingresosAsegurado = parseFloat(prompt("Ingrese los ingresos del asegurado: ")) || 0;


    if (!isNaN(hijos) && hijos > 0) {
        recargoTotal += hijos * (precioBase * 0.20);
    }
    if (!isNaN(propiedades) && propiedades > 0) {
        recargoTotal += propiedades * (precioBase * 0.35);
    }
    if (!isNaN(ingresosAsegurado) && ingresosAsegurado > 0) {
        recargoTotal += ingresosAsegurado * (0.05);
    }

    const precioFinal = precioBase + recargoTotal;
    alert(`Cotización para ${nombreCliente}
            Precio Base: Q${precioBase.toFixed(2)}
            Recargos: Q${recargoTotal.toFixed(2)}
            Precio Final: Q${precioFinal.toFixed(2)}`
    );
}
while (true) {
    const nombreCliente = prompt("Ingrese el nombre del cliente (o escriba 'Salir'):");
    if (nombreCliente.toLowerCase() === "salir") break;

    iniciarCotizacion(nombreCliente);
}
