import {Produto} from "./Produto"
import {ItemPedido} from "./ItemPedido"

export class Pedido{
    private itens: ItemPedido[] = [];
    private valor_total: number;

    constructor(){

    }

    adicionarItem(item: Produto): void {
        this.itens.push(item);
    }

    obterValor(){
        return ItemPedido[1] * Produto[1];
    }

}

let produto1 = new Produto(1, 5.00, "Batata Frita");
let produto2 = new Produto(2, 6.00, "Refrigerante")
let itempedido1 = new ItemPedido(produto1, 2);
let pedido1 = new Pedido();
pedido1.adicionarItem(produto1);

console.log(pedido1);

pedido1.adicionarItem(produto2);

console.log(pedido1);