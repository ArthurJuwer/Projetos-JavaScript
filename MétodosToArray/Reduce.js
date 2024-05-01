console.log("Trabalhando com Reduce ->")

// Método Reduce

// -> 
const Pessoas = [
    {nome: 'Arthur Juwer', idade: 15 },
    {nome: 'Lucas Rambo', idade: 19},
    {nome: 'Paulo Freitas', idade: 41},
]

const idadeTotal = Pessoas.reduce((valorAnterior, valorAtual, indexAtual) =>{
    console.log("Valor Atual", valorAtual)
    const soma = valorAnterior + valorAtual.idade
                // 0           + 15
                // 15          + 19
                // 34          + 41

    return soma // RETORNA A SOMA - ACUMULA - 15
                //                            34
                //                            75 

}, 0) // este zero significa o ponto de partida

console.log("A Soma das idades é: ", idadeTotal, "anos")
console.log("A Média das idades é: ", idadeTotal / Pessoas.length, "anos")
