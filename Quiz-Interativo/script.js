var boxRespotas = document.querySelector("div.box-resposta")
var opcoes = document.getElementsByTagName("input")

var enviar = document.getElementsByTagName("button")

var container = document.getElementsByTagName("section")

var progressBar = document.getElementById("progressBar")

var porcentagem = document.querySelector("p.atualporcentagem")

var acertos = document.querySelector("p.acertos")

var dicasTexto = document.querySelector("p.dicasTexto")

var contadorAcertos = 0

var contadorDicas = 0

var closeIcon = document.getElementsByClassName("dicas-texto-header-img")

var openDicas = document.getElementsByClassName("box-img")

var dicas = document.getElementsByClassName("dicas")

var all = document.querySelector(".all")

var whatPage = 0

var block = false

for(let i = 0; i < opcoes.length; i++){
    
    opcoes[i].addEventListener("mouseover", function() {
            this.classList.add("hover")
            for (let j = 0; j < opcoes.length; j++) 
            {
                if(opcoes[j].classList.contains("correct") == true){
                    this.classList.remove("hover")
                }                
            }
    })

    opcoes[i].addEventListener("mouseout", function(){
        this.classList.remove("hover")
    })

    opcoes[i].addEventListener("click", function(){
        for (let j = 0; j < opcoes.length; j++) {
            opcoes[j].classList.remove("selected");
        }
        // roda 4x tira o selected de todos
        this.classList.add("selected")
        block = true
        for (let j = 0; j < opcoes.length; j++){
            if(opcoes[j].classList.contains("correct") == true){
                this.classList.remove("selected")
            }                
        }
    })

    for(let j = 0; j < enviar.length; j++){
        enviar[j].addEventListener("click", function (){        
            
            if(block == true){
                if(enviar[j].innerText = "ENVIAR"){
                    
                    if(opcoes[i].classList.contains("switch")){
                        opcoes[i].classList.add("correct")
                        if(opcoes[i].classList.contains("correct") && opcoes[i].classList.contains("selected")){
                            contadorAcertos++
                        }
                    }
                    else if(opcoes[i].classList.contains("selected")){
                        opcoes[i].classList.add("incorrect")
                    }
                    enviar[j].innerText = "PROSSEGUIR"
                }
            }
            for(let x = 0; x < enviar.length; x++){
                if(enviar[x].innerText == "PROSSEGUIR"){
                    enviar[x].addEventListener("click", function(){
                        progressBar.value += (100 / (container.length-1)) / opcoes.length
                        porcentagem.innerHTML = progressBar.value + "%"
                        // alert(whatPage) 
                        

                        // (100 / (5) / 20) caso aumente o nuemero de sections, container +1, opcoes +4
                        acertos.innerHTML =  contadorAcertos/2
                        dicasTexto.innerHTML = contadorDicas
                    
                    if(opcoes[i].classList.contains("correct")){
                        opcoes[i].classList.remove("selected")
                        opcoes[i].classList.remove("correct")
                        opcoes[i].classList.remove("incorrect")
                        block = false
                    }    
                    
                    if (container[x].classList.contains("on")) {
                        container[x].classList.remove("on");
                        container[x].classList.add("off");
                        container[x+1].classList.add("on");
                        container[x+1].classList.remove("off");
                        whatPage = x+1
                        if(x+1 == 5){
                            clearInterval(cronometro)
                        }
                    } 
                    })
                }                
            }
        })
    } 
}

var segundos = 0;
var cronometro;

function atualizarCronometro() {
    segundos++;
    document.getElementById('cronometro').innerText = formatarTempo(segundos);
}

function formatarTempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' + minutos : minutos}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
}

for(let i = whatPage; i < dicas.length; i++){
    openDicas[i].addEventListener("click", function(){
        dicas[i].classList.remove("off")
        contadorDicas++
        all.classList.add("offopacity")
    })

    closeIcon[i].addEventListener("click", function(){
        dicas[i].classList.add("off")
        all.classList.remove("offopacity")
    })
}
cronometro = setInterval(atualizarCronometro, 1000);






   


