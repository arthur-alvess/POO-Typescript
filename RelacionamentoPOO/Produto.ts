export class Produto{
    private codigo: number;
    private valor: number;
    private descricao: string;

    constructor(co: number, va: number, des: string){
        this.codigo = co;
        this.valor = va;
        this.descricao = des;
    }

    
    public getCodigo() : number {
        return this.codigo;
    }

    public setCodigo(codigo: number) : void {
        this.codigo = codigo;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    
}

let batatinha = new Produto(1, 5.00, "Batatinha");
console.log(batatinha);