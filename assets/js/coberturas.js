//BUSQUEDA COBERTURAS EN JSON
const cardCoberturas = document.getElementById("coberturas");
fetch('https://gonxavier.github.io/coder-js-desafio4/assets/js/coberturas.json')
.then((datos) => datos.json())
.then((card) => {
    card.forEach(valor => {
        let tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
        <div class="container box-letra">
            <div class="card-letra">${valor.letra}</div>
        </div>
        <div class="container">
            <h2 class="card-cobertura">${valor.nombre}</h2>
            <p class="card-cobertura">${valor.descripcion}</p>
            <br>
            <p class="card-cobertura"><b>Responsabilidad Civil:</b> ${valor.rc}</p>
            <p class="card-cobertura"><b>Robo:</b> ${valor.robo}</p>
            <p class="card-cobertura"><b>Incendio:</b> ${valor.incendio}</p>
            <p class="card-cobertura"><b>Daños por accidente:</b> ${valor.accidente}</p>
        </div>
        `
        cardCoberturas.appendChild(tarjeta);
    })
})