"use strict";
exports.__esModule = true;
var Cinema = /** @class */ (function () {
    function Cinema(nome) {
        this.nome = nome;
        this.filme = [];
        this.pagamento = 0;
    }
    Cinema.prototype.adicionarFilme = function (filme) {
        this.filme.push(filme);
    };
    Cinema.prototype.getNome = function () {
        return this.nome;
    };
    Cinema.prototype.qntFilme = function () {
        return this.filme.length;
    };
    Cinema.prototype.infoFilme = function () {
        var tam = this.qntFilme();
        for (var i = 0; i < tam; i++) {
            this.filme[i].toString;
        }
    };
    Cinema.prototype.listarFilme = function () {
        return this.filme;
    };
    return Cinema;
}());
exports.Cinema = Cinema;
