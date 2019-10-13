import { Departamento } from "./Departamento";
import { Funcionario } from "./Funcionario";
import { Reunião } from "./Reunião";

export class Pessoal extends Departamento{
    constructor(n: string, c: Funcionario, r: Reunião[]){
        super(n, c, r);
    }
}

let chefePessoal: Funcionario = new Funcionario('João', 434)
let data1 = new Date;
let reuniãoPessoal1: Reunião = new Reunião('Curso de Atendimento', '12 12 2018')
let reuniãoPessoal2: Reunião = new Reunião('Palestra Motivacional', '20 12 2018')
let depPessoal: Departamento = new Pessoal('Pessoal', chefePessoal, [reuniãoPessoal1, reuniãoPessoal2]);


console.log(`Departamento: ${depPessoal.getNome()}\nChefe (Nome e Matrícula): ${chefePessoal.getNome()}, ${chefePessoal.getMatricula()}\nReuniões: ${reuniãoPessoal1.getAssunto()} Data (${reuniãoPessoal1.getData()}), ${reuniãoPessoal2.getAssunto()} Data (${reuniãoPessoal2.getData()})`);