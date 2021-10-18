/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

const verificaDivisivelPor3 = (numero) => {
    if (numero % 3 == 0){
      console.log("Verdadeiro, divisivel por 3")
    }
    else {
      console.log("Falso")
    }
  }
  verificaDivisivelPor3(3)
  console.log(" ")