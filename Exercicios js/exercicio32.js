/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

vetor4 = [1,2,3,4,5,6,7,8,9]

const mediaAritmeticaVetor = (vetor) => {
  aux = 0
  for(let i =0 ; i < vetor.length; i++){
    aux = aux + vetor[i]
  }
  total = aux / vetor.length

  console.log("a Média aritmetica do vetor é: "+total)
}

mediaAritmeticaVetor(vetor4)