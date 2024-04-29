//Instrução IF/else if / Else
var pais = "Brasil"

if(pais != "Brasil"){
    console.log("Voce é estrangeiro")
}else{
    console.log("Voce é brasileiro")
}


var idade = 22;

if(idade < 16){
    console.log("Não vota")
}else if (idade < 18){
    console.log("Voto opcional")
} else{
    console.log("Voto obrigatorio")
}

//Instrução ao switch 

var diaSemana = 2
switch (diaSemana) {
    case 1:
        console.log("Domingo")
    break;

    case 2:  
        console.log("Segunda")
    break;

    case 3:
        console.log("Terça")
    break;

    default:
        console.log("Esse dia da semana não existe")

}

