const Carro = {
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

console.log(`\n-> O numero de rodas do carro é ${Carro.Rodas}`)

Carro["Rodas"] = 4 // adicionando uma propriedade   
console.log(`-> O numero de rodas do carro é ${Carro.Rodas} \n`)

const nomePropriedade = "Motores"
Carro[nomePropriedade] = 1


console.log(`-> O numero de motores é  do carro é ${Carro.Motores}`)  

console.log("\nQuero adicionar +1 motor")
Carro.Motores = 2
console.log(`-> Agora o numero de motores é  do carro é ${Carro.Motores}`)  

Object.defineProperty(Carro, "Portas", {
    value: 2.0,
    writable: false
    // nao pode ser rescreito : false
    // pode ser rescrito caso tiver o : true
})

console.log(`O numero de portas é: ${Carro.Portas}`)

Carro.Portas = 3.0 // não funciona pelo fato de ter o writable: false (ele vem por padrao)

console.log(`O numero de portas é: ${Carro.Portas}`)

console.log("Todas as informações são: \n",Carro)
