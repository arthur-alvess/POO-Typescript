import { Hospede } from "./Hospede";

export class Aposento{
    private numero: number;
    private tipo: number;
    private valor: number;
    private hospede: Hospede[] = [];

    constructor(nu: number, ti: number, va: number, ho: Hospede[]){
        this.numero = nu;
        this.tipo = ti;
        this.valor = va;
        this.hospede = ho;
    }
    
    public set _numero (numero : number) {
        this.numero = numero;
    }

    
    public set _tipo(tipo : number) {
        this.tipo = tipo;
    }
    
    
    public set _valor(valor : number) {
        this.valor = valor;
    }
    
    
    public set _hospede (hospede : Hospede[]) {
        this.hospede = hospede;
    }

    
    public get numero_(): number {
        return this.numero;
    }
    
    
    public get tipo_() : number {
        return this.tipo;
    }
    
    
    public get valor_() : number {
        return this.valor;
    }
    
    
    public get hospede_() : Hospede[] {
        return this.hospede;
    }
    
}