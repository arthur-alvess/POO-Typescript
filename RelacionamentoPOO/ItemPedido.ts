import { Produto } from "./Produto"

export class ItemPedido{
    private produto: Produto;
    private qtd: number;


    public constructor(produto: Produto, quantidade: number){
        this.produto = produto;
        this.qtd = quantidade;
    }


    public getProduto(): Produto{
        return this.produto;
    }

    public getQuantidade(): number{
        return this.qtd;
    }
}