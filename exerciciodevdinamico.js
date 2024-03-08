class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} gerencia o departamento ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} programa em ${this.linguagem}.`);
    }
}

const gerente1 = new Gerente('Luis', 30, 'Gerente de Relacionamento', 'Comercial');
gerente1.seApresentar(); 
gerente1.trabalhar();    
gerente1.gerenciar();    

const desenvolvedor1 = new Desenvolvedor('Aline', 35, 'Desenvolvedora Full-Stack', 'JavaScript');
desenvolvedor1.seApresentar(); 
desenvolvedor1.trabalhar();    
desenvolvedor1.programar();    
