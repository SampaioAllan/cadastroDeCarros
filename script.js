let carros = [
    {
        marca: "fiat",
        modelo: "uno",
        ano: 2010,
        valor: 20000.00,
        cor: "verde",
        cambioAutomatico: true
    },
    {
        marca: "fiat",
        modelo: "500",
        ano: 2018,
        valor: 387465.00,
        cor: "verde",
        cambioAutomatico: true
    }
]

const formulario = document.getElementById("formulario");

function addCarro(e) {
    e.preventDefault(); 
    let carro = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        ano: document.getElementById("ano").value,
        valor: document.getElementById("valor").value,
        cor: document.getElementById("cor").value,
        cambioAutomatico: document.getElementById("cambioAutomatico").value
    }
    carros.push(carro)
    localStorage.setItem("JSONCarros", JSON.stringify(carros));
}

function logarcarrosdoLocalStorage() {
    carros = JSON.parse(localStorage.getItem('JSONCarros'));
    console.log(carros);
}

formulario.addEventListener('submit', addCarro);
window.addEventListener('load', logarcarrosdoLocalStorage);