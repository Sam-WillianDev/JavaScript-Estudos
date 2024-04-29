// Para atrbuir quantas posições(tamanho) existe em um array
var arr = []
arr.length = 42

//Declarando o array e monstrando no console 
var valores = [2, 3, 4, 5, 6]
console.log(valores[0])

//Fazendo interação com array 
for (var pos = 0; pos < valores.length; pos++){
    console.log("Posição: "  + pos +  " Valores: "+ valores[pos])

}

//Calcular a media de todos os numeros de um array 
var soma = 0
for (var pos = 0; pos < valores.length; pos++) {
    soma += valores[pos];
}
var media = soma/valores.length;
console.log(media);

//manipulando array
//Reverter ordem do array 
console.log("Array invertido" + valores.reverse())

//Transforma um array em uma string 
console.log(valores.join('|'))

//Retirar elementos 
var num = [9, 8, 6, 5]
var retirado = num.shift();
console.log(retirado)
console.log(num)

//Pegar a posição de um array 
//console.log("Posição do numero 3" + num.indexOf(4));

//Acresenta no final do array 
valores.push(7);
console.log(valores)

//Retirar o ultimo elemento do array 
valores.pop()
console.log(valores)