var carro = {
    placa:"abc-1234",
    marca: "Volkswagen",
    modelo: "gol",
    cor: "vermelha",
    autonomia: function(km, abastecimento){
        console.log(km/abastecimento)
    }
}

console.log(carro)
console.log(carro.placa)

carro.cor = "preto"

console.log(carro)