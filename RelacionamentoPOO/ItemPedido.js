"use strict";
exports.__esModule = true;
var ItemPedido = /** @class */ (function () {
    function ItemPedido(produto, quantidade) {
        this.produto = produto;
        this.qtd = quantidade;
    }
    ItemPedido.prototype.getProduto = function () {
        return this.produto;
    };
    ItemPedido.prototype.getQuantidade = function () {
        return this.qtd;
    };
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;
