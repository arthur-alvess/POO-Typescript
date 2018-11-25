export class Filme {
    private nome:string;
    private sinopse: string;
    private horario: string[];
    private Ingresso: number;
    private classEtaria: string;
    private url:string;

    constructor(nome: string, sinopse: string, hora: string[], ingresso: number, idade:string, url:string) {
        this.nome = nome;
        this.sinopse = sinopse;
        this.horario = hora;
        this.Ingresso = ingresso;
        this.classEtaria = idade;
        this.url = url;
    }

    public getNome(){
        return this.nome;
    }

    getSinopse(){
        return this.sinopse;
    }

    public getHorario(){
        return this.horario;
    }

    public adicionarHora(h:string){
        this.horario.push(h);
    }

    public getQntIngresso(){
        return this.Ingresso;
    }
    public setQntIngresso(){
        this.Ingresso -1;
    }

    public getIdade(){
        return this.classEtaria;
    }

    getUrl(){return this.url;}


    public toString = (): String => {
        return `Filme: ${this.nome}\n
        Horarios: ${this.horario}\n
        Total de ingressos: ${this.Ingresso}\n
        Classificação Etária: ${this.classEtaria}\n`
    }

}