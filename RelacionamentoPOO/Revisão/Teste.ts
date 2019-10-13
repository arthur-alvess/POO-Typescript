import { Contato } from "./Contato";
import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

let endereco: Endereco = new Endereco('Alameda Passo da Pátria', 49, 'Vila Naval', 'Barro Vermelho', 'Natal');
let telefone: Telefone = new Telefone(['9999-9999', '8888-8888', '7777-7777']);
let contato: Contato = new Contato('Diego Araujo', endereco, telefone);

// console.log(contato.getNome());
// console.log(contato.getEndereco());
// console.log(contato.getTelefone());
console.log(contato.mostrarContato());