let nomes = ['Bruno', 'Elaine', 'José', 'Matheus',
    'Maria', 'Alana', 'Erika',
    'Alison', 'Lucas', 'Rickson',
    'Alberto', 'Beatriz', 'Renata', 'Sayonara'];
// letra A -> Adicione  mais  dois  nomes  na  lista;
nomes.push('Arthur');
nomes.push('Estevão');
console.log('Nomes adicionados na lista: ' + nomes);

console.log('Adicione dois nomes na lista: ' + nomes);
// letra B -> Obtenha a quantidade de nomes adicionados;
console.log('Obtenha a quantidade de nomes adicionados: ' +  nomes.length);
let quantidade = ['Quantidade de nomes: '+ nomes.length];
// letra C -> Remova o terceiro nome da lista;
console.log('Elemento removido: ' + nomes.splice(3,1)); // ['Bruno', 'Elaine', 'José', 'Matheus'] irá remover Matheus

//Letra D -> Realize uma busca por um nome qualquer e diga qual a posição dele na lista
let cont = 0;
for (let n = 0; n < nomes.length;n++){
    console.log(n);
}
let quant: number = 0;
nomes.forEach(n =>{
    if (n.charAt(0)=== 'A'){
        quant +=1;
    }
});
console.log('Quantidade de nomes os quais iniciam com a letra A: ' + quant);
