import { Poligono } from "./Poligono";

export class Retangulo extends Poligono{
    constructor(b: number, a: number)    {
        super(b, a)
    }

    public areaRetangulo(){
        return (this.base * this.altura)
    }
}

