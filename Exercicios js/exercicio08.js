/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */
console.log(" ")

let string = "10,20,20,8,25,3,0,30,1"

function formatar(lista){
    formatado = lista.replace("",[])
    novoarray = formatado.split(",")
    novalista = []
    for(let i=0; i < novoarray.length; i++){
        novalista.push(parseInt(novoarray[i]))
    }
    
    resultados = []
    recordes=0
    aux = novalista[0];
    for(let j=0; j < novalista.length;j ++){

        if(novalista[j]> aux){
            recordes = recordes +1
            aux= novalista[j]
        }

    }
    resultados.push(recordes)

    menorResultado = 10;
    for(let l=0; l < novalista.length;l ++){

        if(novalista[l] < menorResultado){
            menorResultado = novalista[l]
        }
    }

    resultados.push(novalista.indexOf(menorResultado)+1)

    console.log(resultados)
}

formatar(string)

console.log(" ")