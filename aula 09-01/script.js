// o método getElementById busca no html o elemento 

const titulo = document.getElementById("cardTitulo");
const descricao = document.getElementById("cardDescricao");
const btnSaibaMais = document.getElementById("btnSaibaMais");

// Exibe os elmentos no console do navegador (f12)

console.log("Elemento do título: ", titulo);
console.log("Elemento da descrição: ", descricao);
console.log("Elemento do botão: ", btnSaibaMais);

//2. lendo e alterando conteudo(texto
//podemmos ler ou alterar o texto de um elemento com .inner\text ou .textContent
console.log("Texto do título: ", titulo.innerText);


//3. adicionando um evento de clique com document.getElementById 
// qunado o usuario clica no botão, alteramos o conteudo e o estilo dos elementos na pagina

btnSaibaMais.addEventListener("click", function() {
    titulo.innerText = "JavaScript no Dom! ";

    descricao.innerText = "Voce clicou no botão e o texto foi alterado usando document.getElementById() com sucesso!";



    titulo.style.color = "#4f46e5";
    btnSaibaMais.style.backgroundColor = "#10b981";
    btnSaibaMais.innerText = "Texto Atualizado!";
})


const tag = document.querySelector(" .card-tag");
console.log("querySelector('.card-tag') encontrou:", tag.textContent);

const cards = document.querySelectorAll(".card");
console.log(`querySelectorAll('.card') encontrou ${cards.length} cards(s)`);

cards.forEach(function (card, indice) {
    const tituloDoCard = card.querySelector()
})