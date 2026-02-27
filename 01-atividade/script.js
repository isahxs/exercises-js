/*Exercíco 1  Bolo de Pote (Cálculo de Lucro)
Uma empreendedora vende bolo de pote por R$ 12,00 cada.
O custo de produção por unidade é R$ 5,50.
Se ela vendeu 30 unidades, calcule:
• O lucro por unidade
• O lucro total
Exiba o resultado utilizando concatenação, declarando variáveis e constantes e 
adicionando comentários no código. */

// definindo valores
let precoVenda = 12.00; 
let custoUnitario = 5.50;
let quantidadeVendida = 30;

// cálculo
let lucroUnitario = precoVenda - custoUnitario;
let lucroTotal = lucroUnitario * quantidadeVendida;
const lucroTotalFinal = lucroTotal;

// Resultados
console.log(`Preço de venda: R$ ${precoVenda.toFixed(2)}`)
console.log(`Custo Unitário: R$ ${custoUnitario.toFixed(2)}`)
console.log(`Lucro por unidade: R$ ${lucroUnitario.toFixed(2)}`)
console.log(`Quantidade vendida: R$ ${quantidadeVendida} unidades`)
console.log(`Lucro total: R$ ${lucroTotal.toFixed(2)}`)


// Exercício 2 Confeitaria (Desconto)
/* Uma confeitaria vende um bolo por R$ 150,00.
Um cliente recebeu 10% de desconto.
Calcule:
• O valor do desconto
• O valor final do bolo
Mostre o resultado utilizando interpolação. */

// definindo valores
let valorBolo = 150;
let desconto = 0.10;

// cálculo
let valorDesconto = valorBolo * desconto; //10% 
let valorFinal = valorBolo - (desconto * valorBolo);

console.log(`O valor do desconto é R$ ${valorDesconto}`);
console.log(`O valor final do bolo é R$ ${valorFinal}`);



// Exercício 3 - Estilista (Comissão)
/* Uma estilista vendeu um vestido por R$ 800,00. 
Ela recebe 15% de comissão sobre a venda. 
Calcule o valor da comissão e exiba o resultado usando interpolação. */
let valorVenda = 800;
let comissao = valorVenda * 0.15;

console.log (`O valor da comissão é R$ ${comissao.toFixed(2)}`)

// Exercício 4 - Psicólogo (Faturamento Mensal)
/* Um psicólogo cobra R$ 120,00 por sessão.
No mês, ele realizou 40 sessões.
Calcule o faturamento mensal e exiba o resultado por concatenação. */
let valorSessao = 120;
let quantidadeSessoes = 40;

let faturamento = valorSessao * quantidadeSessoes;

console.log("\nO faturamento mensal é =R$ " + faturamento.toFixed(2));