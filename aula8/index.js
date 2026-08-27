/*
Luiz Otavio Miranda tem 40 anos, pesa 84 kg, tem 1.80 de altura e seu IMC é de 25.9
Luiz Otavio nasceu em 1986.
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 40;
const peso = 84;
const alturaEmM = 1.80;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2026 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);

console.log(nome, 'nasceu em', anoNascimento);