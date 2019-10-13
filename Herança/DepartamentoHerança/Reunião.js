"use strict";
exports.__esModule = true;
var Reunião = /** @class */ (function () {
    function Reunião(a, d) {
        this.assunto = a;
        this.data = d;
    }
    Reunião.prototype.setAssunto = function (assunto) {
        this.assunto = assunto;
    };
    Reunião.prototype.getAssunto = function () {
        return this.assunto;
    };
    Reunião.prototype.setData = function (data) {
        this.data = data;
    };
    Reunião.prototype.getData = function () {
        return this.data;
    };
    return Reunião;
}());
exports.Reunião = Reunião;
