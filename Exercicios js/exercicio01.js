/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.

 */

const valores = (n1,n2) => {
    soma = n1 + n2
    sub = n1 - n2
    div = n1 /n2
    multi = n1 * n2
    console.log(`Soma:${soma}, Subtração:${sub}, Divisão:${div} ,Multiplicação:${multi}`)
  }
  
  valores(10,5)
  console.log(" ")