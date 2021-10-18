/* 12) Faça um algoritmo que calcule o fatorial de um número. */

const fatorial = (numero) => {
    aux=1
    for(let i=numero; i> 0 ; i--){
      aux *= i
    }
    console.log(aux)
  }
  
  fatorial(6)
  
  console.log(" ")