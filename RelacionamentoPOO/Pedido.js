"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var ItemPedido_1 = require("./ItemPedido");
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.itens = [];
    }
    Pedido.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    Pedido.prototype.obterValor = function () {
        return ItemPedido_1.ItemPedido[1] * Produto_1.Produto[1];
    };
    return Pedido;
}());
exports.Pedido = Pedido;
var produto1 = new Produto_1.Produto(1, 5.00, "Batata Frita");
var produto2 = new Produto_1.Produto(2, 6.00, "Refrigerante");
var itempedido1 = new ItemPedido_1.ItemPedido(produto1, 2);
var pedido1 = new Pedido();
pedido1.adicionarItem(produto1);
console.log(pedido1);
pedido1.adicionarItem(produto2);
console.log(pedido1);
