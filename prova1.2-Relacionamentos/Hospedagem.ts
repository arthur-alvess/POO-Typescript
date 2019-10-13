import { Hospede } from "./Hospede";
import { Aposento } from "./Aposento";

export class Hospedagem{
    private aposento: Aposento;

    constructor(ap: Aposento){
        this.aposento = ap;
    }

    public hospedar(p: Hospede){
        this.aposento._hospede.push(p)
    }

    public calcular_total(diarias: number): number{
        return this.aposento.valor_ * diarias
    }
}