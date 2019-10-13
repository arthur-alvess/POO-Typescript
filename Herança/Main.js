"use strict";
exports.__esModule = true;
var Retangulo_1 = require("./Retangulo");
var Triangulo_1 = require("./Triangulo");
var retangulo = new Retangulo_1.Retangulo(10, 20);
var triangulo = new Triangulo_1.Triangulo(10, 20);
console.log("\u00C1rea do Ret\u00E2ngulo: " + retangulo.areaRetangulo());
console.log("\u00C1rea do Tri\u00E2ngulo: " + triangulo.areaTriangulo());
