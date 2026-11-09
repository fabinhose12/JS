const produtos = [
  { id: 1, nome: "Notebook", estoque: 5 },
  { id: 2, nome: "Mouse", estoque: 20 },
  { id: 3, nome: "Teclado", estoque: 8 },
];

function identificarProduto(id) {
  const produto = produtos.find((p) => p.id === id);

  // Se o produto não for encontrado, retorna o objeto de erro
  if (!produto) {
    return { error: "Produto não encontrado" };
  }

  // Caso contrário, retorna o produto encontrado
  return produto;
}

const historico = [];

function registrarMovimentacao(
  produto,
  quantidade,
  estoqueAnterior,
  estoqueAtual,
) {
  const movimentacao = {
    produto,
    quantidade,
    estoqueAnterior,
    estoqueAtual,
  };
  historico.push(movimentacao);
}

const produto = identificarProduto(2);
registrarMovimentacao(produto, 5, 20, 15);

const notebook = identificarProduto(1);
registrarMovimentacao(notebook, 3, 5, 2);

console.log(identificarProduto(2));
console.log(historico);
