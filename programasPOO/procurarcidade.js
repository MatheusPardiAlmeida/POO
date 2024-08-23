/*Frederico está estagiando na área de desenvolvimento de software.
Atualmente, ele está encarregado de desenvolver a seguinte solução:
verificar se uma determinada cidade existe em um vetor que contém nomes
de cidade. Se existir, a posição em que essa cidade se encontra deve ser
identificada. Se não existir, deve ser retornado o valor `null`. Como isso pode
ser implementado em JavaScript?*/

function encontrar(cidade, cidadeEscolhida)
{
    let index = cidade.indexOf(cidadeEscolhida);
    return index !== -1 ? index : null;
}

let cidades = ["Cuiaba", "Sao Paulo", "Rio de Janeiro", "Rio Claro", "Piracicaba"];
console.log(encontrar(cidades,"Fortaleza"));