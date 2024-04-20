//Criando variavel e aplicando desconto
let valor1 = 100 ;  

let desconto = valor1 * 0.1;

let valorComDesconto =  valor1 - desconto;

//let texto = "De " + valor1 + " por " + valorComDesconto;
//let texto = "De " .concat(valor1, " por " , valorComDesconto);
let texto = `De ${valor1} por ${valorComDesconto}`


console.log(desconto);
console.log("De ", (valor1), " por " , (valorComDesconto));
console.log(texto);