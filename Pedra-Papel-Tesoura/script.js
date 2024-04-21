var container = document.getElementById('opcoes1');

var tesoura = container.getElementsByTagName('img')[0];
var papel = container.getElementsByTagName('img')[1];
var pedra = container.getElementsByTagName('img')[2];

var container2 = document.getElementById('opcoes2');

var tesoura2 = container2.getElementsByTagName('img')[0];
var papel2 = container2.getElementsByTagName('img')[1];
var pedra2 = container2.getElementsByTagName('img')[2];

var contadorPlayer1 = 0
var contadorPlayer2 = 0

var player1 = 0

var player2 = Math.floor(Math.random() * 3) + 1

var placar1 = document.querySelector("#player1")
var placar2 = document.querySelector("#player2")

var botoes = document.querySelector("section.secaoBotoes")

var resultadoFinal = document.querySelector("p#resultado")

var all = document.querySelector(".all")

var btnReiniciar = document.querySelector("input#btnReiniciar")  
var btnPlacar = document.querySelector("input#btnPlacar")

var ativada = false



function zerarOpacity(){
    pedra.classList.remove("onOpacity")
    papel.classList.remove("onOpacity") 
    tesoura.classList.remove("onOpacity")
}

tesoura.addEventListener("click", ()=>{
    ativada = true
    zerarOpacity()
    tesoura.classList.add("onOpacity") 
    player1 = 1 // tesoura
    resultado() 
})

papel.addEventListener("click", ()=>{
    ativada = true
    zerarOpacity()
    papel.classList.add("onOpacity") 
    player1 = 2 // papel
    resultado()
})
pedra.addEventListener("click", ()=>{
    ativada = true
    zerarOpacity()
    pedra.classList.add("onOpacity") 
    player1 = 3 // pedra
    resultado()
})


function mouseOver() {
    tesoura.classList.add("onOpacity");
}
  
function mouseOut() {    
    tesoura.classList.remove("onOpacity");

    if(ativada == true){
        tesoura.classList.add("onOpacity"); 
    }
}

function mouseOver2() {
    papel.classList.add("onOpacity");
}
  
function mouseOut2() {
    papel.classList.remove("onOpacity");

    if(ativada == true){
        papel.classList.add("onOpacity"); 
    }
}

function mouseOver3() {
    pedra.classList.add("onOpacity");
}
  
function mouseOut3() {
    pedra.classList.remove("onOpacity"); 
    
    if(ativada == true){
        pedra.classList.add("onOpacity");  
    }
}

function selecionarInimigo(){
    if(player2 == 1){
        tesoura2.classList.add("onOpacity")
    }
    else if(player2 == 2){
        papel2.classList.add("onOpacity")
    }
    else{
        pedra2.classList.add("onOpacity")
    }
}

function atualizarPlacar(){    
    placar1.innerHTML = contadorPlayer1
    placar2.innerHTML = contadorPlayer2
}

function resultado(){
    switch(true){
        case player1 == player2:{
            resultadoFinal.innerHTML = "Empate"
            selecionarInimigo()
            botoes.classList.add("onOpacity")      
            all.classList.add("allAtivado");
            break
        }
        case player1 == 1 && player2 == 2 || player1 == 2 && player2 == 3 || player1 == 3 && player2 == 1:{
            resultadoFinal.innerHTML = "Você Ganhou"
            selecionarInimigo()
            contadorPlayer1+= 1;
            botoes.classList.add("onOpacity")
            all.classList.add("allAtivado");
            break
        }
        default:{
            resultadoFinal.innerHTML = "Você Perdeu"
            selecionarInimigo()
            contadorPlayer2++
            botoes.classList.add("onOpacity")
            all.classList.add("allAtivado");
        }
    }
    atualizarPlacar()         
}

btnPlacar.addEventListener("click", ()=>{
    player1 = 0
    player2 = Math.floor(Math.random() * 3) + 1   
  
    zerarOpacity()

    ativada = false

    tesoura2.classList.remove("onOpacity") 
    papel2.classList.remove("onOpacity") 
    pedra2.classList.remove("onOpacity") 
    
    botoes.classList.remove("onOpacity")
    all.classList.remove("allAtivado");
})

btnReiniciar.addEventListener("click", ()=>{      
        contadorPlayer1 = 0
        contadorPlayer2 = 0
    
        ativada = false
    
        placar1.innerHTML = contadorPlayer1
        placar2.innerHTML = contadorPlayer2
        
        botoes.classList.remove("onOpacity")
    
        zerarOpacity()
    
        tesoura2.classList.remove("onOpacity")  
        papel2.classList.remove("onOpacity") 
        pedra2.classList.remove("onOpacity") 
        
        all.classList.remove("allAtivado");
}) 
