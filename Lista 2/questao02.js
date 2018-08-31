"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var numero = Math.floor(Math.random() * 10);
var tentativas = 0;
while (tentativas < 5) {
    var palpite = readline.questionInt('Digite um numero de 0 a 10: ');
    tentativas++;
    if (numero == palpite) {
        console.log('Você acertou!');
        break;
    }
    else {
        console.log('Você errou!');
    }
    if (palpite < numero) {
        console.log('O numero gerado é maior');
    }
    else {
        console.log('O numero gerado é menor');
    }
    if (tentativas == 5) {
        console.log('O numero de tentativas acabou!');
    }
}
function obterInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
