export class Hospede{
    private nome: string;
    private cpf: string;
    private telefone: string;
    private endereco: string;

    constructor(n:string, c:string, t:string, e:string){
        this.nome = n;
        this.cpf = c;
        this.telefone = t;
        this.endereco = e;
    }

    
    public set _nome(nome : string) {
        this.nome = nome;
    }

    
    public set _cpf(cpf : string) {
        this.cpf = cpf;
    }
    
    
    public set _telefone(telefone : string) {
        this.telefone = telefone;
    }
    
    
    public set _endereco(endereco : string) {
        this.endereco = endereco;
    }

    
    public get nome_() : string {
        return this.nome;
    }

    
    public get cpf_() : string {
        return this.cpf;
    }

    
    public get telefone_() : string {
        return this.telefone;
    }
    
    
    public get endereco_() : string {
        return this.endereco;
    }
    
    
}