// Faça um programa que receba como entrada o nome de uma pessoa e gere uma frase de felicitação de parabéns de forma automática. Para dar mais variedade
// faça uma função que contenha no mínimo 5 frases em um array.
// A função deve receber o nome da pessoa que foi digitado como entrada, selecionar uma frase e retornar a frase completa com o nome da pessoa inserido.

import * as readline from 'readline-sync';


let nome: string = readline.question('Qual o seu nome ? ');
let idade: number = readline.questionInt('Qual a sua idade ? ');


let parabens = function() {
    let frases: string[] = [`- Parabéééns ${nome}, muitos anos de vida, que esse dia se repita por mais ${idade} anos! Tudo de bom!`,
    `- ${nome}, muitos anos de vida, felicidades!`,
    `- Olá ${nome}, ${idade} anos, hein?! Felicidades, muitos anos de vida, que seus sonhos se realizem!`,
    `- Parabéns ${nome}!. Sucesso!`,
    `- E hoje os parabéns vai para o ${nome}! Felicidades, tudo de bom pra ti! `];
    var num = Math.floor(Math.random() * 4);
    return frases[num]
}

console.log(parabens());