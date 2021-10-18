/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

console.log(" ")

const calculaNovoSalario = (plano,salario) => {
  switch (plano){
    case 'A':
      aumento = salario * 0.10
      console.log("Novo salario: R$"+(salario + aumento))
      break
    case 'B':
      aumento = salario * 0.15
      console.log("Novo salario: R$"+(salario + aumento))
      break
    case 'C':
      aumento = salario * 0.20
      console.log("Novo salario: R$"+(salario + aumento))
      break
  }
}

calculaNovoSalario('A',2000)
calculaNovoSalario('B',2000)
calculaNovoSalario('C',2000)