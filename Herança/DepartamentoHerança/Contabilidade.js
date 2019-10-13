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
var Contabilidade = /** @class */ (function (_super) {
    __extends(Contabilidade, _super);
    function Contabilidade(n, c, r) {
        return _super.call(this, n, c, r) || this;
    }
    return Contabilidade;
}(Departamento_1.Departamento));
exports.Contabilidade = Contabilidade;
var chefeContabilidade = new Funcionario_1.Funcionario('Diego', 222);
var data1 = new Date;
var reuniãoContabilidade1 = new Reuni_o_1.Reunião('Aumento de Salário', '20 02 2019');
var reuniãoContabilidade2 = new Reuni_o_1.Reunião('Contratações', '20 01 2019');
var depContabilidade = new Contabilidade('Contabilidade', chefeContabilidade, [reuniãoContabilidade1, reuniãoContabilidade2]);
console.log("Departamento: " + depContabilidade.getNome() + "\nChefe (Nome e Matr\u00EDcula): " + chefeContabilidade.getNome() + ", " + chefeContabilidade.getMatricula() + "\nReuni\u00F5es: " + reuniãoContabilidade1.getAssunto() + " Data (" + reuniãoContabilidade1.getData() + "), " + reuniãoContabilidade2.getAssunto() + " Data (" + reuniãoContabilidade2.getData() + ")");
