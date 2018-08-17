let nome: string = 'Arthur';
let data: Date = new Date();
const dias: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const ds: number = data.getDay();
console.log(`Olá, ${nome},
 hoje é ${dias[ds]}!`);
