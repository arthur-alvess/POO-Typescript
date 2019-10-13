import { Poligono } from "./Poligono";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";


let retangulo: Retangulo = new Retangulo(10, 20);
let triangulo: Triangulo = new Triangulo(10, 20);

console.log(`Área do Retângulo: ${retangulo.areaRetangulo()}`);
console.log(`Área do Triângulo: ${triangulo.areaTriangulo()}`);

