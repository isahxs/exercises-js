//Exercício 1 - Psicólogo
 
function avaliarSessao (nomePaciente, quantidadeSessoes) {
    console.log("Nome do paciente: " + nomePaciente);
 
    if(quantidadeSessoes >= 10) {
        return true;
    } else {
        return false;
    }
 
}  

let resultado = avaliarSessao("Isa", 20);
console.log(resultado);
 

//Exercício 2 - Bolo de Pote
 
const calcularValorPedido = (quantidadeBolos, valorUnitario) => {
    let total = quantidadeBolos * valorUnitario;
 
    if(quantidadeBolos >= 10) {
        total = total - (total * 0.10);
    }
    return total;
}
    let valor = calcularValorPedido(10, 12.00);
    console.log(valor);
 
 
//Exercício 3
 
function listarMateriais(materiais) {
    console.log("Total de materiais: " + materiais.length);
 
 
    let materiaisMaiusculos = materiais.map(function(material){
    return material.toUpperCase();
    });
 
    return materiaisMaiusculos;
}
    let lista = ["tinta", "pincel", "tecido"];
    let check = listarMateriais(lista);
    console.log(check);
 
 
 
//Exercício 4 - Confeitaria
 
const filtrarSaboresDisponiveis  = (sabores, letra) => {
    let saboresFiltrados = sabores.filter(sabor => sabor[0] === letra);
 
    return saboresFiltrados;
}
 
let sabores = ["chocolate", "morango", "maracujá", "coco"];
let filtragemSabores = filtrarSaboresDisponiveis(sabores, "m");
console.log(filtragemSabores);

//JSON - Exercícios

const quebraLinha = "\n";

// Desafio 01
// Function

// Desafio 02
// Arrow Function

// Desafio 03
// Function

// Desafio 04
// Function

// Desafio 05
// JSON

console.log("---Psicólogo---");
console.log("Paciente:" + quebraLinha);

const paciente = `{
    "nome": "Graziele Alves",
    "idade": 42,
    "plano-saude": false,
    "queixas": [
        "Insônia",
        "Irritabilidade"
    ],
    "ultima-sessao": {
        "data": "2026-03-16",
        "humor": 7,
        "prescricao": "Exercício físico diário"
    }
}`;

console.log(paciente + quebraLinha);

// Desafio 06
// JSON

console.log("---Ateliê---");
console.log("Pedido:" + quebraLinha);

const pedido = `{
    "dados-cliente": {
        "nome": "John Santos",
        "telefone": "(11) 97548-0382"
    },
    "tipo-peca": "Camisa",
    "medidas": {
        "busto": "12cm",
        "cintura": "8cm",
        "quadril": "4cm"
    },
    "tecido-escolhido": "Seda",
    "prazo": "4 Dias",
    "status": [
        "Recebido",
        "Em Produção",
        "Pronto",
        "Entregue"
    ]
}`;

console.log(pedido + quebraLinha);

// Desafio 07
// JSON

console.log("---Bolo Pote---");
console.log("Catálogo:" + quebraLinha);

const catalogo = `{
    promocaoAtiva: true ,
    descontoPercentual: 15,

    "sabores" : [
    {   
        "nome: " + "Chocolate com Morango",
        "preco: " + 12.00,
        "contemLactose: " + true,
        "ingredientes: " + ["chocolate", "morango", "leite condensado", "creme de leite"] 

    };
    {   
        "nome: " + "Morango com Coco",
        "preco:"  + 10.50,
        "contemLactose: " + false,
        "ingredientes: " + ["coco ralado", "morango", "leite condensado sem lactose", "creme de leite"] 
    };
    {   
        "nome: " : "Doce de Leite com Chocolate",
        "preco: " : 13.00,
        "contemLactose: " : false,
        "ingredientes: " : ["doce de leite", "chocolate", "leite condensado", "creme de leite"]
    };
    ]

}`;

console.log(catalogo + quebraLinha);


// Desafio 08
// JSON

console.log("---Confeitaria---");
console.log("Catálogo:" + quebraLinha);

const pedidoOnline = `{
    "id": 620010,
    "data-pedido": "2026-03-18",
    "cliente": {
        "nome": "Thomas Santos",
        "email": "thomas.ssouza@gmail.com"
    },
    "itens": [
        {
            "produto": "Bolo Formigueiro",
            "quantidade": 1,
            "observacoes": "Nenhuma"
        },
        {
            "produto": "Brigadeiro e Beijinho",
            "quantidade": 30,
            "observacoes": "Nenhuma"
        }
    ],
    "endereco-entrega": {
        "cep": "04750-000",
        "cidade": "São Paulo",
        "bairro": "Santo Amaro",
        "rua": "Dr. Antônio Bento",
        "numero": 393
    },
    "forma-pagamento": [
        "Cartão de Crédito",
        "Cartão de Débito",
        "Boleto Bancário",
        "PIX"
    ],
    "total-calculado": 150
}`;

console.log(pedidoOnline);