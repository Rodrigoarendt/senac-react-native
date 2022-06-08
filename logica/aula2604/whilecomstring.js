var continuar = true
var opcao = "s"

while(continuar) {
    console.log('Ola')
    continuar = opcao == "s"

    var contador = 5
    while(opcao.toLowerCase() == 's') {
        if (contador > 0){
            console.log(`ola ${contador}`)
        }
        else {
            opcao = "n"
        }
        contador--
    }


    console.log("continua executando...")