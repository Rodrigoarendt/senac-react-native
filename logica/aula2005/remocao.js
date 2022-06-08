var carnes = ["costela", "alcatra","maminha"]
console.log(carnes.toString())

delete carnes[2] /* retira o item do array */
console.log(carnes.toString())

carnes.push("mortadela")
console.log(carnes.toString())

carnes[2] = "maminha"
console.log(carnes.toString())

carnes.slice(2,1) /*apartir da posição 2 vai excluir 1 elemento */
console.log(carnes.toString())
