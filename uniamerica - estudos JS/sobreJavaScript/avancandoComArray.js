//splice altera o array atual 
var arr2 = [1, 2, 3, 4, 5, 6, 7 ]
arr2.splice(2,3)
console.log(arr2)

var nomes = ["Maria", "Joao", "Lucas", "Pedro"]
var novos = nomes.splice(1,1,"Luiz", "Ronaldo")
console.log(novos)

//Acrecentar mais um elemento no inicio 
var pais = ["Brasil", "Argentina","Colombia"]
pais.unshift("Uruguai")
console.log(pais)

//Atividade Arrays

var nomesPessoas = ["Guilherme","Manoel", "Samuel", "David","João"]

//Acresentar o nome da monica 
nomesPessoas.unshift("Monica")
console.log(nomesPessoas)

//retirar o ultimo elemento do array/Tbm o pop pode ser colocado dentro de um outro var
nomesPessoas.pop()
console.log(nomesPessoas)

//Encontra a posição do Samuel
console.log(nomesPessoas[3])

//Trocar manuel para Emanoel
var trocaNome = nomesPessoas.splice(1,2, "Emanoel")
console.log(nomesPessoas)