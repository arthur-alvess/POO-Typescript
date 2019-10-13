"use strict";
exports.__esModule = true;
var Funcionario = /** @class */ (function () {
    function Funcionario(n, m) {
        this.nome = n;
        this.matricula = m;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getMatricula = function () {
        return this.matricula;
    };
    Funcionario.prototype.setMatricula = function (matricula) {
        this.matricula = matricula;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
