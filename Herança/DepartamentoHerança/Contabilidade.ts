import { Departamento } from "./Departamento";
import { Funcionario } from "./Funcionario";
import { Reunião } from "./Reunião";

export class Contabilidade extends Departamento{
    constructor(n: string, c: Funcionario, r: Reunião[]){
        super(n, c, r);
    }
}

let chefeContabilidade: Funcionario = new Funcionario('Diego', 222)
let data1 = new Date;
let reuniãoContabilidade1: Reunião = new Reunião('Aumento de Salário', '20 02 2019')
let reuniãoContabilidade2: Reunião = new Reunião('Contratações', '20 01 2019')
let depContabilidade: Departamento = new Contabilidade('Contabilidade', chefeContabilidade, [reuniãoContabilidade1, reuniãoContabilidade2]);


console.log(`Departamento: ${depContabilidade.getNome()}\nChefe (Nome e Matrícula): ${chefeContabilidade.getNome()}, ${chefeContabilidade.getMatricula()}\nReuniões: ${reuniãoContabilidade1.getAssunto()} Data (${reuniãoContabilidade1.getData()}), ${reuniãoContabilidade2.getAssunto()} Data (${reuniãoContabilidade2.getData()})`);