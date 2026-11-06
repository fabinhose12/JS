const vendas = [
  { produto: "Notebook", valor: 3500, vendedor: "Ana" },
  { produto: "Mouse", valor: 100, vendedor: "Carlos" },
  { produto: "Teclado", valor: 250, vendedor: "Ana" },
  { produto: "Monitor", valor: 1200, vendedor: "Carlos" },
  { produto: "Headset", valor: 300, vendedor: "Ana" },
  { produto: "Webcam", valor: 450, vendedor: "Pedro" },
];

let totalVendas = 0;
for (let i = 0; i < vendas.length; i++) {
  totalVendas += vendas[i].valor;
}

let produtoMaisCaro = vendas[0];
for (let i = 1; i < vendas.length; i++) {
  if (vendas[i].valor > produtoMaisCaro.valor) {
    produtoMaisCaro = vendas[i];
  }
}

let ticketMedio = totalVendas / vendas.length;

function filtrarVendasAcimaDe(valor) {
  return vendas.filter((venda) => venda.valor > valor);
}

function contarVendasPorVendedor(vendedor) {
  return vendas.filter((venda) => venda.vendedor === vendedor).length;
}

console.log("Vendas acima de R$ 500:");
filtrarVendasAcimaDe(500).forEach((venda) => {
  console.log(`- ${venda.produto}: R$ ${venda.valor.toFixed(2)}`);
});

console.log("Ticket médio: R$ " + ticketMedio.toFixed(2));

console.log("Total de vendas: R$ " + totalVendas);
console.log(
  "Produto mais caro: " +
    produtoMaisCaro.produto +
    " - R$ " +
    produtoMaisCaro.valor,
);

function contarVendasPorVendedor() {
  return vendas.reduce((contador, venda) => {
    contador[venda.vendedor] = (contador[venda.vendedor] || 0) + 1;
    return contador;
  }, {});
}

const resultadoVendas = contarVendasPorVendedor();
console.log("Contagem de vendas por vendedor:");
console.log(resultadoVendas);
