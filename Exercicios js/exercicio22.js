/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/
const verificarValorAnuidade = (mes,valorAnuidade) => {
    jurosMes = 5
  
    for(let i = 1 ; i <= mes; i++){
      jurosMes = jurosMes + 5
    }
    jurosTotal = jurosMes /100
    total= jurosTotal *valorAnuidade
    console.log(`Total de juros a pagar: ${total}`)
  }
  
  verificarValorAnuidade(12,105)