"use strict";
exports.__esModule = true;
var Hospedagem = /** @class */ (function () {
    function Hospedagem(ap) {
        this.aposento = ap;
    }
    Hospedagem.prototype.hospedar = function (p) {
        this.aposento._hospede.push(p);
    };
    Hospedagem.prototype.calcular_total = function (diarias) {
        return this.aposento.valor_ * diarias;
    };
    return Hospedagem;
}());
exports.Hospedagem = Hospedagem;
