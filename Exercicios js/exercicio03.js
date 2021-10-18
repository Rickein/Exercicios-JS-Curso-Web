/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const exponenciacao = (base,expoente) => {
    aux = 1;
    for(let i= 0; i < expoente; i++){
      aux *= base
    }console.log(aux)
  }
  
  exponenciacao(2,4)
  console.log(" ")