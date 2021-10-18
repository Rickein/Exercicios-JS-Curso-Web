/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorA = [1,2,3,4]
let vetorB = ["a","b","c","d"]
let vetorC = [1.2,2.3,3.4,4.8]

const concat = (vetor1,vetor2,vetor3) => {
    let resultado = vetor1.concat(vetor2,vetor3);
    console.log(resultado)
}

concat(vetorA,vetorB,vetorC)
