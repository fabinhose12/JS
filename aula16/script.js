let num1= 1500; //number


console.log(num1.toString(2));   //binario


let num2= 10.4578923;

console.log(num2.toFixed(2)); // exibe apenas dois numeros 


console.log(Number.isInteger(num1)); // numero inteiro 

//imprecisão do js

let num3 = 0.7;
let num4 =0.1;


num3 += num4;
num3 += num4;
num3 += num4;

num3= parseFloat(num3.toFixed(2));  //coloca o valor correto


console.log(num3);  //valor correto seria 1.0 mas ele retorna 0.999999999