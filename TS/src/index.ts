interface Produto {
  id: number;
  name: string;
  price: number;
  stock: number;
}

function criarProduto(
  id: number,
  name: string,
  price: number,
  stock: number,
): Produto {
  return {
    id,
    name,
    price,
    stock,
  };
}

const produto1 = criarProduto(1, "Produto A", 10.99, 100);
const produto2 = criarProduto(2, "Produto B", 15.49, 50);

console.log(produto1);
console.log(produto2);
