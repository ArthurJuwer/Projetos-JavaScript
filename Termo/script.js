var container = document.querySelector("section.container")

var input = container.getElementsByTagName("input")

var palavras = ["luiza".toUpperCase(), "lucas"]
var letras = []

// console.log(palavras[0][0])

document.addEventListener("keydown", (evento)=>{
    
    if (evento.key === "e" || evento.key === "E") {   
        
        for(let i = 0; i < 5; i++){            
            letras = palavras[0][i]
            
            if(input[i].value.toUpperCase() == letras){
                input[i].classList.add("correct")
            }  
            else{
                for(let x = 0; x < 5; x++){
                    if(input[x].value.toUpperCase() == letras){
                        input[x].classList.add("contains")
                    }
                    else{
                        input[i].classList.add("incorrect")
                    }
                }                
            }
            
        }
        
    }              
})


