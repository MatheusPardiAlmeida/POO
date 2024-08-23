/*Implemente um programa em JavaScript que, usando vetores/arrays, armazene as seguintes informações para uma pessoa: nome, 
saldo e idade. O programa deve ser registros para várias pessoas, 
até que seja informado -1 no lugar do nome. Ao final do processo, o programa deve exibir o nome das pessoas com saldo negativo;*/

const prompt = require('prompt-sync')();

function coletarDados() 
{
    let pessoas = []; //vetor

    while (true) 
    {
        let nome = prompt("Digite seu nome: ");
        console.log();
        
        if (nome === "-1") 
        {
            break;
        }

        let saldo = parseFloat(prompt("Digite seu saldo: R$")); //Parse serve para limitar o tipo de dado da variavel
        console.log();

        let idade = parseInt(prompt("Digite sua idade: "));
        console.log();

        const individuo = { //Array para guardar os dados de cada indivíduo 
            nome: nome,
            saldo: saldo,
            idade: idade
        };

        pessoas.push(individuo); //Envia os dados do array de inviduo para o array de pessoas
        
    }

    return pessoas;
    
}

function pessoasSaldoNegativo(pessoas)
{
    console.log();
    console.log("Pessoas com saldo negativo:");
    pessoas.forEach(individuo => {

        if (individuo.saldo < 0) 
        {
            console.log();
            console.log("Nome:", individuo.nome); 
        }
        
    });

}
const grupoPessoas = coletarDados();
pessoasSaldoNegativo(grupoPessoas);