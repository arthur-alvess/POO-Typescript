import {Endereco} from "./Endereco"
import {Telefone} from "./Telefone"

export class Contato{
    private nome: string;
    private endereco: Endereco;
    private telefone: Telefone;

        constructor(no: string, end: Endereco, tel: Telefone){
            this.nome = no;
            this.endereco = end;
            this.telefone = tel;
        }

    getNome(){
        return this.nome;
    }

    setNome(n: string){
        this.nome = n;
    }

    getEndereco(): Endereco{
        return this.endereco;
    }

    setEndereco(endereco: Endereco){
        this.endereco = endereco;
    }

    getTelefone(): Telefone{
        return this.telefone
    }

    setTelefone(telefone: Telefone){
        this.telefone = telefone;
    }

    public mostrarContato(){
        return console.log(`Nome: ${this.getNome()}
Endereço: ${this.getEndereco().mostrarEndereco()}
Telefone(s): ${this.getTelefone().mostrarNumeros()}`);

    }
    
}