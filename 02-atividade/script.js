// Exercício 1
 
// Quantidade de bolos vendidos
let bolosVendidos = 35;
 
// Meta de vendas
let meta = 30;
 
// Verificar se atingiu a meta
if (bolosVendidos >= meta) {
    console.log("A empreendedora atingiu a meta!");
} else {
    console.log("A meta não foi atingida.");
}
 
// Verificar se superou a meta
if (bolosVendidos > meta) {
    console.log("A empreendedora superou a meta!");
} else {
    console.log("A meta não foi superada.");
}
 
 
// Exercício 2
 
 
// Dados do pedido
let valorPedido = 180;
let clienteVIP = true;
 
 
// Verificação do frete grátis
if(valorPedido > 200 || clienteVIP === true) {
    console.log("O cliente tem direito ao frete grátis!");
} else {
    console.log("O cliente não tem direito ao frete grátis.");
}


// Exercício 3 - Ateliê de Costura (Desconto Especial)

/* Um ateliê oferece 10% de desconto se:
-O valor do serviço for maior ou igual a R$500 
E
-O cliente for antigo

Considere:
-O valor do seviço: R$650
-Cliente antigo: true

Verifique se o cliente tem direito ao desconto usando operador lógido AND*/

// Verificação do desconto
const valorServico = 650;
const clienteAntigo = true;

const temDesconto = valorServico >= 500 && clienteAntigo === true;

if(temDesconto){
    console.log("Cliente tem direito ao desconto de 10%!");
}
else{
    console.log("Cliente não tem direito ao desconto")
}


// Exercício 4 - Psicólogo (Horário Disponível)

/* Um psicólogo atende apenas se:
-O horário estiver disponível 
E
-O paciente estiver cadastrado

Considere:
-Horário disponível: true
-Paciente cadastrado: false

Verifique se a consulta pode ser agendada */

// Dados fornecidos

const horarioDisponivel = "true"
const pacienteCadastrado = "false"

const podeAgendar = horarioDisponivel && pacienteCadastrado;

if (podeAgendar) {
    console.log("Consulta pode ser agendada!");
}
else {
    console.log("Consulta não pode ser agenda, vamos realizar o seu cadastrado para o agendamento da consulta");
}

