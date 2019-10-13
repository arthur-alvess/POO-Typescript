import { Reunião } from "./Reunião";
import { Funcionario } from "./Funcionario";

export abstract class Departamento{
    protected nome: string;
    protected chefe: Funcionario;
    protected reuniao: Reunião[];

    constructor(n: string, c: Funcionario, r: Reunião[]){
        this.nome = n;
        this.chefe = c;
        this.reuniao = r;
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getChefe(): Funcionario{
        return this.chefe;
    }

    public setChefe(chefe: Funcionario){
        this.chefe = chefe;
    }

    public getReuniao(): Reunião[]{
        return this.reuniao;
    }

    public setReuniao(reuniao: Reunião[]){
        this.reuniao = reuniao;
    }

    public imprimirReunioes(){
        return this.getReuniao();
    }

}