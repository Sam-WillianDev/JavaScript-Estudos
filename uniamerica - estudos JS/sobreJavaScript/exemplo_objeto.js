//Forma de criar objetos
const pessoa = {
    nome: 'Lucas',
    Sobrenome: 'Silva'
}

console.log(pessoa['Sobrenome'])

//2 - Forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.Sobrenome = "Joana"

console.log(funcionario.nome)

function criarPessoa(nome, Sobrenome){
    return {nome,Sobrenome}
}


//3 - forma de criar objetos
function criarPessoa(nome, Sobrenome){
    return {
        nome,
        Sobrenome,
        get nomeCompleto (){
            return ` ${this.nome} ${this.Sobrenome}`
        }

    }
}


const p1 = criarPessoa ("Arthur", "Silva")

const p2 = criarPessoa ("João", "Silva")

console.log(p1.nomeCompleto)
console.log(p2)
