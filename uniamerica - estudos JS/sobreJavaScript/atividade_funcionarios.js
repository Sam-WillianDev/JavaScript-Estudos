class funcionarios {
    constructor(nome, idade, cargo) {
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }
    seApresentar() {
        console.log( `Olá, meu nome é ${this.nome} e eu sou um ${this.cargo}.`)

    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando.`)
        

    }
}
class Gerente extends funcionarios{
    constructor (nome, idade, cargo, departamento){
        super(nome, idade, cargo)
        this.departamento = departamento
    }
    gerenciar(){
        console.log(`${this.nome} é um gerente do departamento ${this.departamento}.`)

    }

}

class Desenvolvedor extends funcionarios{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem
    }
    programar(){
        console.log(`${this.nome} é um desenvolvedor que programa em ${this.linguagem}.`)


    }

}

const gerente = new Gerente("Samuel", 35, "Gerente de Projetos", "TI");
const desenvolvedor = new Desenvolvedor("Willian", 28, "Desenvolvedor Web", "JavaScript");

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
