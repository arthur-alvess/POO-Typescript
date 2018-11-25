import { Cinema } from "./Cinema";
import { Filme } from "./Filme";
import {CarrinhoDeFilme, FilmeEscolhido } from "./CarrinhoFilme";



let cine:Cinema = new Cinema('Cine Ticket');

let hora1: string[] = ['14:50', '17:20', '22:30'];
let sinopse1 = 'Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva. Tudo corre bem, até que uma grande tragédia atinge sua vida mudando sua trajetória para sempre.'
let filme1: Filme = new Filme('Rei Leão', sinopse1, hora1, 10, 'Livre','rei leao.jpg');


let sinopse2 = 'Newt Scamander (Eddie Redmayne) reencontra os queridos amigos Tina Goldstein (Katherine Waterston), Queenie Goldstein (Alison Sudol) e Jacob Kowalski (Dan Fogler). Ele é recrutado pelo seu antigo professor em Hogwarts, Alvo Dumbledore (Jude Law), para enfrentar o terrível bruxo das trevas Gellert Grindelwald (Johnny Depp), que escapou da custódia da MACUSA (Congresso Mágico dos EUA) e reúne seguidores, dividindo o mundo entre seres de magos sangue puro e seres não-mágicos.'
let filme2: Filme = new Filme('Animais Fantásticos e os Crimes de Grindewald', sinopse2, hora1, 20, 'Livre', 'animais.jpg');


let sinopse3 = 'O elenco principal conta com Rami Malek (Freddie Mercury), Ben Hardy (Roger Taylor), Gwilym Lee (Brian May) e Joseph Mazzello (John Deacon). O filme acompanha a banda desde começo até a apresentação histórica no Live Aid em 1985.'
let filme3: Filme = new Filme('Bohemian Rhapsody', sinopse3, hora1, 15, '16','bohemian_rhapsody_ver9.jpg');



cine.adicionarFilme(filme1);
cine.adicionarFilme(filme2);

let filmeEsc1: FilmeEscolhido = new FilmeEscolhido(filme1);
let filmeEsc2: FilmeEscolhido = new FilmeEscolhido(filme2);

let carrinho: CarrinhoDeFilme = new CarrinhoDeFilme();
carrinho.adicionarFilmeCarrinho(filmeEsc1);
carrinho.adicionarFilmeCarrinho(filmeEsc2);
let tam = (carrinho.sizeListaFilmeCar()-1);


function filmes() {

    document.getElementsByClassName('nome-cine')[0].innerHTML = cine.getNome();

    let areaFilme = document.getElementsByClassName('filmes')[0];

    let quantFilme = cine.qntFilme();

    for (let i=0; i < quantFilme;i++){
        let filme = document.createElement('div');
        filme.className = `todos-filme f${[i+1]}`;

        filme.style.background = `url('${cine.filme[i].getUrl()}')`;
        filme.style.backgroundSize = '270px 228px';
        filme.style.backgroundRepeat = 'no-repeat';

        let divExt = document.createElement('div');

        let divInfo = document.createElement('div');
        divInfo.className = 'info-filme'

        let titulo = document.createElement('h3');
        titulo.innerText = `${cine.filme[i].getNome()}`;
        divInfo.appendChild(titulo);

        let resumo = document.createElement('p');
        resumo.innerText = `${cine.filme[i].getSinopse()}`;
        divInfo.appendChild(resumo);

        let quantImg = document.createElement('p');
        quantImg.innerText = `Quantidade de Ingressos: ${cine.filme[i].getQntIngresso()}`;
        divInfo.appendChild(quantImg)

        let idade = document.createElement('p');
        idade.innerText = `Classificação Etária: ${cine.filme[i].getIdade()}`;
        divInfo.appendChild(idade);

        divExt.appendChild(divInfo);

        let buttonCarrinho = document.createElement("button");
        buttonCarrinho.className = "btn btn-success";
        buttonCarrinho.type = 'button';
        buttonCarrinho.innerText = 'Colocar no carrinho';
        buttonCarrinho.value = `${cine.filme[i].getNome()}`;

        divExt.appendChild(buttonCarrinho);

        filme.appendChild(divExt);

        areaFilme.appendChild(filme);
    }
}

