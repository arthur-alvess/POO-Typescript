export class Cliente {
    private nome_:string;
    private idade_: number;
    private id_:string;

    constructor(nome:string, idd: number,id:string) {
        this.nome_ = nome;
        this.idade_ = idd;
        this.id_ = id;
    }

    public getNome() : string {
        return this.nome_;
    }
    public setNome(nome : string) {
        this.nome_ = nome;
    }
    
    public getIdade():number {
        return this.idade_
    }
    public setIdade(idd : number) {
        this.idade_ = idd;
    }

    public getIdentificador():string{
        return this.id_;
    }
    public setId(id:string){
        this.id_ = id;
    }
    
    public toString = (): String => {
        return `Nome: ${this.nome_}\nIdade: ${this.idade_}`
    }

}