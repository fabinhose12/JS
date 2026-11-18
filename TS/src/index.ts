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

type ResultadoOperacao =
  | { sucesso: true; produto: Produto }
  | { sucesso: false; mensagem: string };

function registrarEntrada(idProduto: number, quantidade: number): ResultadoOperacao {
  const produto = produtos.find((p) => p.id === idProduto);
  
  if (!produto) {
    return { sucesso: false, mensagem: "Produto não encontrado" };
  }
  
  if (quantidade <= 0) {
    return {
      sucesso: false,
      mensagem: "Quantidade inválida"
    };
  }


  produto.stock += quantidade;

  return {
    sucesso: true,
    produto: produto
  };
}

console.log(consultarProduto(1)); // Output: Produto A
console.log(consultarProduto(3)); // Output: Produto não encontrado
console.log(registrarEntrada(1, 20));
console.log(registrarEntrada(2, 10));
console.log(registrarEntrada(1, 0));
console.log(registrarEntrada(1, -5));
console.log(registrarEntrada(99, 10));
