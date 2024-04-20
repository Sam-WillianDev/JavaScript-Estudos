
console.log('Codigo fora da funcao');

let alunos = [
    "Carlos"
]
function exibirAlunos(listaDeAlunos, quantidade) {
    console.log(listaDeAlunos);
    console.log(quantidade)
}

exibirAlunos(alunos, 30);
exibirAlunos("Clara", 20);
//-------------------------------------//

let nomeDoAluno = "Cauan"

function converterEmLetrasMaiusculas(alunos) {
    return alunos.toUpperCase();
}

let letra = converterEmLetrasMaiusculas(nomeDoAluno);
console.log(letra);