"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(co, va, des) {
        this.codigo = co;
        this.valor = va;
        this.descricao = des;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Produto.prototype.getValor = function () {
        return this.valor;
    };
    Produto.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Produto.prototype.getDescricao = function () {
        return this.descricao;
    };
    Produto.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    return Produto;
}());
exports.Produto = Produto;
var batatinha = new Produto(1, 5.00, "Batatinha");
console.log(batatinha);
