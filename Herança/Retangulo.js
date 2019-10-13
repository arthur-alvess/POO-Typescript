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
var Poligono_1 = require("./Poligono");
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(b, a) {
        return _super.call(this, b, a) || this;
    }
    Retangulo.prototype.areaRetangulo = function () {
        return (this.base * this.altura);
    };
    return Retangulo;
}(Poligono_1.Poligono));
exports.Retangulo = Retangulo;
