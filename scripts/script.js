const capybara = document.querySelector(".capybaraIMG");
const btnScoreIncrementation = document.querySelectorAll('.btnScoreIncrementation'); //Anteriormente declarada como "btnUpgrades"
const btnUpgrades = document.querySelectorAll('.btnUpgrade'); //Anteriormente declarada como "btnPowers"
var priceUpgrades = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
const limitaFotos = [0,0,0,0,0,0,0,0];
const divs = document.querySelectorAll('.capibarinhas_minion');
const ps = document.querySelector(".ps")
var score = document.querySelector(".pontos")
var pontuacao = 0; //Anteriormente declarada como "pontos"
var pontosPorSegundo = 0;
var pontosAoClicar = 1

/* --> Cria particulas de clique */
const createParticle = (x,y) =>{
    const capybaraCLicks = document.querySelector(".capybara");
    const particle = document.createElement("img");
    particle.setAttribute("src","../assets/images/IconHeart.png");
    particle.setAttribute("class","capybara-particle");
    particle.style.left = x + "px";
    particle.style.top = (y/2) + "px";
    capybaraCLicks.appendChild(particle);
    setTimeout(() => {
        capybaraCLicks.removeChild(particle);
    }, 1000);
};

capybara.addEventListener("click", (e) =>{
    createParticle(e.clientX, e.clientY)
});

/* --> Função de clique inicial */
capybara.onclick = function() {
    pontuacao += pontosAoClicar;
    score.innerHTML = pontuacao;
    atualizarBotoesMelhoria();
}

/* --> Botões de melhorias */
btnScoreIncrementation[0].onclick = function() {
    manipularPontos(0, priceUpgrades[0], 5, 1);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[1].onclick = function() {
    manipularPontos(1,  priceUpgrades[1], 50, 10);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[2].onclick = function() {
    manipularPontos(2,  priceUpgrades[2], 500, 100);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[3].onclick = function() {
    manipularPontos(3,  priceUpgrades[3], 5000, 1000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[4].onclick = function() {
    manipularPontos(4,  priceUpgrades[4], 50000, 10000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[5].onclick = function() {
    manipularPontos(5,  priceUpgrades[5], 500000, 100000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[6].onclick = function() {
    manipularPontos(6,  priceUpgrades[6], 5000000, 1000000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[7].onclick = function() {
    manipularPontos(7, priceUpgrades[7], 50000000, 10000000);
    atualizarHTML(pontosPorSegundo);
}

//Manipula os pontos de todos os outros botões de melhoria
function manipularPontos(index, precoUpgrade, valorSoma, valorSomaPontos) {  
    if(pontuacao >= precoUpgrade){
        if(pontosPorSegundo == 0 && precoUpgrade == 100) {
            setInterval(() => {
            pontuacao += pontosPorSegundo,
            score.innerHTML = pontuacao,
            atualizarBotoesMelhoria()}, 1000);
        }
        pontuacao -= precoUpgrade;
        score.innerHTML = pontuacao;
        precoUpgrade += valorSoma;
        priceUpgrades[index] = precoUpgrade;
        btnScoreIncrementation[index].textContent = precoUpgrade; //Atualiza o texto com base no ponteiro e no preço da melhoria
        pontosPorSegundo += valorSomaPontos;
        if (limitaFotos[index] < 10){
            limitaFotos[index]++;
        }
        adicionaImagem(divs[index], limitaFotos[index])
    }
}

function adicionaImagem(div, limitaFotos) {
    if(limitaFotos < 10) {
        const foto = document.createElement("foto");
        foto.innerHTML = `<img src="../assets/images/CapybaraMinion.png" class="minions"/>`;
        div.appendChild(foto);
        limitaFotos++;
    }
}

function atualizarHTML() {
    ps.innerHTML = `Pontos por segundo: ${pontosPorSegundo}`;
}

function atualizarBotoesMelhoria() {
    if(pontuacao >= 100) {
        btnScoreIncrementation[0].textContent = priceUpgrades[0];
        btnScoreIncrementation[0].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 1000) {
        btnScoreIncrementation[1].textContent = priceUpgrades[1];
        btnScoreIncrementation[1].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 10000) {
        btnScoreIncrementation[2].textContent = priceUpgrades[2];
        btnScoreIncrementation[2].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 100000) {
        btnScoreIncrementation[3].textContent = priceUpgrades[3];
        btnScoreIncrementation[3].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 1000000) {
        btnScoreIncrementation[4].textContent = priceUpgrades[4];
        btnScoreIncrementation[4].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 10000000) {
        btnScoreIncrementation[5].textContent = priceUpgrades[5];
        btnScoreIncrementation[5].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 100000000) {
        btnScoreIncrementation[6].textContent = priceUpgrades[6];
        btnScoreIncrementation[6].setAttribute('class', 'btnScoreIncrementationOn');
    }
    if(pontuacao >= 1000000000) {
        btnScoreIncrementation[7].textContent = priceUpgrades[7];
        btnScoreIncrementation[7].setAttribute('class', 'btnScoreIncrementationOn');
    }
}

btnUpgrades[0].addEventListener("click" ,() => {
    if(pontuacao >= 1){
        btnUpgrades[0].setAttribute('disabled', '');
        btnUpgrades[0].textContent=('Comprado');
        pontosPorSegundo *= 2;
        ps.innerHTML = `Pontos por segundo: ${pontosPorSegundo}`
    }
})

var precoPower2 = 1;
btnUpgrades[1].addEventListener("click",() => {
    if(pontuacao >= precoPower2 && pontosAoClicar < 10){
        pontuacao -= precoPower2;
        btnUpgrades[1] += 1;
        score.innerHTML = pontuacao;
        pontosAoClicar++
    }
    
    if(pontosAoClicar >= 10){
        btnUpgrades[1].setAttribute('disabled', '');
        btnUpgrades[1].textContent=('Comprado')
    }
})

btnUpgrades[7].addEventListener("click", () => {
    if(pontuacao >= 5000){
        btnUpgrades[7].setAttribute('disabled', '');
        pontuacao -= 5000;
        score.innerHTML = pontuacao;
        function desconto(i) {
            priceUpgrades[i] /= 2;
            btnScoreIncrementation[i].textContent = priceUpgrades[i];
        }
        desconto(0);
        desconto(1);
        desconto(2);
        desconto(3);
        desconto(4);
        desconto(5);
        desconto(6);
        desconto(7);
        btnUpgrades[7].setAttribute('disabled', '');
        btnUpgrades[7].textContent=('Comprado')
    }
})
