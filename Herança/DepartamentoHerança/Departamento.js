"use strict";
exports.__esModule = true;
var Departamento = /** @class */ (function () {
    function Departamento(n, c, r) {
        this.nome = n;
        this.chefe = c;
        this.reuniao = r;
    }
    Departamento.prototype.getNome = function () {
        return this.nome;
    };
    Departamento.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Departamento.prototype.getChefe = function () {
        return this.chefe;
    };
    Departamento.prototype.setChefe = function (chefe) {
        this.chefe = chefe;
    };
    Departamento.prototype.getReuniao = function () {
        return this.reuniao;
    };
    Departamento.prototype.setReuniao = function (reuniao) {
        this.reuniao = reuniao;
    };
    Departamento.prototype.imprimirReunioes = function () {
        return this.getReuniao();
    };
    return Departamento;
}());
exports.Departamento = Departamento;
