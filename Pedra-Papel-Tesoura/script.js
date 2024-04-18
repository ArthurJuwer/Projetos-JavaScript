var container = document.getElementById('opcoes1');

var tesoura = container.getElementsByTagName('img')[0];
var papel = container.getElementsByTagName('img')[1];
var pedra = container.getElementsByTagName('img')[2];

var tesoura2 = document.querySelector("img.tesoura2")
var papel2 = document.querySelector("img.papel2")
var pedra2 = document.querySelector("img.pedra2")

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

function selecionarTesoura(){
    ativada = true
    tesoura.style.opacity = "1"  
    papel.style.opacity = "0.4"   
    pedra.style.opacity = "0.4"    
    player1 = 1 // tesoura
    resultado()   
            
}  
function selecionarPapel(){
    ativada = true
    papel.style.opacity = "1"
    tesoura.style.opacity = "0.4"   
    pedra.style.opacity = "0.4"  
    player1 = 2 // papel
    resultado()
}
function selecionarPedra(){
    ativada = true
    pedra.style.opacity = "1"
    papel.style.opacity = "0.4"   
    tesoura.style.opacity = "0.4"  
    player1 = 3 // pedra
    resultado()
}

tesoura.addEventListener("click", selecionarTesoura)
papel.addEventListener("click", selecionarPapel)
pedra.addEventListener("click", selecionarPedra)


function mouseOver() {
    tesoura.style.opacity = "1";
}
  
function mouseOut() {
    if(ativada == true){
        tesoura.style.opacity = "1"; 
    }
    else{
        tesoura.style.opacity = "0.4";
    }
    
}

function mouseOver2() {
    papel.style.opacity = "1";
}
  
function mouseOut2() {
    if(ativada == true){
        papel.style.opacity = "1"; 
    }
    else{
        papel.style.opacity = "0.4";
    }
    
}

function mouseOver3() {
    pedra.style.opacity = "1";
}
  
function mouseOut3() {
    if(ativada == true){
        pedra.style.opacity = "1"; 
    }
    else{
        pedra.style.opacity = "0.4";
    }
    
}
var contadorPlayer1 = 0
var contadorPlayer2 = 0


function selecionarInimigo(){
    if(player2 == 1){
        tesoura2.style.opacity = "1"
    }
    else if(player2 == 2){
        papel2.style.opacity = "1"
    }
    else{
        pedra2.style.opacity = "1"
    }
}

function atualizarPlacar(){    
    placar1.innerHTML = contadorPlayer1
    placar2.innerHTML = contadorPlayer2
}

function resultado(){
    if(player1 == player2){
        resultadoFinal.innerHTML = "Empate"
        selecionarInimigo()
        botoes.style.opacity = "1"
        all.style.opacity = "0.8" 
        all.style.pointerEvents = "none"      
        
    }
    else if(player1 == 1 && player2 == 2){
        resultadoFinal.innerHTML = "Você Ganhou"
        selecionarInimigo()
        contadorPlayer1+= 1;
        botoes.style.opacity = "1"
        all.style.opacity = "0.8"
        all.style.pointerEvents = "none"
        
    }
    else if(player1 == 2 && player2 == 3){
        resultadoFinal.innerHTML = "Você Ganhou"
        selecionarInimigo()
        contadorPlayer1++
        botoes.style.opacity = "1"
        all.style.opacity = "0.8"
        all.style.pointerEvents = "none"
        
    }
    else if(player1 == 3 && player2 == 1){
        resultadoFinal.innerHTML = "Você Ganhou"
        selecionarInimigo()
        contadorPlayer1++ 
        botoes.style.opacity = "1"
        all.style.opacity = "0.8"
        all.style.pointerEvents = "none"
        
    }
    else{
        resultadoFinal.innerHTML = "Você Perdeu"
        selecionarInimigo()
        contadorPlayer2+=1
        botoes.style.opacity = "1"
        all.style.opacity = "0.8"
        all.style.pointerEvents = "none"
    }   
    atualizarPlacar()         
}

function reiniciar(){    
    contadorPlayer1 = 0
    contadorPlayer2 = 0

    ativada = true

    placar1.innerHTML = contadorPlayer1
    placar2.innerHTML = contadorPlayer2
    all.style.opacity = "1"
    botoes.style.opacity = "0"

    pedra.style.opacity = "0.4"
    papel.style.opacity = "0.4"   
    tesoura.style.opacity = "0.4"

    tesoura2.style.opacity = "0.4"  
    papel2.style.opacity = "0.4"
    pedra2.style.opacity = "0.4"
    all.style.pointerEvents = "auto"
}



function jogarNovamente(){
    player1 = 0
    player2 = Math.floor(Math.random() * 3) + 1

    pedra.style.opacity = "0.4"
    papel.style.opacity = "0.4"   
    tesoura.style.opacity = "0.4"

    ativada = false

    tesoura2.style.opacity = "0.4"  
    papel2.style.opacity = "0.4"
    pedra2.style.opacity = "0.4"

    all.style.opacity = "1"
    all.style.pointerEvents = "auto"
    
    botoes.style.opacity = "0"
}


btnPlacar.addEventListener("click", jogarNovamente)
btnReiniciar.addEventListener("click", reiniciar) 