"use strict";
exports.__esModule = true;
var FilmeEscolhido = /** @class */ (function () {
    function FilmeEscolhido(filme) {
        var _this = this;
        this.toString = function () {
            return "Filme: " + _this.filmeEscolhido.getNome() + "\n\n        Idade M\u00EDnima: " + _this.filmeEscolhido.getIdade() + "\n\n        Total de ingressos: " + _this.quantidade + "\n";
        };
        this.filmeEscolhido = filme;
        this.quantidade = 0;
    }
    FilmeEscolhido.prototype.getQuant = function () {
        return this.quantidade;
    };
    FilmeEscolhido.prototype.addQuant = function () {
        this.quantidade += 1;
    };
    FilmeEscolhido.prototype.remQuant = function () {
        this.quantidade = 0;
    };
    return FilmeEscolhido;
}());
exports.FilmeEscolhido = FilmeEscolhido;
var CarrinhoDeFilme = /** @class */ (function () {
    function CarrinhoDeFilme() {
        this.filmes = [];
    }
    CarrinhoDeFilme.prototype.sizeListaFilmeCar = function () {
        return this.filmes.length;
    };
    CarrinhoDeFilme.prototype.adicionarFilmeCarrinho = function (filme) {
        this.filmes.push(filme);
    };
    return CarrinhoDeFilme;
}());
exports.CarrinhoDeFilme = CarrinhoDeFilme;
