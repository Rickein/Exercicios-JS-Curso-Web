/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

console.log(" ")

const numeroPorextenso = (numero) => {
  switch (numero) {
    case 1:
      console.log("numero um")
      break
    case 2:
      console.log("numero dois")
      break
    case 3:
      console.log("numero tres")
      break
    case 4:
      console.log("numero quatro")
      break
    case 5:
      console.log("numero cinco")
      break
    case 6:
      console.log("numero seis")
      break
    case 7:
      console.log("numero sete")
      break
    case 8:
      console.log("numero oito")
      break
    case 9:
      console.log("numero nove")
      break      
    case 10:
      console.log("numero dez")
      break
    default:
      console.log("Numero fora do Intervalo")
  }

}

numeroPorextenso(5)
numeroPorextenso(3)
numeroPorextenso(11)

console.log(" ")
