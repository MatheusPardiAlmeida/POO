/*Implemente, em JavaScript, uma função que recebe como entrada uma string, que representa o nome de um arquivo de texto (exemplo: "arquivo.txt". 
A função deve retornar:
o nome do arquivo sem a extensão;
a quantidade de caracteres presentes no nome do arquivo (sem a extensão);*/

let prompt = require('prompt-sync')();

function removerExtensao(string) 
{
   string = string.replace(/.[^/.]+$/, "");

    return string;   
}

let string = prompt("Digite o nome do arquivo(com extensao): ");

console.log(removerExtensao(string));