// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        agregarLista(amigos);
        limpiarCaja();
    }
}

function agregarLista(amigos){
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(nuevoAmigo);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}