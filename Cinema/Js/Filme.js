"use strict";
exports.__esModule = true;
var Filme = /** @class */ (function () {
    function Filme(nome, sinopse, hora, ingresso, idade, url) {
        var _this = this;
        this.toString = function () {
            return "Filme: " + _this.nome + "\n\n        Horarios: " + _this.horario + "\n\n        Total de ingressos: " + _this.Ingresso + "\n\n        Classifica\u00E7\u00E3o Et\u00E1ria: " + _this.classEtaria + "\n";
        };
        this.nome = nome;
        this.sinopse = sinopse;
        this.horario = hora;
        this.Ingresso = ingresso;
        this.classEtaria = idade;
        this.url = url;
    }
    Filme.prototype.getNome = function () {
        return this.nome;
    };
    Filme.prototype.getSinopse = function () {
        return this.sinopse;
    };
    Filme.prototype.getHorario = function () {
        return this.horario;
    };
    Filme.prototype.adicionarHora = function (h) {
        this.horario.push(h);
    };
    Filme.prototype.getQntIngresso = function () {
        return this.Ingresso;
    };
    Filme.prototype.setQntIngresso = function () {
        this.Ingresso - 1;
    };
    Filme.prototype.getIdade = function () {
        return this.classEtaria;
    };
    Filme.prototype.getUrl = function () { return this.url; };
    return Filme;
}());
exports.Filme = Filme;
