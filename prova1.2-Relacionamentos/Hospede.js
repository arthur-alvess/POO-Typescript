"use strict";
exports.__esModule = true;
var Hospede = /** @class */ (function () {
    function Hospede(n, c, t, e) {
        this.nome = n;
        this.cpf = c;
        this.telefone = t;
        this.endereco = e;
    }
    Object.defineProperty(Hospede.prototype, "_nome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "_cpf", {
        set: function (cpf) {
            this.cpf = cpf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "_telefone", {
        set: function (telefone) {
            this.telefone = telefone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "_endereco", {
        set: function (endereco) {
            this.endereco = endereco;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "nome_", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "cpf_", {
        get: function () {
            return this.cpf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "telefone_", {
        get: function () {
            return this.telefone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hospede.prototype, "endereco_", {
        get: function () {
            return this.endereco;
        },
        enumerable: true,
        configurable: true
    });
    return Hospede;
}());
exports.Hospede = Hospede;
