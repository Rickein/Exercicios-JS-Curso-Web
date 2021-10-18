/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

vetor2 = [1,2,3,4,5,6,7,8,9]

const maiorMenorVetor = (vetor) => {
    menor = 10
    maior = 0
    for(let i =0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }
    console.log(`o maior numero do vetor: ${maior}, o menor numero do vetor: ${menor}`)

}


maiorMenorVetor(vetor2)