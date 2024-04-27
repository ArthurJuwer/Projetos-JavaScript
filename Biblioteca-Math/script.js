var max = 10, min = 5

// pegar um numero float(quebrado) e transformar para inteiro
function floatToInt(num){
    return Math.floor(num)
}
// pegar um numero aleatorio entre dois e transformalo para inteiro
function getRandomIntEasy(min, max){

    return Math.floor(Math.random() * (max - min) + min)
}
// quando possuir virgula retornara o proximo numero
function nearNumber(num){
    return Math.ceil(num)
}

console.log(getRandomIntEasy(0,10)) // entre 0 - 9
console.log(floatToInt(55.2350863)) // 55
console.log(nearNumber(7.5)) // 8

                                       


                                         
  