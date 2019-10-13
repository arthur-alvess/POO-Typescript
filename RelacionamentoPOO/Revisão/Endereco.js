"use strict";
exports.__esModule = true;
var Endereco = /** @class */ (function () {
    function Endereco(rua, nu, com, ba, cid) {
        this.rua = rua;
        this.numero = nu;
        this.complemento = com;
        this.bairro = ba;
        this.cidade = cid;
    }
    Endereco.prototype.getRua = function () {
        return this.rua;
    };
    Endereco.prototype.setRua = function (r) {
        this.rua = r;
    };
    Endereco.prototype.setNumero = function (n) {
        this.numero = n;
    };
    Endereco.prototype.getNumero = function () {
        return this.numero;
    };
    Endereco.prototype.getComplemento = function () {
        return this.complemento;
    };
    Endereco.prototype.setComplemento = function (complemento) {
        this.complemento = complemento;
    };
    Endereco.prototype.getBairro = function () {
        return this.bairro;
    };
    Endereco.prototype.setBairro = function (bairro) {
        this.bairro = bairro;
    };
    Endereco.prototype.getCidade = function () {
        return this.cidade;
    };
    Endereco.prototype.setCidade = function (cidade) {
        this.cidade = cidade;
    };
    Endereco.prototype.mostrarEndereco = function () {
        return this.getRua() + ", " + this.getNumero() + ", " + this.getComplemento() + ", " + this.getBairro() + ", " + this.getCidade();
    };
    return Endereco;
}());
exports.Endereco = Endereco;
