//string, number, boolean, null, undefined, object, arra

const nome = 'Lucas'; //string
const nome1= "Lucas"; //string
const nome2 = `Lucas`; //string
const num1 = 10; //number
const num2 = 10.5; //number
let nomeAluno; //undefined = nao aponta para nenhum valor
const sobrenomeAluno = null; //null = nao aponta para nenhum valor  ( nulo por enquanto )
const aprovado = true; //boolean
const reprovado = false; //boolean

console.log(typeof nome, num1, num2, nomeAluno, sobrenomeAluno, aprovado, reprovado);

const a = [1, 2]; //array
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b); // [1, 2, 3] [1, 2, 3] - array é um tipo de objeto e é passado por referencia