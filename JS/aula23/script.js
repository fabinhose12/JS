// objetos
/* 
let array = [1, 2, 3];
array.push(0);
array[3] = 'fabio';
array = "pericles";

console.log(array); */
/* 
const nome01 = 'Fabio';
const sobrenome01 = 'Gomes';
const idade01 = 30;

const nome02 = 'Pericles';
const sobrenome02 = 'belo';
const idade02 = 30;
 */
/* const pessoa1 = {
  nome: 'Fabio',
  sobrenome: 'Gomes',
  idade: 21,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
 */

/* function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
}
                                                                // argumentos são os valores que passamos para a função, e os parâmetros são as variáveis que vão receber esses valores
const pessoa1 = criaPessoa('Fabio', 'Gomes', 21);
const pessoa2 = criaPessoa('zé', 'Gomes', 21);
const pessoa3 = criaPessoa('Pericles', 'Belo', 30);
const pessoa4 = criaPessoa('Maria', 'Silva', 25);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome); */

const pessoa1 = {
    nome: 'Fabio',
    sobrenome: 'Gomes',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa1.fala();