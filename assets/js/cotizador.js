// CALCULO DE COTIZACION Y ARMADO DE LA MISMA AL PRESIONAR BOTON (Con los datos del formulario)
let btnCotizar = document.getElementById("btnCotizar");
btnCotizar.onclick = () => {
    //Validación del formulario
    validarCotizacion();

    // Asignar inputs en variables
    let marca = document.getElementById("marca").value.toUpperCase();
    let modelo = document.getElementById("modelo").value.toUpperCase();
    let anio = document.getElementById("anio").value;
    let sumaAseg = document.getElementById("sumaAsegurada").value;
    let cobertura = document.getElementById("cobertura");
    let coberturaSeleccionada = cobertura.options[cobertura.selectedIndex].value;

    if (marca.length == 0 || modelo.length == 0 || anio.length == 0 || sumaAseg.length == 0) {
        return false;
    } else {
    // Definir otras variables que van a ser necesarias
    let tarifa;
    let textoCobertura;

    // Calculo y asignacion de texto y tarifa segun cobertura elegida
    textoCobertura = textoCob(coberturaSeleccionada);
    tarifa = tarifaCoti(coberturaSeleccionada);

    // Calculo del costo
    let costo = sumaAseg * tarifa;
    
    //Alerta cotizacion OK
    cotizOk();

    // Armado del nuevo objeto utilizando el constructor
    let item = new ItemCotizado(marca, modelo, anio, sumaAseg, textoCobertura, costo);

    // Envio del nuevo objeto a array y luego a Local Storage
    cotizacionesGuardadas.push(item);
    localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesGuardadas));

    // Armado del HTML actualizado en la seccion cotización
    let cotizacion = document.getElementById("seccionCotizacion");
    cotizacion.innerHTML = 
    `
    <div class="resultado">
        <h2>SU COTIZACION</h2>
        <p><strong>Vehiculo:</strong> ${marca} ${modelo} - (${anio})</p>
        <p><strong>Cobertura:</strong> ${textoCobertura}</p>
        <p><strong>Suma Asegurada:</strong> $ ${sumaAseg}</p>
        <p class="costo"><strong>Costo Mensual:</strong> $ ${costo}</p>
    </div>
    `
    seccionCotizacion.append(cotizacion);
    }

}