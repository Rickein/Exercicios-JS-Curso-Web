 /* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
 */

const concat = (texto) => {
    return 'Olá '+ texto +"!"
}

console.log(concat("Rick"))


/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. */

const idadeDias = (idade) => {
    return idade * 365
}

console.log(idadeDias(24))

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */

const calcularSalario = (horasTrabalhadas,recebeporHora) => {
    return "Salário igual a R$"+ horasTrabalhadas*recebeporHora
}

console.log(calcularSalario(150, 40.5))


/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

const nomeDoMes = (numero) => {
    switch(numero){
        case 1:
            return 'Janeiro'
            break   
        case 2:
            return 'Fevereiro'
            break
        case 3:
            return 'Março'
            break
        case 4:
            return 'Abril'
            break
        case 5:
            return 'Maio'
            break
        case 6:
            return 'Junho'
            break
        case 7:
            return 'Julho'
            break
        case 8:
            return 'Agosto'
            break
        case 9:
            return 'Setembro'
            break
        case 10:
            return 'Outubro'
            break
        case 11:
            return 'Novembro'
            break
        case 12:
            return 'Dezembro'
            break
        default:
            return 'Valor inválido'
            break
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(5))

/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

const maiorOuIgual = (n1,n2) => {
    if( n1 >= n2){
        return true
    }
    else{
        return false
    }
}

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,6))
console.log(maiorOuIgual(5,1))

console.log("-------")



/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ..."   

*/
const inverso = (valor) => {
    if(valor == true || valor == false) {
        return !valor
    }
    if(typeof(valor) === "number"){
        return -valor
    }
    else{
        return "booleano ou número esperados é do tipo"+ typeof(valor)
    }
}

console.log(inverso(true))
console.log(inverso(5))

console.log("---------")

/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */

const estaEntre = (numero,minimo,maximo,inclusivo= false) => {
    if(numero > minimo && numero < maximo){
        return true || inclusivo
    }else{
        return false || inclusivo
    }
}

console.log(estaEntre(10, 100, 50)) 
console.log(estaEntre(16, 100, 160)) 
console.log(estaEntre(3, 150, 3)) 
console.log(estaEntre(3, 150, 3, true))

/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

const multiplicar = (n1,n2) => {
    aux = 0
    if(n1 >= 0 && n2 >= 0){
        for(let i =0; i < n2; i++){
            aux+= n1
        }
    }
    console.log(aux)
}

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0

/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

const repetir =(informacao,repetidor) => {
    newArray = []
    for(let i =0; i<repetidor;i++){
        newArray.push(informacao)
    }
    console.log(newArray)
}

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]


/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

const simboloMais = (numero) => {
    a=" "
    for (let i =0; i < numero ; i++){
        a+= "+"
    }
    console.log(a)
}

simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"

