/*Implemente uma função que recebe como entrada um vetor de strings, que representam nomes de diferentes arquivos. 
A função deve permitir a operação de mudar a extensão do arquivo. Por exemplo: todos os arquivos que tiverem a extensão txt passarão a ter a extensão doc.*/

let prompt = require('prompt-sync')();

function trocarExtensao(vetor) 
{
    let i = 0;

   while (i < vetor.length) 
    {
        if (vetor[i].includes(".txt")) 
        {
            vetor[i] = vetor[i].replace(".txt", ".doc");
            i++;
        }
        else
        {
            i++;
        }
    
    }

    return vetor;

}

let vetor = [];
let i = 0;
let j = 0;

while (i < 4) {
    vetor[i] = prompt(`Digite o nome do arquivo ${i} (com extensao): `);
    i++;
}

trocarExtensao(vetor);

while (j < 4) 
{
    console.log();
    console.log(`Vetor ${j}: ${vetor[j]}`);
    j++;
}