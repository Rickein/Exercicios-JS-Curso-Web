/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

let vetorX= [1,2,3,4,5]
let vetorY= [6,7,8,9,10]

const substituir = (arrayA,arrayB) => {
    a = arrayB.length
    b = arrayA.length
    let aux =[]
    let aux2 = []
    for(let i =0; i < a ; i++){
        aux.push(arrayA.pop())
    }
    for(let i =0; i < b ; i++){
        aux2.push(arrayB.pop())
    }

    for(let i =0; i < a ; i++){
        arrayA.push(aux2.pop())
    }

    for(let i =0; i < b ; i++){
        arrayB.push(aux.pop())
    }

    console.log(arrayA)
    console.log(arrayB)
}

substituir(vetorX,vetorY)
