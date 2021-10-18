const verificaCrescimento = (crianca1altura,crianca1taxaCrescimento,crianca2altura,crianca2taxaCrescimento) => {
    if ( crianca1altura > crianca2altura){
        criancaMaior = crianca1altura
        taxaCriancaMaior =  crianca1taxaCrescimento

        criancaMenor = crianca2altura
        taxaCriancaMenor = crianca2taxaCrescimento
    }
    else {
        criancaMaior = crianca2altura
        taxaCriancaMaior =  crianca2taxaCrescimento

        criancaMenor = crianca1altura
        taxaCriancaMenor = crianca1taxaCrescimento
    }

    anos= 1

    while ( criancaMenor < criancaMaior){
        criancaMenor = criancaMenor + (criancaMenor * taxaCriancaMenor)
        criancaMaior = criancaMaior + (criancaMaior * taxaCriancaMaior)
        anos ++
    }

    console.log(`A criança menor irá ultrapaçar a maior em ${anos} anos`)

}

verificaCrescimento(1.30,0.40,1.60,0.30)