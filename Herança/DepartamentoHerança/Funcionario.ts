export class Funcionario{
    private nome: string;
    private matricula: number;

    constructor(n: string, m: number){
        this.nome = n;
        this.matricula = m;
    }

    public getNome(): string{
        return this.nome; 
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getMatricula(): number{
        return this.matricula;
    }

    public setMatricula(matricula: number){
        this.matricula = matricula;
    }
}