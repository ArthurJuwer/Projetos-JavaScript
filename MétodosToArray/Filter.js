console.log("Trabalhando com Filter ->")

// Método Filter

// -> pega TODOS os elementos que satisfaçam tal condicao
const Pessoas = [
    {nome: 'Arthur Juwer', idade: 15 },
    {nome: 'Lucas Rambo', idade: 19},
    {nome: 'Paulo Freitas', idade: 41},
]

const quaisPessoas = Pessoas.filter((value,index,array) =>{
    const eMaiorDeIdade = value.idade >= 18;
    return eMaiorDeIdade
})

console.log(quaisPessoas)
console.log("são maiores de idade")