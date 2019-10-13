"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Departamento_1 = require("./Departamento");
var Funcionario_1 = require("./Funcionario");
var Reuni_o_1 = require("./Reuni\u00E3o");
var Pessoal = /** @class */ (function (_super) {
    __extends(Pessoal, _super);
    function Pessoal(n, c, r) {
        return _super.call(this, n, c, r) || this;
    }
    return Pessoal;
}(Departamento_1.Departamento));
exports.Pessoal = Pessoal;
var chefePessoal = new Funcionario_1.Funcionario('João', 434);
var data1 = new Date;
var reuniãoPessoal1 = new Reuni_o_1.Reunião('Curso de Atendimento', '12 12 2018');
var reuniãoPessoal2 = new Reuni_o_1.Reunião('Palestra Motivacional', '20 12 2018');
var depPessoal = new Pessoal('Pessoal', chefePessoal, [reuniãoPessoal1, reuniãoPessoal2]);
console.log("Departamento: " + depPessoal.getNome() + "\nChefe (Nome e Matr\u00EDcula): " + chefePessoal.getNome() + ", " + chefePessoal.getMatricula() + "\nReuni\u00F5es: " + reuniãoPessoal1.getAssunto() + " Data (" + reuniãoPessoal1.getData() + "), " + reuniãoPessoal2.getAssunto() + " Data (" + reuniãoPessoal2.getData() + ")");
