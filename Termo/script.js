var container = document.getElementsByClassName("word")

var level = 0
var contador = 0
var palavras = ["luiza", "maria", "lucas", "paulo", "juwer", "areia", "terra"] 
var letras = []
var result = "DERROTA"

var min = 0; max = palavras.length
var random = Math.floor(Math.random() * (max - min) - min)
console.log(random)

document.addEventListener("keydown", (evento)=>{
    
    var input = container[level].getElementsByTagName("input")

    if (evento.key === 'Enter') {  
        
        for(let i = 0; i < input.length; i++){            
            letras = palavras[random][i]

            if(input[i].value == letras){
                input[i].classList.add("correct")
                
            }  
            else{
                for(let x = 0; x < input.length; x++){
                    
                    if(input[x].value == letras){
                        input[x].classList.add("contains")
                    }
                    else{
                        if(!(input[i].value == "")){
                            input[i].classList.add("incorrect")
                        }
                        else{
                            input[i].classList.remove("incorrect")
                        }
                        
                    }
                }                
            }
        }          

        if(container[level+1].classList.contains("off") == true){
                        
            for(let i = 0; i < input.length; i++){
                    if(input[i].classList.contains("correct")){
                        contador++
                    }
                }
            if(contador == input.length){
            result = "VITORIA"
            alert(result)
            }
            
            else {
                contador = 0
                container[level].classList.add("off")
                container[level+1].classList.remove("off")
                level++
            }
        }
        if(level == container.length-1){
            // REMOVER GAMBIARRA E TIRAR O -1
            alert(result)
        }
    }         
})



