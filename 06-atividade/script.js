//Exercício 1 - Classe (Psicólogo)

/* Crie uma classe chamada Psicologo com:

-nome
-valorSessao

Crie um método chamado calcularFaturamento(qtdSessoes) que receba a 
quantidade de sessões e retorne o faturamento.

Depois:

1.Crie uma instância.
2.Calcule o faturamento para 30 sessões.
*/

class Psicologo {
    constructor(nome, valorSessao) {
        this.nome = nome;
        this.valorSessao = valorSessao;
    }

    calcularFaturamento(qntSessoes){
        return this.valorSessao * qntSessoes;
    }
}

const psicologo = new Psicologo('Isabelly Fernandes', 120.00);

const faturamentoTotal = psicologo.calcularFaturamento(30);
console.log(`O faturamento para 30 sessões é R$ ${faturamentoTotal.toFixed(2)}`);

//Exercício 2 - Herança (Ateliê de Costura)
/*Pergunta:

Crie:
-Uma classe Servico com tipo e valor
-Um método descricao()

Depois crie uma classe Costura que herda de Servico e tenha:
-prazoDias

Crie um objeto e mostre todas as informações.
*/

class Servico {
    constructor(tipo, valor){
        this.tipo = tipo;
        this.valor = valor;
    }

    descricao() {
        return `Servico: ${this.tipo} - Valor: R$${this.valor}`;
    }
}

class Costura extends Servico {
    constructor(tipo, valor, prazoDias) {

        super(tipo, valor);
        this.prazoDias = prazoDias;
    }

    descricao() {
        return `${super.descricao()} - Prazo: ${this.prazoDias} dias`;
    }
}

const servicoCostura = new Costura("Barra de calça jeans", 40.00, 1);
console.log(servicoCostura.descricao());




