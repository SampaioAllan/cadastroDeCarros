const formulario = document.getElementById("formulario");
const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const ano = document.getElementById("ano");
const valor = document.getElementById("valor");
const cor = document.getElementById("cor");
const cambio = document.getElementById("cambio");

function GerarMsgDeEspera(e){
    console.log(marca.value);
    console.log(modelo.value);
    console.log(ano.value);
    console.log(valor.value);
    console.log(cor.value);
    console.log(cambio.value);
    e.preventDefault();
}

formulario.addEventListener('submit', GerarMsgDeEspera);