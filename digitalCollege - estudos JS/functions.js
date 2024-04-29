
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

//-------------------------------------//

let soma = function (n1,n2){
    return n1 + n2;
}

let subtrair = function (n1,n2){
    return n1 - n2;
}

function calculadora(n1,n2, action, action2){
    if(n1 > n2) {
      return action (n1,n2);        
    }
      return action2(n1,n2);
}

let resultado = calculadora(10,20, function(n1,n2) {return n1 - n2}, soma);
console.log(resultado);

