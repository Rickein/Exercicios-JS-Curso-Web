/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

let vetorNumericos = [1,2,3,4,5];
let y= 5;

const multiplicadorVetor = (vetor,multiplicador) => {
    aux = []
    for (let i =0; i <vetor.length; i++){
        aux.push(vetor[i]*multiplicador)
    }
    console.log(aux)
}

const multiplicadorVetorMaiorQue5 = (vetor,multiplicador) => {
    aux = []
    if(multiplicador > 5){
    for (let i =0; i <vetor.length; i++){
        aux.push(vetor[i]*multiplicador)
    }
    console.log(aux)
}
else{
    console.log("multiplicador deve ser maior que cinco")
}
} 
    
multiplicadorVetor(vetorNumericos,y)
multiplicadorVetorMaiorQue5(vetorNumericos,2)
multiplicadorVetorMaiorQue5(vetorNumericos,6)