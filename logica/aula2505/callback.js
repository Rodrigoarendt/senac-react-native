function um() {
    console.log("um")
}

function dois(){
    console.log("dois")
}

um()
dois()

function mostraResulatado(result){
    console.log(`Resultado: ${result}`)
}

function mostraResulatado2(result) {
   console.log(`Resultado2: ${result}`)
}

function soma(n1, n2) {
    let resultado = n1 + n2
    mostraResulatado(resultado)
}


soma(10,20)

/* função usando calback */
function soma2(n1, n2, callback){
    let resultado = n1 + n2
    callback(resultado)
}

soma2(100, 200, mostraResulatado)
soma2(100, 200, mostraResulatado2)