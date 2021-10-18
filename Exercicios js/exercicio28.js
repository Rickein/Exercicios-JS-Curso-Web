let vetor = [1,2,3,4,5,6,7,8,9,10]



const verificaParesVetor = (vetor) => {

    function par (valor){
        return valor % 2 ==0;
      }
      
      function impar (valor){
        return valor % 2 !== 0;
      }
  
  
    a= vetor.filter(par)
    b= vetor.filter(impar)
  console.log("Vetores pares "+a)
  console.log("Vetores pares "+b)
}

verificaParesVetor(vetor)

console.log(" ")