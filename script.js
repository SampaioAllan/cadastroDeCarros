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

function buscarCarrosPorMarcar(listaRecebida, marca) {
    let listaDeCarros = listaRecebida.filter(function (i) {
        if (i.marca === marca) {
            return i;
        }
    })
    return listaDeCarros;
}

function listarMarcasDeCarros(listaRecebida) {
    let listaDeMarcas = [];
    listaRecebida.forEach(function (i) {
        if (!listaDeMarcas.includes(i.marca)) {
            listaDeMarcas.push(i.marca);
        }
    })
    return listaDeMarcas;
}

function mostrarPropriedadesDesejadas(listaDeCarros, listaDePropiedades) {
    let listapersonalizada = []

    for (let index = 0; index < listaDeCarros.length; index++) {
        let carroatual = listaDeCarros[index];
        let carroPersonalizado = [] 

        for (let i = 0; i < listaDePropiedades.length; i++) {
            let prop = listaDePropiedades[i];
            carroPersonalizado.push(carroatual[prop])
        }
        
        listapersonalizada.push(carroPersonalizado)
    }
    return listapersonalizada;
}

formulario.addEventListener('submit', addCarro);
window.addEventListener('load', logarcarrosdoLocalStorage);