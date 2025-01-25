// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        agregarLista(amigos);
        limpiarCaja();
    }
}

function agregarLista(){
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        //nuevoAmigo.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    lista.innerHTML = '';
    let indiceAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = document.createElement('li');
    amigoSecreto.appendChild(document.createTextNode(amigos[indiceAmigo]));
    resultado.appendChild(amigoSecreto);
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}