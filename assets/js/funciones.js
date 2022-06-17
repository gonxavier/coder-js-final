// CALCULO DE TARIFA SEGUN COBERTURA ELEGIDA
function tarifaCoti(x) {
    if (x == "A- Responsabilidad Civil") {
        tarifa = tarifaA;
    } else if (x == "C- Terceros Completo") {
        tarifa = tarifaC;
    } else if (x == "D- Todo Riesgo c/ Franquicia") {
        tarifa = tarifaD;
    }
    return tarifa;
}

// TEXTO DE COBERTURA A MOSTRAR SEGUN COBERTURA ELEGIDA
function textoCob(x) {
    if (x == "A- Responsabilidad Civil") {
        texto = "A- Responsabilidad Civil";
    } else if (x == "C- Terceros Completo") {
        texto = "C- Terceros Completo";
    } else if (x == "D- Todo Riesgo c/ Franquicia") {
        texto = "D- Todo Riesgo c/ Franquicia";
    }
    return texto;
}

// CONSTRUCTOR DE OBJETO (ITEM COTIZADO)
function ItemCotizado(marca, modelo, anio, valor, cobertura, costo) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.valor = valor;
    this.cobertura = cobertura;
    this.costo = costo;
};

// LEVANTAR DATOS DEL LOCAL STORAGE
function cotizacionesPrevias() {
    if (localStorage.getItem("cotizaciones")) {
        return JSON.parse(localStorage.getItem("cotizaciones"));
    } else {
        return [];
    }
}

// ARMADO DE TARJETAS EN REGISTRO DE COTIZACIONES REALIZADAS
function cargarRegistroCotizaciones() {
    let cotizaciones = cotizacionesPrevias();
    let registro_cotizaciones = document.getElementById("registroCotizaciones");
    let seccion_registros = "";

    if (cotizaciones.length == 0) {
        seccion_registros = `<div class="card">
            <p>No cotizaste nada aún</p>
            </div>
            `
    } else {
        for (const cotizacion of cotizaciones) {
            seccion_registros += `<div class="card">
                <p>Vehículo: ${cotizacion.marca} ${cotizacion.modelo} (${cotizacion.anio}) - Suma Asegurada: $${cotizacion.valor}</p>
                <p>Cobertura: $${cotizacion.cobertura}</p>
                <p class="fs-4 fw-bolder">Costo Mensual: $${cotizacion.costo}</p>
                </div>
                `
        }
    }
    registro_cotizaciones.innerHTML = seccion_registros;
}

// BORRAR TARJETAS DEL REGISTRO DE COTIZACIONES
function borrarRegistros() {
    localStorage.removeItem("cotizaciones");
    cargarRegistroCotizaciones();
}


//VALIDACION DEL FORMULARIO
function validarCotizacion() {
    let campo_marca = document.getElementById("marca").value;
    let campo_modelo = document.getElementById("modelo").value;
    let campo_anio = document.getElementById("anio").value;
    let campo_suma = document.getElementById("sumaAsegurada").value;

    if (campo_marca.length == 0) {
        errorCampo("marca");
        return false;
    }

    if (campo_modelo.length == 0) {
        errorCampo("modelo");
        return false;
    }

    if (campo_anio.length == 0) {
        errorCampo("anio");
        return false;
    }

    if (campo_suma.length == 0) {
        errorCampo("sumaAsegurada");
        return false;
    }

}

//ERROR CAMPO INCOMPLETO
function errorCampo(campo) {
    Toastify({
        text: "Tenes que completar el campo: " + campo,
        duration: 3000,
        className: "cotiz-error"
    }).showToast();
}

//ALERTA COTIZACON OK
function cotizOk() {
    Toastify({
        text: "Travesura Realizada",
        duration: 3000,
        className: "cotiz-ok"
    }).showToast();
}

