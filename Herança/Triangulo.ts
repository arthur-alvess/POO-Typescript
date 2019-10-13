import { Poligono } from "./Poligono";

export class Triangulo extends Poligono{
    constructor(b: number, a: number){
        super(b, a);
    }

    public areaTriangulo(){
        return ((this.base * this.altura) / 2)
    }
}