/*4. Agora que você já sabe como fazer operações básicas em JavaScript,
desenvolva um programa que leia o nome e o salário de uma pessoa. Em
seguida, imprima quanto ficaria o salário após um reajuste de 14.7%.
Verifique também se o novo salário passa do valor de R$ 5.421,25. Se passar,
calcule um imposto de 20% sobre o novo salário. Apresente na saída:
o salário original;
o novo salário, com o reajuste aplicado;
se for superior ao valor informado, exiba tanto o valor do imposto quanto o
restante do salário após o desconto do imposto;
se não for superior ao valor informado, exiba a informação de que o novo
salário não tem aplicação do imposto.*/

let prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
console.log();
let salario = prompt("Digite seu salario: R$");

let salarioReajuste = salario * 1.147;
let imposto = salarioReajuste * 0.2;

if (imposto) 
{
    salarioImposto = salarioReajuste - imposto;
    console.log();
    console.log(`Salario atual: R$${salario} `);
    console.log(`Valor do imposto: R$${imposto.toFixed(2)}`);
    console.log(`Valor do salario com desconto do imposto: R$${salarioImposto.toFixed(2)}`); 
}
else
{
    console.log();
    console.log(`Salario atual: R$${salario.toFixed(2)} `);
    console.log(`Salario reajustado: R$${salarioReajuste.toFixed(2)}`);
    console.log(`Nao possui nenhum imposto.`);
}


