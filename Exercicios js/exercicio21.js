/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130
*/

console.log(" ")
const verificaCustoPlanoSaude = (idade) => {
  custoFixo = 100
  if(idade < 10)
  {
    custoAdicional = custoFixo +80
    console.log("total a pagar: R$"+custoAdicional)
  }
  else if( idade > 10 && idade < 30)
  {
    custoAdicional = custoFixo +50
    console.log("total a pagar: R$"+custoAdicional)
  }
  else if( idade > 30 && idade < 60)
  {
    custoAdicional = custoFixo +95
    console.log("total a pagar: R$"+custoAdicional)
  }
  else if( idade > 60)
  {
    custoAdicional = custoFixo +130
    console.log("total a pagar: R$"+custoAdicional)
  }else
  {
    console.log("idade inválida")
  }

}

verificaCustoPlanoSaude(5)
verificaCustoPlanoSaude(15)
verificaCustoPlanoSaude(35)
verificaCustoPlanoSaude(65)
verificaCustoPlanoSaude('aaa')


console.log(" ")