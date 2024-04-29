//para ver o tamanho da string junto com seus espaços
var nome = "Marcelo"
var x = nome.length
console.log(x)

resultado = x > 15 ? "Obrigado" : "Por favor preencha seu nome completo"
console.log(resultado)

//caixa alta SS
var res = nome.toLocaleUpperCase()
console.log(res)

//Ver a posição de alguma palavra
var jogo = "Barcelona VS real melhor time"
var posição = jogo.indexOf("real")
console.log(posição)

//Cortar uma palavra
var cortado = jogo.slice(0,9)
console.log(cortado)

//Para saber se existe determinada palavra na frase 
var val = jogo.includes("real")
console.log(val)

//Concat
var str1 = "Hello";
var str2 = " Turma";

var str3 = str1.concat(str2)
console.log(str3)

//Ele revomo os espaços de uma string
var frase = "      Olá vc esta apredendo javascript"
console.log(frase.trim())

//transformar string em array
var num = "1, 2, 3, 4, 5, 6, 7, 8"
var arr =num.split(",")
console.log(arr[1])

//Exemplos subStrings
var s = "JavaScript e Python"

var pos1 = s.indexOf("Python")

var novaString = s.substring(13,19)
console.log(novaString)


//Atividade
var frase2 = "Olá mundo"
if(frase2.startsWith("Olá")){
    let sub= frase2.substring(4,)
    let novaString2 = sub.replace("mundo", "pessoal")
    let novaStringMaiuscula = novaString2.toLocaleUpperCase()
    console.log(novaStringMaiuscula)
}

//
var url = "http:/minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme"
const parametros = url.split("?")[1]

console.log(parametros)
const valores = parametros.split("&")


for(let i = 0; i < valores.length; i++){
   if(valores[i].startsWith("atores")){
    valores[i] = "atores" + valores[i].substring(7).toLocaleUpperCase()
   }
}
console.log(valores)




