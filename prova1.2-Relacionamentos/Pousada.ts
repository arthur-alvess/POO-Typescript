import { Hospede } from "./Hospede";
import { Aposento } from "./Aposento";
import { Hospedagem } from "./Hospedagem";

let hosp1 = new Hospede('Fulano','555','8888-8888','Rua da Luz');
let hosp2 = new Hospede('Sicrano', '4444', '9999-9999', 'Rua Aurora')
let ap1 = new Aposento(1, 1, 85.00, [hosp1, hosp2]);
let h1 = new Hospedagem(ap1);

console.log('-----------------');
console.log(`Dados da Hospedagem:`)
console.log(ap1);
console.log('-----------------');
console.log(`Valor Total da Hospedagem: R$ ${h1.calcular_total(5)},00`);
console.log('-----------------');