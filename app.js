//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = document.querySelector("#listaAmigos");
let nomeAmigos = [];
let sorteados;

function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value;
    if(nome == null) {
        return alert("Nenhum nome foi digitado!")
    } else {
        nomeAmigos.push(nome);
        return listaAmigos.append(nome+" ");
    }
}

function sortearAmigo() {
    while(nomeAmigos.length > 0) {
        let usuario = prompt("Entre o nome de quem irá sortear: ");
        console.log(`O nome de quem vai sortear é: ${usuario}`);
    
        console.log(nomeAmigos)
        //Encontra o sorteado no array e exclui para que não pegue a si mesmo.
        let index = nomeAmigos.indexOf(usuario);

        if(index!= -1) {nomeAmigos.splice(index, 1);} 
        console.log(nomeAmigos);

        //SORTEIA
        let amigoSorteado = nomeAmigos[Math. floor(Math. random() * nomeAmigos. length)];

        //INSERE NOVAMENTE O USUARIO NA LISTA CASO NÃO TENHA SIDO SORTEADO AINDA
        if(index != -1) {
            nomeAmigos.push(usuario);
        }    
        //Apaga do Array fixo listaAmigos o nome já sorteado para não repetir
        nomeAmigos.splice(nomeAmigos.indexOf(amigoSorteado), 1);
        console.log(nomeAmigos);
        console.log(`${usuario}, o seu amigo secreto é: ${amigoSorteado}`);

        alert(`${usuario}, o seu amigo secreto é: ${amigoSorteado}`);
    }
    return alert("Fim do sorteio de Amigo Secreto!")
}


