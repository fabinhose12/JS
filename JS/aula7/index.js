//mesmas regras do let

const nome = 'Joao'; 
//const sempre precisa ter um valor atribuido, não pode ser alterado depois

//quando precisar mudar, usar let inves de const.

console.log(nome);

const primeiroNumero = '5'; //number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

// = - * / operadores aritméticos

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); //typeof mostra o tipo da variável
console.log(typeof segundoNumero);
console.log(typeof resultado);