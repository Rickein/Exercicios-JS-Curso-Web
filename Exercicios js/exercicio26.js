  /* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */

  const numerosPares = () => {
    aux = 1
    while ( aux <= 100){
      if ( aux % 2 == 0){
        console.log(aux)
      }
      aux ++
    }
  }

  numerosPares()