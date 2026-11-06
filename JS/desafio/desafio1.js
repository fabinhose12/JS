const vendas = [
  { vendedor: "Ana", valor: 350 },
  { vendedor: "Carlos", valor: 500 },
  { vendedor: "Ana", valor: 200 },
  { vendedor: "Marcos", valor: 800 },
  { vendedor: "Carlos", valor: 300 },
  { vendedor: "Ana", valor: 450 },
  { vendedor: "Marcos", valor: 150 },
];

function analisarVendas(lista) {
  let totalVendas = 0;
  let vendasPorVendedor = {};
  let maiorFaturamento = 0;
  let melhorVendedor = "";
  let ticketMedio = 0;

  for (let i = 0; i < lista.length; i++) {
    let vendaAtual = lista[i];
    totalVendas += vendaAtual.valor;
    vendasPorVendedor[vendaAtual.vendedor] =
      (vendasPorVendedor[vendaAtual.vendedor] || 0) + vendaAtual.valor;
  }

  for (let vendedor in vendasPorVendedor) {
    if (vendasPorVendedor[vendedor] > maiorFaturamento) {
      maiorFaturamento = vendasPorVendedor[vendedor];
      melhorVendedor = vendedor;
    }
  }
  ticketMedio = totalVendas / lista.length;
  return {
    totalVendas,
    vendasPorVendedor,
    melhorVendedor,
    maiorFaturamento,
    ticketMedio,
  };
}

console.log(analisarVendas(vendas));
