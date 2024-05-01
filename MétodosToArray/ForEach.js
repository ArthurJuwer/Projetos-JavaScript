console.log("Trabalhando com ForEach ->")

// ForEach

// valor ; indice; array

const meuNome = [
    {nome: 'Arthur', origem: 'Brasileira'},
    {nome: 'Juwer', origem: 'Alemã'},
    {nome: "Rambo", origem: 'Sueca'},
]

console.log("\nLogando o valor de cada parte do nome ->\n")

meuNome.forEach(umaParteDoNome =>{
    console.log("Chamei o " + umaParteDoNome.nome + " que tem origem " + umaParteDoNome.origem)
})

console.log("\nLogando o indice de cada parte do nome ->\n")

meuNome.forEach(function(umaParteDoNome, indice){
    console.log(`A parte do nome ${umaParteDoNome.nome} esta na posicão ${indice}`)
})

console.log("\nLogando cada nome e o array completo ->\n")

meuNome.forEach(function(umaParteDoNome, indice, arrayCompleto){
    console.log(`${umaParteDoNome.nome} esta na posição ${indice} do array`)
    console.log(arrayCompleto)
})



