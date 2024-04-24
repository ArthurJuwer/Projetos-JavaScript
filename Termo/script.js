var container = document.getElementsByClassName("word")

var level = 0
var palavras = ["luiza".toUpperCase()] // aumentar lista 
var letras = []
var result = "DERROTA"


document.addEventListener("keydown", (evento)=>{
    
    var input = container[level].getElementsByTagName("input")

    if (evento.key === 'Enter') {  
        
        for(let i = 0; i < 5; i++){            
            letras = palavras[0][i]
            // trocar o zero por random
            console.log(level)

            if(input[i].value.toUpperCase() == letras){
                input[i].classList.add("correct")
                
            }  
            else{
                for(let x = 0; x < 5; x++){
                    
                    if(input[x].value.toUpperCase() == letras){
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

            if (input[0].classList.contains("correct") && 
            input[1].classList.contains("correct") && 
            input[2].classList.contains("correct") &&
            input[3].classList.contains("correct") &&
            input[4].classList.contains("correct") ){
                result = "VITORIA"
                alert(result)
            }
            else {
                container[level].classList.add("off")
                container[level+1].classList.remove("off")

                level++
            }
        }
        if(level == 5){
            alert(result)
        }
        
    }              
    
})



