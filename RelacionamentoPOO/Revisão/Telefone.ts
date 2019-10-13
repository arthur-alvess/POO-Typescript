export class Telefone{
    private numeros: string[];

    constructor(nu: string[]){
        this.numeros = nu;
    }

    addNumero(tel: string): void{
        this.numeros.push(tel)
    }

    public getNumero(): string[]{
        return this.numeros;
    }

    public mostrarNumeros(){
        return this.getNumero();
    }

}