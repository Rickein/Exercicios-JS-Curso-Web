/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

let vetor1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

const consultaIntervaloVetor = ( vetor ) => {
    aux = 0;
    aux1 = 0;

    for(let i =0; i <= vetor.length ; i++){
        if(vetor[i] >= 10 && vetor[i] <=20 ){
            aux++
        }
        else{
            aux1++
        }
    }

    console.log(`Numeros do vetor no Intervalo de 10 a 20 :${aux}, numeros fora do intervalo:${aux1}`)
}

consultaIntervaloVetor(vetor1)