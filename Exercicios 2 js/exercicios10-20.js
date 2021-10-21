/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
*/

const receberPrimeiroEUltimoElemento = (array) => {
    newArray = []
    newArray.push(array.shift())
    newArray.push(array.pop())

    console.log(newArray)
}

receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

console.log('-------')
/* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro
*/

const removerPropriedade = (objeto,propriedade) => {
    const novoObjeto = Object.assign({}, objeto)
    
    delete novoObjeto[propriedade]
    console.log(novoObjeto)
}


removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}


console.log('-----')
/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.

*/

const filtrarNumeros = (array) => {
    newArray = []
    for (let i=0; i <= array.length; i++){
        if(typeof(array[i]) == "number"){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []

/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/
console.log("----")
const objetoParaArray = (objeto) => {
newArray = []

valores= Object.values(objeto)
chaves= Object.keys(objeto)

for(let i=0; i< chaves.length; i++){
    newList=[]
    newList.push(chaves[i])
    newList.push(valores[i])
    newArray.push(newList)
    }
console.log(newArray)
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
    objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
    
console.log('--------')

/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

const receberSomenteOsParesDeIndicesPares =(array) => {

    newList = []
    for(let i =0; i< array.length; i++){
        if(array[i] %2 == 0 && i %2 ==0){
            newList.push(array[i])
        }
    }
    console.log(newList)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]

/* desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não */

console.log('------------')
const checarAnoBissexto = (ano) => {
    if(ano % 100 == 0){
        console.log('False')
    }
    else if(ano % 4 == 0 || ano % 400 == 0){
        console.log("ano bissexto")
    }
    
}

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400

//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

const somarNumeros = (array) => {

    const filtroSoma = (total,valor) => total+valor
    console.log(array.reduce(filtroSoma))
}


somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60

//Crie uma função que receba um array de produtos e retorne o total das despesas.

console.log("-----------")

const despesasTotais = (array) => {

    const getPreco = (array) => array.preco
    const soma = (total,valor) => total+valor
    console.log(array.map(getPreco).reduce(soma))
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) // retornará 239.99
    despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89

// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
//indeterminada de números e retorne a média simples desses números.

const calcularMedia = (array) => {

    soma = (total,valor) => total+valor
    console.log(array.reduce(soma)/array.length)
}

calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3

//Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
//deverá ser de duas casas decimais, arredondando se necessário.

const areaDoTriangulo = (base,altura) => {
    area = (base*altura)/2
    console.log(area.toFixed(2))
}

areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59

