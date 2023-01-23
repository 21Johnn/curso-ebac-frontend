class Animal {
    constructor(nome, cor, idade) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }
    
    comer() {
        console.log(`O animal ${this.nome} está comendo.`);
    }
    
    dormir() {
        console.log(`O animal ${this.nome} está dormindo.`);
    }
}

class Mamifero extends Animal {
    constructor(nome, cor, idade, pelo) {
        super(nome, cor, idade);
        this.pelo = pelo;
    }

    amamentar() {
        console.log(`O mamífero ${this.nome} está amamentando.`);
    }

    correr() {
        console.log(`O mamífero ${this.nome} está correndo.`);
    }
}

class Ave extends Animal {
    constructor(nome, cor, idade, bico) {
        super(nome, cor, idade);
        this.bico = bico;
    }

    voar() {
        console.log(`A ave ${this.nome} está voando.`);
    }

    piar() {
        console.log(`A ave ${this.nome} está piando.`);
    }
}

const mamifero1 = new Mamifero("Leão", "amarelo", 5, "curto");
const ave1 = new Ave("Pássaro", "vermelho", 2, "curto");
const ave2 = new Ave("Papagaio", "verde", 10, "grande");
