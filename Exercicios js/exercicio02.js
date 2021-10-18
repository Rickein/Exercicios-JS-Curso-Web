/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const valoresTriangulo = (n1,n2,n3) => {
    if(n1 === n2 && n1 === n3){
      console.log("Triangulo Equilátero")
    }else if(n1 != n2 && n1 != n3){
      console.log("Escaleno")
    }else{
      console.log("Isosceles")
    }
  }
  
  valoresTriangulo(5,5,5)
  valoresTriangulo(5,3,5)
  valoresTriangulo(5,4,2)
  console.log(" ")