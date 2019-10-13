export class Reunião{
    private assunto: string;
    private data: Date;
    
    constructor(a: string, d: Date){
        this.assunto = a;
        this.data = d;
    }
    
    public setAssunto(assunto: string){
        this.assunto = assunto;
    }

    public getAssunto(): string{
        return this.assunto;
    }

    public setData(data: Date){
        this.data = data;
    }

    public getData(): Date{
        return this.data
    }
}