//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

   if (nome === '') {
    alert ('Digite um nome válido!');
    return;
   }

   if (amigos.includes(nome)) {
    alert ('Este nome já foi adicionado!');
    input.value = '';
    return;
   }

   amigos.push(nome);
   atualizarLista();
   input.value = '';
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há pelo menos um amigo na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    // Limpa os resultados anteriores
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    //Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Nome do amigo sorteado
    const amigoSorteado = amigos [indiceSorteado];

    //Pega o nome do amigo sorteado
    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
}
