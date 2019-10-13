"use strict";
exports.__esModule = true;
var Telefone = /** @class */ (function () {
    function Telefone(nu) {
        this.numeros = nu;
    }
    Telefone.prototype.addNumero = function (tel) {
        this.numeros.push(tel);
    };
    Telefone.prototype.getNumero = function () {
        return this.numeros;
    };
    Telefone.prototype.mostrarNumeros = function () {
        return this.getNumero();
    };
    return Telefone;
}());
exports.Telefone = Telefone;
