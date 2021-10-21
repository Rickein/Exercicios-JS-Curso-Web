
// Criar uma função que receba um array de números e retorne o menor número desse array.

const menorNumero = (array) => {
aux=10
for(let i=0; i <= array.length;i++){
    if(array[i] < aux){
        aux = array[i]
    }
}console.log(aux)

}


menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15

console.log('---')

/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado
*/

const funcaoDaSorte = (numero) => {
random = Math.random() *(10-1) + 1
formatado = random.toFixed(0)
    if(numero == formatado){
       console.log("Parábens!, O numero sorteado foi "+formatado) 
    }
    else{
       console.log("Que pena! O número sorteado foi " +formatado) 
    }
}

funcaoDaSorte(10) 
funcaoDaSorte(5) 
funcaoDaSorte(3)

console.log('---')

//Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

const contarPalavras = (string) => {    

c= string.split(" ")
console.log(c.length)
}

contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5

console.log('---')

//Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
//vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
//maiúsculas de minúsculas.

const contarCaractere = (letra,string) => {
    aux=0
    for(let i=0;i < string.length;i++){
        if(string[i] === letra){
            aux++
        }
    }
    console.log(aux)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

//Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
//de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

const buscarPalavrasSemelhantes = (palavra,array) => {
    newList=[]
    for(let i=0;i<array.length;i++){
        if(array[i].includes(palavra)){
            newList.push(array[i])
            
        }
    }
    console.log(newList)
        
    //array.includes(palavra)
}

buscarPalavrasSemelhantes("pro",["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("pro",["javascript", "java", "c++"]) // retornará []

//Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
//consoantes, ou seja, sem as vogais.

const removerVogais = (string) => {
    texto=" "
    for(let i =0;i < string.length;i++){
        if(string[i] == "a"|| string[i] == "e"|| string[i] == "i"|| string[i] == "o"|| string[i] == "u"){
        }
        else{
            texto+=string[i]
        }
    }
    console.log(texto)
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"

console.log('-----')

//Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
//ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
//exemplo a seguir:

const inverter = (objeto) => {
    const auxiliar = {}

    valores= Object.values(objeto)
    chaves= Object.keys(objeto)

    for(let i=0;i <chaves.length;i++){
        auxiliar[valores[i]] = chaves[i]  
    }
    console.log(auxiliar)
}

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

//Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
//que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
//têm a quantidade de dígitos indicada pelo segundo parâmetro.

const filtrarPorQuantidadeDeDigitos = (array,numerodeDigitos) => {
    newArray= []
    for(let i=0; i< array.length;i ++){
        if(numerodeDigitos == 1){
            if(array[i] >=1 && array[i] < 10){
                newArray.push(array[i])
            }    
        }
        if(numerodeDigitos == 2){
            if(array[i] > 9 && array[i] < 100){
                newArray.push(array[i])
            }    
        }
        if(numerodeDigitos == 3){
            if(array[i] >99 && array[i] < 999){
                newArray.push(array[i])
            }    
        }
    }
    console.log(newArray)    
}


filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]

console.log('-----')
//Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array

const segundoMaior= (array) => {
 
    format = array.sort( function compararNumeros(a,b){
        return a-b
    })
    console.log(format[format.length-2])
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6

//Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
//num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
//com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.


console.log('-------')
const recerberMelhorEstudante = (objeto) => {

    valores= Object.values(objeto)
    chaves= Object.keys(objeto)
    let soma = (total,valor) => total+valor

    auxmedia=0
    auxaluno=" "
    for(let i =0; i< chaves.length;i++){
        aluno=chaves[i]
        media=valores[i].reduce(soma)/valores[i].length
        if(media > auxmedia){
            auxmedia= media
            auxaluno=aluno
        }

    }

    const novoObjeto = {nome:auxaluno,media:auxmedia}
    console.log(novoObjeto)
}


recerberMelhorEstudante(
    {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }
    ) // retornará { nome: "Mariana", media: 7.875 }
