const formulario = document.getElementById("formulario");

function addCarro(e) {
    e.preventDefault();
    let carros = JSON.parse(localStorage.getItem('JSONCarros')) ?? []
    
    let carro = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        ano: document.getElementById("ano").value,
        valor: document.getElementById("valor").value,
        cor: document.getElementById("cor").value,
        cambioAutomatico: document.getElementById("cambioAutomatico").value
    }
    carros.push(carro);
    localStorage.setItem("JSONCarros", JSON.stringify(carros));
}

function logarcarrosdoLocalStorage() {
    carros = JSON.parse(localStorage.getItem('JSONCarros'));
    console.log(carros);
}

formulario.addEventListener('submit', addCarro);
window.addEventListener('load', logarcarrosdoLocalStorage);