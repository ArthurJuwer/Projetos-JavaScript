console.log("Trabalhando com Map ->")

// Método Map

// -> ele pode retornar um valor
const meuNome = [
    {nome: 'Arthur', origem: 'Brasileira'},
    {nome: 'Juwer', origem: 'Alemã'},
    {nome: "Rambo", origem: 'Sueca'},
]

console.log("\nLogando cada nome e origem retornando apneas um valor ->\n")

const origemDeles = meuNome.map(function(umaParteDoNome, indice, arrayCompleto){
    console.log("Chamei o " + umaParteDoNome.nome + " que tem " + umaParteDoNome.origem + " anos")
    return umaParteDoNome.origem
    // guardou os valores enfileirando
})
console.log("\nAs origens do nome são: " + origemDeles)