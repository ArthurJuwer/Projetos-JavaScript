
const valueSearch = document.querySelector(".header-action input")
const btnSearch = document.querySelector(".header-action button")
const mainContainer = document.getElementsByClassName("main-container-boxes")

const livros = document.getElementsByClassName("livros");
const TodosLivros = [];

for (let i = 0; i < livros.length; i++) {
    TodosLivros.push({livros: livros[i].value});
}

btnSearch.addEventListener("click", ()=>{
    const valorFiltradoDoArray = TodosLivros.filter((value)=>{
        const ConjuntoLivro = valueSearch.value == value.livros
        return ConjuntoLivro
    })
    const novaLista = valorFiltradoDoArray
    const NomelivroEscolhido = novaLista.map((value)=>{
        return value.livros
    })
    for(let i = 0; i < livros.length; i++){
        mainContainer[i].classList.remove("on")
        if(NomelivroEscolhido == livros[i].value){
            mainContainer[i].classList.remove("off")
            mainContainer[i].classList.add("on")
        } 
        if(mainContainer[i].classList.contains("on") == false){
            mainContainer[i].classList.add("off")
        }
        
    }
})



