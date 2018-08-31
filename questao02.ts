import * as readline from 'readline-sync'

let numero = Math.floor(Math.random() * 31);
let tentativas: number = 0; 

while(tentativas < 5){
    let palpite = readline.questionInt('Digite um numero de 0 a 30: ');
    
    tentativas ++;
    if (numero == palpite){
        console.log('Você acertou!')
        break
    }else{
        console.log('Você errou!')
    }

    if (palpite < numero){
        console.log('O numero gerado é maior')
    }else{
        console.log('O numero gerado é menor')
    }
    
    if(tentativas == 5 ){
        console.log('O numero de tentativas acabou!' )
    }
}

function obterInt(min: number, max: number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}