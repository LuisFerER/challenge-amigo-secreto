// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

/*
* Funcion para agregar los nombres a la lista de amigos.
*/
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        if (!amigos.includes(amigo)) { // Sin que se repitan los nombres dentro de la lista
            amigos.push(amigo);
            agregarLista(amigos);
            limpiarCaja();
        }
    }
}

/*
* Funcion para agregar la lista de amigos a la lista en html.
* Mostrandolos en una etiqueta <li>
*/
function agregarLista(){
    limpiarContenedores();
    for(let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
    }
}
 /*
* Funcion para sortear el amigo secreto a partir de un indice random.
 */
function sortearAmigo() {
    limpiarContenedores();
    let indiceAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = document.createElement('li');
    amigoSecreto.textContent = 'El amigo secreto es: ' + amigos[indiceAmigo];
    resultado.appendChild(amigoSecreto);
}

/*
* Funcion para limpiar contenedores:
* Input
* Listas
*/
function limpiarContenedores(){
    document.querySelector('#amigo').value = '';
    lista.innerHTML = "";
    resultado.innerHTML = "";
    return;
}