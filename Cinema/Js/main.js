"use strict";
exports.__esModule = true;
var Cinema_1 = require("./Cinema");
var Filme_1 = require("./Filme");
var FilmeCarrinho_1 = require("./FilmeCarrinho");
var cine = new Cinema_1.Cinema('Cine Ticket');
var hora1 = ['14:50', '17:20', '22:30'];
var sinopse1 = 'Simba (Donald Glover) é um jovem leão cujo destino é se tornar o rei da selva. Tudo corre bem, até que uma grande tragédia atinge sua vida mudando sua trajetória para sempre.';
var filme1 = new Filme_1.Filme('Rei Leão', sinopse1, hora1, 20, 'Livre', 'rei leao.jpg');
var sinopse2 = 'Newt Scamander (Eddie Redmayne) reencontra os queridos amigos Tina Goldstein (Katherine Waterston), Queenie Goldstein (Alison Sudol) e Jacob Kowalski (Dan Fogler). Ele é recrutado pelo seu antigo professor em Hogwarts, Alvo Dumbledore (Jude Law), para enfrentar o terrível bruxo das trevas Gellert Grindelwald (Johnny Depp), que escapou da custódia da MACUSA (Congresso Mágico dos EUA) e reúne seguidores, dividindo o mundo entre seres de magos sangue puro e seres não-mágicos.';
var filme2 = new Filme_1.Filme('Animais Fantásticos e os Crimes de Grindewald', sinopse2, hora1, 30, 'Livre', 'animais.jpg');
cine.adicionarFilme(filme1);
cine.adicionarFilme(filme2);
var filmeEsc1 = new FilmeCarrinho_1.FilmeEscolhido(filme1);
var filmeEsc2 = new FilmeCarrinho_1.FilmeEscolhido(filme2);
var carrinho = new FilmeCarrinho_1.CarrinhoDeFilme();
carrinho.adicionarFilmeCarrinho(filmeEsc1);
carrinho.adicionarFilmeCarrinho(filmeEsc2);
var tam = (carrinho.sizeListaFilmeCar() - 1);
function filmes() {
    document.getElementsByClassName('nome-cine')[0].innerHTML = cine.getNome();
    var areaFilme = document.getElementsByClassName('filmes')[0];
    var quantFilme = cine.qntFilme();
    for (var i = 0; i < quantFilme; i++) {
        var filme = document.createElement('div');
        filme.className = "todos-filme f" + [i + 1];
        filme.style.background = "url('" + cine.filme[i].getUrl() + "')";
        filme.style.backgroundSize = '270px 228px';
        filme.style.backgroundRepeat = 'no-repeat';
        var divExt = document.createElement('div');
        var divInfo = document.createElement('div');
        divInfo.className = 'info-filme';
        var titulo = document.createElement('h3');
        titulo.innerText = "" + cine.filme[i].getNome();
        divInfo.appendChild(titulo);
        var resumo = document.createElement('p');
        resumo.innerText = "" + cine.filme[i].getSinopse();
        divInfo.appendChild(resumo);
        var quantImg = document.createElement('p');
        quantImg.innerText = "Quantidade de Ingressos: " + cine.filme[i].getQntIngresso();
        divInfo.appendChild(quantImg);
        var idade = document.createElement('p');
        idade.innerText = "Classifica\u00E7\u00E3o Et\u00E1ria: " + cine.filme[i].getIdade();
        divInfo.appendChild(idade);
        divExt.appendChild(divInfo);
        var buttonCarrinho = document.createElement("button");
        buttonCarrinho.className = "btn btn-success";
        buttonCarrinho.type = 'button';
        buttonCarrinho.innerText = 'Colocar no carrinho';
        buttonCarrinho.value = "" + cine.filme[i].getNome();
        divExt.appendChild(buttonCarrinho);
        filme.appendChild(divExt);
        areaFilme.appendChild(filme);
    }
}
var cont = 0;
function aparecerTela() {
    cont += 1;
    if (cont % 2 !== 0) {
        var tela = document.getElementsByTagName('div')[3];
        tela.style.opacity = '1';
        tela.style.zIndex = '1';
        var article = document.getElementsByTagName('article')[0];
        article.style.opacity = '.7';
    }
    else if (cont % 2 == 0) {
        var tela = document.getElementsByTagName('div')[3];
        tela.style.opacity = '0';
        tela.style.zIndex = '-5';
        var article = document.getElementsByTagName('article')[0];
        article.style.opacity = '1';
    }
}
function colocarCarrinho(n) {
    var divCar = document.getElementsByClassName('area-carrinho')[0];
    if (divCar.getElementsByClassName('filme-carrinho')) {
        divCar.remove();
        var areaNova = document.createElement('div');
        areaNova.className = 'area-carrinho';
        document.getElementsByClassName('area-filme')[0].appendChild(areaNova);
    }
    var divCar1 = document.getElementsByClassName('area-carrinho')[0];
    for (var i = 0; i <= tam; i++) {
        var filmeAtual = carrinho.filmes[i];
        if (filmeAtual.getQuant() !== 0) {
            var filmeEscolhidoCar = document.createElement('div');
            filmeEscolhidoCar.className = "filme-carrinho";
            filmeEscolhidoCar.style.background = "url('" + filmeAtual.filmeEscolhido.getUrl() + "')";
            filmeEscolhidoCar.style.backgroundSize = '88px 89px';
            filmeEscolhidoCar.style.backgroundRepeat = 'no-repeat';
            filmeEscolhidoCar.style.borderBottom = '1px solid rgba(1, 1, 1, .5)';
            var info = "<section>\n            <p>Titulo: " + filmeAtual.filmeEscolhido.getNome() + "</p>\n            <p>Classifica\u00E7\u00E3o Et\u00E1ria: " + filmeAtual.filmeEscolhido.getIdade() + "</p>\n            <p>Quantidade: " + filmeAtual.getQuant() + "</p>\n            </section>\n            <aside>\n                <span>X</span>\n            </aside>";
            filmeEscolhidoCar.innerHTML = info;
            divCar1.appendChild(filmeEscolhidoCar);
        }
    }
}
function remove() {
    document.getElementsByTagName('aside')[0].onclick = apagaFilme1;
    document.getElementsByTagName('aside')[1].onclick = apagaFilme2;
}
function apagaFilme1() {
    filmeEsc1.remQuant();
    // colocarCarrinho(1);
}
function apagaFilme2() {
    filmeEsc2.remQuant();
    // colocarCarrinho(2);
}
function addFilme1() {
    filmeEsc1.addQuant();
    colocarCarrinho(1);
}
function addFilme2() {
    filmeEsc2.addQuant();
    colocarCarrinho(2);
}
function finalizaCompra() {
    var total = 0;
    for (var j = 0; j <= tam; j++) {
        var valor = (carrinho.filmes[j].getQuant() * 14);
        total += valor;
    }
    alert("Cada filme \u00E9 R$14.00\n\nO total foi R$" + total + ".00");
    window.location.reload();
}
function apagaCarrinhoTotal() {
    var divCar = document.getElementsByClassName('area-carrinho')[0];
    if (divCar.getElementsByClassName('filme-carrinho')) {
        divCar.remove();
        var areaNova = document.createElement('div');
        areaNova.className = 'area-carrinho';
        document.getElementsByClassName('area-filme')[0].appendChild(areaNova);
    }
    apagaFilme1();
    apagaFilme2();
}
window.onload = function carrega() {
    filmes();
    document.getElementsByTagName('div')[1].onclick = aparecerTela;
    // FINALIZAR COMPRA
    document.getElementsByTagName('button')[0].onclick = finalizaCompra;
    document.getElementsByTagName('button')[1].onclick = apagaCarrinhoTotal;
    // ADICIONAR no CARRINHO
    document.getElementsByTagName('button')[2].onclick = addFilme1;
    document.getElementsByTagName('button')[3].onclick = addFilme2;
    remove();
};
