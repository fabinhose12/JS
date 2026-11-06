const produtos = [
  { nome: "Notebook", preco: 3500, estoque: 4 },
  { nome: "Mouse", preco: 80, estoque: 15 },
  { nome: "Teclado", preco: 150, estoque: 8 },
  { nome: "Monitor", preco: 900, estoque: 3 },
  { nome: "Headset", preco: 250, estoque: 0 },
];

function calcularValorTotalEstoque(lista) {
  let valorTotal = 0;

  for (let i = 0; i < lista.length; i++) {
    let produtoAtual = lista[i];

    if (produtoAtual.estoque > 0) {
      console.log(`- ${produtoAtual.nome} (Qtd: ${produtoAtual.estoque})`);

      let valorProduto = produtoAtual.preco * produtoAtual.estoque;

      // Como adicionamos valorProduto ao valorTotal?
      valorTotal += valorProduto;
    }
  }

  // Como devolvemos o total depois que o for termina?
  return valorTotal;
}
