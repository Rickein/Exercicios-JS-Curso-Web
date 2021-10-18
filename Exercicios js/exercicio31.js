/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

vetor3 = [-5,-4,-3,-2,-1,0,1,2,3,4,5]

const numerosNegativosVetor = (vetor) => {
    aux = 0
    for(let i =0 ; i <= vetor.length ; i++){
        if(vetor[i] < 0){
            aux = aux +1
        }
    }
    console.log("numeros negativos no vetor "+aux)
}

numerosNegativosVetor(vetor3)

console.log(" ")