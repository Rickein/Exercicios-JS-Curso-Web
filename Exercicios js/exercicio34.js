/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */


let fruta = "pera" ;
let fruta1 = "pera e maçã" ;

//console.log(fruta.indexOf('r'))
//console.log(fruta.length)

const verificaPalavra = (frutalistada,frutaProcurada) => {
    verificador = frutalistada.indexOf(frutaProcurada);
    if (verificador == -1){
        console.log(verificador+" "+false);


    }else{
        console.log(verificador+" "+true)
        
    }

}

verificaPalavra(fruta,fruta1)
verificaPalavra(fruta1,fruta)
