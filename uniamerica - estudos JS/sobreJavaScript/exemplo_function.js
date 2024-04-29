function multiplicar(x, y){
    return x * y
}

var a = multiplicar(4,2)
console.log(a)

var b = multiplicar(8,9)
console.log(b)
//
function somaValores (a, b = 2, c = 6){
    var total = a + b + c
    return total
}

var c = somaValores(8)
console.log(c)
//
//função anonima 
var infoCal = function(a, b, c){
    return a + b + c 
}
console.log(infoCal(2,5,7))

//arrow function
const soma = (num1, num2) =>{
    return num1 + num2
}
console.log(soma(3,6))

const numerosEx = [1,2,3,4,5];
const valoresEx = numerosEx.map((num) => num * num)
console.log(valoresEx)

//
var listaProdutos = ["geladeira", "fogão", "Air fryer"];
var listaEmMaiusculo = listaProdutos.map(primeiraEmMaiuscula)

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaEmMaiusculo)




