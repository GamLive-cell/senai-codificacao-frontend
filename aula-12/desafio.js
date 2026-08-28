const produtos = [
  {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    imagem: "notebook.jpg"
  },
  {
    nome: "Smartphone",
    preco: 2200,
    categoria: "Eletrônicos",
    imagem: "smartphone.jpg"
  },
  {
    nome: "Camiseta",
    preco: 80,
    categoria: "Roupas",
    imagem: "camiseta.jpg"
  },
  {
    nome: "Tênis",
    preco: 250,
    categoria: "Calçados",
    imagem: "tenis.jpg"
  },
  {
    nome: "Mochila",
    preco: 150,
    categoria: "Acessórios",
    imagem: "mochila.jpg"
  }
];

function listar() {
    produtos.forEach (({ nome, preco, categoria, imagem }) => {
       console.log(`Nome: ${nome}`);
         console.log(`Preço: R$ ${preco}`);
            console.log(`Categoria: ${categoria}`);
            console.log(`Imagem: ${imagem}`);
            console.log('-------------------------');
    });
}

function filtrar(categoriaEscolhida) {
    return produtos.filter(({ categoria }) => categoria === categoriaEscolhida);
}

// Destructuring
const { nome,preco } = produtos[0];

console.log("Produto:", nome);
console.log("Preço:", preco);

// Spread operator para duplicar a lista
const copiaProdutos = [...produtos];

console.log("Cópia da lista de produtos:", copiaProdutos);

// Testando as funções
console.log("=== TODOS OS PRODUTOS ===");
listar();

console.log("=== ELETRÔNICOS ===");
console.log(filtrar("Eletrônicos"));