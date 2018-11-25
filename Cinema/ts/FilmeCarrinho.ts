import { Filme } from "./Filme";

export class FilmeEscolhido{
    public filmeEscolhido:Filme;
    private quantidade:number;

    
    constructor(filme:Filme) {
        this.filmeEscolhido = filme;
        this.quantidade = 0;
    }

    public getQuant(){
        return this.quantidade;
    }
    public addQuant(){
        this.quantidade += 1;
    }
    public remQuant(){
        this.quantidade =0 ;
    }

    public toString = (): String => {
        return `Filme: ${this.filmeEscolhido.getNome()}\n
        Idade Mínima: ${this.filmeEscolhido.getIdade()}\n
        Total de ingressos: ${this.quantidade}\n`
    }
}

export class CarrinhoDeFilme{
    public filmes: FilmeEscolhido[];
    constructor(){
        this.filmes = [];
    }

    public sizeListaFilmeCar(){
        return this.filmes.length;
    }
    public adicionarFilmeCarrinho(filme:FilmeEscolhido){
        this.filmes.push(filme);
    }

}