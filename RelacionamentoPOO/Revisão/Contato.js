"use strict";
exports.__esModule = true;
var Contato = /** @class */ (function () {
    function Contato(no, end, tel) {
        this.nome = no;
        this.endereco = end;
        this.telefone = tel;
    }
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setNome = function (n) {
        this.nome = n;
    };
    Contato.prototype.getEndereco = function () {
        return this.endereco;
    };
    Contato.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    Contato.prototype.getTelefone = function () {
        return this.telefone;
    };
    Contato.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Contato.prototype.mostrarContato = function () {
        return console.log("Nome: " + this.getNome() + "\nEndere\u00E7o: " + this.getEndereco().mostrarEndereco() + "\nTelefone(s): " + this.getTelefone().mostrarNumeros());
    };
    return Contato;
}());
exports.Contato = Contato;
