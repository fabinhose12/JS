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
const produtos: Produto[] = [produto1, produto2];


function consultarProduto(id: number): string {
const produto = produtos.find((p) => p.id === id);  
if (produto) {
    return produto.name;
}
return "Produto não encontrado";
}

console.log(consultarProduto(1)); // Output: Produto A
console.log(consultarProduto(3)); // Output: Produto não encontrado
