class Teclado {
    constructor(tamanho, cor, peso) {
        this.tamanho = tamanho
        this.cor = cor
        this.peso = peso
    }
    getDescription(){
        return `teclado ${this.tamanho}%, da cor ${this.cor}, e seu peso é ${this.peso} gramas`
    }
}


const meuTeclado = new Teclado(60, "Preto", 450)
const amigoTeclado = new Teclado(80,"Branco", 600)

console.log(`O meu teclado pesa ${meuTeclado.peso} gramas, ja o do meu amigo ${amigoTeclado.peso}gramas\n`)
console.log(`suas informações completas são ${meuTeclado.getDescription()}\n`)

console.log(`As informações do teclado do meu amigo é ${amigoTeclado.getDescription()}`)