let cont = 0;
function aparecerTela() {
    cont+=1
    if(cont%2 !==0){
        let tela = document.getElementsByTagName('div')[3];
        tela.style.opacity = '1';
        tela.style.zIndex = '1';

        let article = document.getElementsByTagName('article')[0];
        article.style.opacity = '.7';
    } else if(cont%2 == 0){
        let tela = document.getElementsByTagName('div')[3];
        tela.style.opacity = '0';
        tela.style.zIndex = '-5';

        let article = document.getElementsByTagName('article')[0];
        article.style.opacity = '1';
    }
}

function colocarCarrinho(n:number){
    let divCar = document.getElementsByClassName('area-carrinho')[0];

    if (divCar.getElementsByClassName('filme-carrinho')) {
        divCar.remove();
        let areaNova = document.createElement('div');
        areaNova.className = 'area-carrinho';
        document.getElementsByClassName('area-filme')[0].appendChild(areaNova);
    }

    let divCar1 = document.getElementsByClassName('area-carrinho')[0];
    for (let i = 0; i <= tam; i++) {
        let filmeAtual = carrinho.filmes[i];
        if (filmeAtual.getQuant() !== 0){
            let filmeEscolhidoCar = document.createElement('div');
            filmeEscolhidoCar.className = `filme-carrinho`;

            filmeEscolhidoCar.style.background =`url('${filmeAtual.filmeEscolhido.getUrl()}')`;
            filmeEscolhidoCar.style.backgroundSize = '88px 89px';
            filmeEscolhidoCar.style.backgroundRepeat = 'no-repeat';

            filmeEscolhidoCar.style.borderBottom ='1px solid rgba(1, 1, 1, .5)';

            let info = `<section>
            <p>Titulo: ${filmeAtual.filmeEscolhido.getNome()}</p>
            <p>Classificação Etária: ${filmeAtual.filmeEscolhido.getIdade()}</p>
            <p>Quantidade: ${filmeAtual.getQuant()}</p>
            </section>
            <aside>
                <span>X</span>
            </aside>`

            filmeEscolhidoCar.innerHTML = info;

            divCar1.appendChild(filmeEscolhidoCar);
        }

    }

}

function remove(){
    document.getElementsByTagName('aside')[0].onclick = apagaFilme1;
    document.getElementsByTagName('aside')[1].onclick = apagaFilme2;
    document.getElementsByTagName('aside')[2].onclick = apagaFilme3;
}
function apagaFilme1() {
    filmeEsc1.remQuant();
   
}
function apagaFilme2() {
    filmeEsc2.remQuant();

}
function apagaFilme3() {
    filmeEsc1.remQuant();
   
}

function addFilme1() {
    filmeEsc1.addQuant();
    colocarCarrinho(1);
}
function addFilme2() {
    filmeEsc2.addQuant();
    colocarCarrinho(2);
}

function addFilme3() {
    filmeEsc2.addQuant();
    colocarCarrinho(3);
}

function finalizaCompra() {
    let total = 0;
    for (let j = 0; j <=tam; j++){
        let valor = (carrinho.filmes[j].getQuant() * 14)
        total += valor;
    }

alert(`O filme é R$32.00

O total foi R$${total}.00`)
    window.location.reload()
}

function apagaCarrinhoTotal(){
    let divCar = document.getElementsByClassName('area-carrinho')[0];

    if (divCar.getElementsByClassName('filme-carrinho')) {
        divCar.remove();
        let areaNova = document.createElement('div');
        areaNova.className = 'area-carrinho';
        document.getElementsByClassName('area-filme')[0].appendChild(areaNova);
    }
    apagaFilme1();
    apagaFilme2();
}

window.onload = function carrega(){
    filmes();
    document.getElementsByTagName('div')[1].onclick = aparecerTela;
    
    
    document.getElementsByTagName('button')[0].onclick = finalizaCompra;
    document.getElementsByTagName('button')[1].onclick = apagaCarrinhoTotal;

    
    document.getElementsByTagName('button')[2].onclick = addFilme1;
    document.getElementsByTagName('button')[3].onclick = addFilme2;

    remove();
}
