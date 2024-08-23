/*Um programa simples em JavaScript para saber se tal pessoa atingiu a maioridade, quando atingiu a maioridade e se a idade for igual a maioridade*/

let prompt = require('prompt-sync')();

let nome = prompt("Digite o nome: ");
let idade = prompt("Digite a idade: ");

if(idade == 18)
{
  console.log(`${nome} atingiu a maioridade há menos de um ano`);
}
else if(idade > 18)
{
  console.log(`${nome} atingiu a maioridade ha ${idade-18} ano(s)`);
}
else
{
  console.log(`Faltam ${18-idade} ano(s) para ${nome} atingir a maioridade`);
}
