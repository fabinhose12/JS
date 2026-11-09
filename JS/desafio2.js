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

// Função darBaixa unificada e com todas as validações juntas:
function darBaixa(id, quantidade) {
  // 1. Valida se a quantidade é um número válido e maior que zero
  const quantidadeConvertida = parseInt(quantidade, 10);
  if (isNaN(quantidadeConvertida) || quantidadeConvertida <= 0) {
    return { error: "Quantidade inválida" };
  }

  // 2. Identifica o produto (já retorna o objeto de erro se não achar)
  const produto = identificarProduto(id);
  if (produto.error) {
    return produto; // Retorna { error: "Produto não encontrado" }
  }

  // 3. Valida se há estoque suficiente
  if (produto.estoque < quantidadeConvertida) {
    return { error: "Estoque insuficiente" };
  }

  // 4. Salva o estoque anterior, altera e pega o atual
  const estoqueAnterior = produto.estoque;
  produto.estoque -= quantidadeConvertida;
  const estoqueAtual = produto.estoque;

  registrarMovimentacao(
    produto,
    quantidadeConvertida,
    estoqueAnterior,
    estoqueAtual,
  );

  return produto;
}

console.log(identificarProduto(2));
console.log(historico);
console.log(darBaixa(1, 10)); // Estoque insuficiente
