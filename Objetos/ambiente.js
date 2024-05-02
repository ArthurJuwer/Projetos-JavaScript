let Carro = {
    marca: "Ford",
    modelo: "K.A",
    ano: "2002",
    vendedores: ["Concessionária 1", "Concessionária 2"],
    buzinar: function() {return "Biiiii Biiii"},
    nome: function() { return "O nome inteiro do carro é " + this.marca +" "+  this.modelo +" "+ this.ano},
}
console.log("Qual é o ano do carro? ")
console.log(`-> O ano do carro é: ${Carro.ano} \n`)

console.log("Por quem esta sendo vendido este carro? ")
console.log(`-> O carro esta sendo vendido pela ${Carro.vendedores} \n`)

console.log(`Eu gostaria de comprar pela ${Carro.vendedores[0]}.`)

console.log(`\nPode me dizer qual é o nome inteiro do carro?`)

console.log("->",Carro.nome())

console.log("\nQual é o barulho da buzina?")

console.log(Carro.buzinar())

