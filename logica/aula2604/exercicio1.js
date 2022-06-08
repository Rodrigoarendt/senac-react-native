var usuario = 'Rodrigo'
var anoAtual = 2022
var anoNascimento = 1986
var mesNascimento = 1
var mesAtual = 4
var diaNascimento = 14
var diaAtual = 26

var idade = anoAtual - anoNascimento

if ( mesAtual <= mesNascimento){
    return  idade--
}

if(mesAtual == mesNascimento) {
    if(diaAtual < diaNascimento) 
    return idade--
}




console.log(idade)











