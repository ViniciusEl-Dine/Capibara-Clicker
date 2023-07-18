const capybara = document.querySelector(".capybaraIMG");
const btnScoreIncrementation = document.querySelectorAll('.btnScoreIncrementation'); //Anteriormente declarada como "btnUpgrades"
const btnUpgrades = document.querySelectorAll('.btnUpgrade'); //Anteriormente declarada como "btnPowers"
const divs = document.querySelectorAll('.capibarinhas_minion');
const ps = document.querySelector(".ps")
var score = document.querySelector(".pontos")
var priceUpgrades = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
const limitaFotos = [0,0,0,0,0,0,0,0];
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
    particle.style.top = y + "px";
    capybaraCLicks.appendChild(particle);
    setTimeout(() => {
        capybaraCLicks.removeChild(particle);
    }, 1000);
};

capybara.addEventListener("click", (e) =>{
    createParticle(e.clientX, e.clientY)
});

/* --> Função de clique inicial */
let inicializado = false;
capybara.onclick = function() {
    pontuacao += pontosAoClicar;
    score.innerHTML = pontuacao;
    if(!inicializado || pontuacao >= 100) {
        atualizarBotoesMelhoria()}
    inicializado = true;
}

/* --> Botões de melhorias */
btnScoreIncrementation[0].onclick = function() {
    atualizarPontuacao(0, priceUpgrades[0], 5, 1);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[1].onclick = function() {
    atualizarPontuacao(1,  priceUpgrades[1], 50, 10);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[2].onclick = function() {
    atualizarPontuacao(2,  priceUpgrades[2], 500, 100);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[3].onclick = function() {
    atualizarPontuacao(3,  priceUpgrades[3], 5000, 1000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[4].onclick = function() {
    atualizarPontuacao(4,  priceUpgrades[4], 50000, 10000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[5].onclick = function() {
    atualizarPontuacao(5,  priceUpgrades[5], 500000, 100000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[6].onclick = function() {
    atualizarPontuacao(6,  priceUpgrades[6], 5000000, 1000000);
    atualizarHTML(pontosPorSegundo);
}

btnScoreIncrementation[7].onclick = function() {
    atualizarPontuacao(7, priceUpgrades[7], 50000000, 10000000);
    atualizarHTML(pontosPorSegundo);
}

//Atualiza os pontos com base no index passado como parâmetro ao clicar nos botões de incrementação
function atualizarPontuacao(index, priceUpgrade, valorSoma, valorSomaPontos) {  
    if(pontuacao >= priceUpgrade){
        if(pontosPorSegundo == 0 && priceUpgrade == 100) {
            setInterval(() => {
            pontuacao += pontosPorSegundo,
            score.innerHTML = pontuacao,
            atualizarBotoesMelhoria()}, 1000);
        }
        pontuacao -= priceUpgrade;
        score.innerHTML = pontuacao;
        priceUpgrade += valorSoma;
        priceUpgrades[index] = priceUpgrade;
        btnScoreIncrementation[index].textContent = priceUpgrade; //Atualiza o texto com base no ponteiro e no preço da melhoria
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

function atualizarBotoesMelhoria() { //AVISO: Função refatorada. Verificar desempenho e/ou surgimento de bugs
    for(let i = 0; i <= btnScoreIncrementation.length; i++) {
        if(pontuacao >= priceUpgrades[i]) {
            btnScoreIncrementation[i].textContent = priceUpgrades[i];
            btnScoreIncrementation[i].setAttribute('class', 'btnScoreIncrementationOn');
        }
    }
}

btnUpgrades[0].onclick = function() {
    if(pontuacao >= 1){
        btnUpgrades[0].setAttribute('disabled', '');
        btnUpgrades[0].textContent=('Comprado');
        pontosPorSegundo *= 2;
        atualizarHTML(pontosPorSegundo);
    }
}

btnUpgrades[1].onclick = function() {
    let priceUpgradeTemp = 1; //Anteriormente declarada como "precoPower2"
    if(pontuacao >= priceUpgradeTemp && pontosAoClicar < 10){
        pontuacao -= priceUpgradeTemp;
        btnUpgrades[1] += 1;
        score.innerHTML = pontuacao;
        pontosAoClicar++
    }
    if(pontosAoClicar >= 10){
        btnUpgrades[1].setAttribute('disabled', '');
        btnUpgrades[1].textContent=('Comprado')
    }
}

btnUpgrades[7].onclick = function() {
    if(pontuacao >= 5000){
        btnUpgrades[7].setAttribute('disabled', '');
        pontuacao -= 5000;
        score.innerHTML = pontuacao;
        function desconto(i) {
            priceUpgrades[i] /= 2;
            btnScoreIncrementation[i].textContent = priceUpgrades[i];
        }
        for(let i = 0; i <= 7; i++) {
            desconto(i);
        }
        btnUpgrades[7].setAttribute('disabled', '');
        btnUpgrades[7].textContent=('Comprado')
    }
}
