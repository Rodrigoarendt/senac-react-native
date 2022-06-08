function peso(peso){
    console.log(`Informe seu peso ${peso}`)
}

peso('')

function soma(peso,altura)  {
    var resultado = peso / (altura * altura)
    console.log(resultado)

    if(resultado <= 18.5){
        console.log(`Peso baixo`)
    }

    if(resultado <=18.5 & 24.9){
        console.log(`Peso normal ou adequado`)

    }

    if(resultado <= 25 & 29.9){
        console.log(`Sobrepeso`)
    }

    if(resultado <=30 & 34.9){
        console.log(`Obesidade Grau I`)
    }

    if(resultado <=35 & 39.9){
        console.log(`Obesidade Grau II`)
    }

    if(resultado < 40){
        console.log(`Obesidade Grau III ou Mórbida`)

    }

}

soma(87,1.85)

