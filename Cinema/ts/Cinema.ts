import { Filme } from "./Filme";

export class Cinema{
    private nome:string;
    public filme:Filme[];
    private pagamento:any 

    constructor(nome:string) {
        this.nome = nome;
        this.filme = [];
        this.pagamento = 0;
    }

    public adicionarFilme(filme:Filme):void{
        this.filme.push(filme);
    }

    public getNome() : string {
        return this.nome;
    }
    
    public qntFilme(){
        return this.filme.length;
    }

    public infoFilme(){
        let tam = this.qntFilme();
        for (let i =0 ; i <tam; i++){
            this.filme[i].toString;
        }
    }
    public listarFilme(){
        return this.filme;
    }
}