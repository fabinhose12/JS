let umaString = "Um \"texto\"";
console.log(umaString); // forma de escapar aspas duplas dentro de uma string

let umaString1 = 'Um \'texto\'';
console.log(umaString1); // forma de escapar aspas simples dentro de uma string 


//STRING COM QUEBRA DE LINHA
let umaString2 = "Um \ntexto";
console.log(umaString2); // forma de quebrar linha dentro de uma string


//                01234567
let umaString3 = "Um texto";

console.log(umaString3[4]); //acessa o caracter da posição 4 da string
//exibe a letra "E" que é o caracter da posição 4 da string "Um texto"

//caso esteja fora do range da string, o retorno será undefined
console.log(umaString3[10]); // exibe undefined

console.log(umaString3.charAt(5)); //acessa o caracter da posição 5 da string

console.log(umaString3.concat(' em um lindo dia')); //concatena a string com outra string

console.log(umaString3.indexOf('texto')); //retorna a posição do caracter da string
console.log(umaString3.lastIndexOf('texto')); //retorna a posição do caracter da string, mas procura de trás para frente

console.log(umaString3.match(/[a-z]/g)); //retorna um array com todas as letras minusculas da string

console.log(umaString3.toUpperCase()); //retorna a string em maiusculo
console.log(umaString3.toLowerCase()); //retorna a string em minusculo