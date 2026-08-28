## Trecho 1 — Objeto

const produto = {
  nome: "Fone de Ouvido",
  preco: 120
};

console.log(produto.Nome);

R: Faltou a virgula depois do preco: 120

## Trecho 2 — Array de objetos

const produtos = [
  { id: 1, nome: "Mochila", preco: 150 },
  { id: 2, nome: "Garrafa", preco: 40 }
];

console.log(produtos[2].nome);

R: O erro está produtos[2] é undefined. A contagem do array começa do zero (0).

## Trecho 3 — JSON

const dadosAPI = `{
  'nome': "Caderno",
  "preco": 25,
}`;

const produto = JSON.parse(dadosAPI);

R: O erro está nas aspas simples e na vírgula final.

## Trecho 4 — Destructuring

const produto = { nome: "Mouse", valor: 80 };

const { nome, preco } = produto;

console.log(`Preço: ${preco}`);

R: O erro é que o objeto tem valor, mas você tentou pegar preco.

## Trecho 5 — Spread vs. referência
const catalogoOriginal = [{ id: 1, nome: "Teclado", preco: 200 }];

const catalogoPromocional = catalogoOriginal;
catalogoPromocional[0].preco = 150;

console.log(catalogoOriginal[0].preco);

R: Ela não cria uma cópia. Os dois apontam para o mesmo array.