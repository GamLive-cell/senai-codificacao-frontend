const produto1 = {
    nome: "Camiseta",
    preco: 80,
    categoria: "Roupas",
    estoque: 15,
};

const produto2 = {
    nome: "Tênis",
    preco: 250,
    categoria: "Calçados",
    estoque: 10,
};

const produto3 = {
    nome: "Relógio",
    preco: 500,
    categoria: "Acessórios",
    estoque: 5,
};

function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}
  

function exibirProduto(produto) {
    console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque}`);
}

const emPromocao = true;

if (emPromocao) {
    console.log("O produto está em promoção!");
} else {
    console.log("O produto não está em promoção!");
}

const produtos = [produto1, produto2, produto3];

for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto ${i +1 }:`);
    console.log(`Nome: ${produtos[i].nome}`);
    console.log(`Preço: R$ ${produtos[i].preco}`);
    exibirProduto(produtos[i]);
}

const precoComDesconto = calcularDesconto(produto1.preco, 10);