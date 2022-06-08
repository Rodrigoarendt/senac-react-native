/**funções nomeadas com paramentros */
function ola(nome){
    console.log(`Ola ${nome}`)
}

ola('josé')
olá(`Fernanda`)

function soma(n1,n2) {
    var resultado = n1 + n2
    console.log(resultado)
}

soma(10,20)

/**Funções anonimas com parametros */

var z = function(nome) {
    console.log(`olá ${nome}`)

}

z('Maria')