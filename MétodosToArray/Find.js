console.log("Trabalhando com Find ->")

// Método Find

// -> ele procura um valor e se achar para o laço, nessa caso não retorna { nome: 'Paulo Freitas', idade: 41} no ultimo find.

const Pessoas = [
    {nome: 'Arthur Juwer', idade: 15 },
    {nome: 'Lucas Rambo', idade: 19},
    {nome: 'Paulo Freitas', idade: 41},
]

const parte = Pessoas.find((value, index, array)=>{
    const isJuwer = value.nome === 'Arthur Juwer'
    return isJuwer
    // da pra procurar e ver quais pessoas são menor de idade
})
console.log(parte)

const PrimeiroMaiorIdade = Pessoas.find((value, index, array)=>{
    const eMaiorIdade = value.idade >= 18
    return eMaiorIdade
    // da pra procurar e ver quais pessoas são menor de idade
})
console.log(PrimeiroMaiorIdade)