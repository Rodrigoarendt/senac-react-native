var numero = [0, 10, 30, 50, 100, 20]
var teste = 0

for(let i = 0 ; i < numero.length; i++){
    if(teste < numero[i]){
        var teste = numero[i]
    }
}

console.log(teste)

var numero = [-1, 10, 30, 50, 100, 20]
var teste = 0

for(let i = 0 ; i < numero.length; i++){
    if(teste > numero[i]){
        var teste = numero[i]
    }
}

console.log(teste)