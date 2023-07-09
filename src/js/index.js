

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");
    
    alterarImagemPersonagemSelecionado(personagem);

    // passo 3 - alterar o nome do personagem grande

    alterarNomePersonagem(personagem);

    // passo 4 - alterar a descrição do personagem grande

    alterarDescricaoPersonagem(personagem);

  });
});
function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");

    // // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

