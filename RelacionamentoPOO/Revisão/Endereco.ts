export class Endereco{
    private rua: string;
    private numero: number;
    private complemento: string;
    private bairro: string;
    private cidade: string;
    
    constructor(rua: string, nu: number, com: string, ba: string, cid: string){
        this.rua = rua;
        this.numero = nu;
        this.complemento = com;
        this.bairro = ba;
        this.cidade = cid;
    }

    
    public getRua() : string {
        return this.rua;
    }

    public setRua(r : string) {
        this.rua = r;
    }
    
    public setNumero(n: number){
        this.numero = n;
    }

    public getNumero(){
        return this.numero;
    }

    public getComplemento(): string{
        return this.complemento;
    }

    public setComplemento(complemento: string){
        this.complemento = complemento;
    }

    public getBairro(): string{
        return this.bairro;
    }

    public setBairro(bairro: string){
        this.bairro = bairro;
    }

    public getCidade(): string{
        return this.cidade;
    }

    public setCidade(cidade: string){
        this.cidade = cidade;
    }

    public mostrarEndereco(): string{
        return `${this.getRua()}, ${this.getNumero()}, ${this.getComplemento()}, ${this.getBairro()}, ${this.getCidade()}`;
    }

}