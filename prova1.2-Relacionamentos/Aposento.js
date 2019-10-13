"use strict";
exports.__esModule = true;
var Aposento = /** @class */ (function () {
    function Aposento(nu, ti, va, ho) {
        this.hospede = [];
        this.numero = nu;
        this.tipo = ti;
        this.valor = va;
        this.hospede = ho;
    }
    Object.defineProperty(Aposento.prototype, "_numero", {
        set: function (numero) {
            this.numero = numero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "_tipo", {
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "_valor", {
        set: function (valor) {
            this.valor = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "_hospede", {
        set: function (hospede) {
            this.hospede = hospede;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "numero_", {
        get: function () {
            return this.numero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "tipo_", {
        get: function () {
            return this.tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "valor_", {
        get: function () {
            return this.valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aposento.prototype, "hospede_", {
        get: function () {
            return this.hospede;
        },
        enumerable: true,
        configurable: true
    });
    return Aposento;
}());
exports.Aposento = Aposento;
