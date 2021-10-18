/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

const bhaskara = (n1,n2,n3) => {
    a = 3*(n1 * n1)
    b= 5*n2
    c= n3
    raiz= (b*b)-(4*a*c)
    x1= (-b+raiz)/(2*a)
    x2= (-b-raiz)/(2*a)
    console.log(x1,x2)
  }
  bhaskara(3,5,12)