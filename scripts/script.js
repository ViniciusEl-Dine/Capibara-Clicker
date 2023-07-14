const capivara = document.querySelector("#capibaraIMG");
const capybara = document.querySelector(".capibaraIMG");
const btnUpgrades = document.querySelectorAll('.btnUpgrade');
const btnPowers = document.querySelectorAll('.btnPower');
var priceUpgrades = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
const ps = document.querySelector(".ps")
var score = document.querySelector(".pontos")
var pontos = 0;
var pontosPorSegundo = 0;
var pontosAoClicar = 1;

/*
 * --> Cria particulas de clique
*/
const createParticle = (x,y) =>{
    const capibaraCLicks = document.querySelector(".capibara");
    const particle = document.createElement("img");
    particle.setAttribute("src","../assets/images/IconHeart.png");
    particle.setAttribute("class","capybara-particle");
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    capibaraCLicks.appendChild(particle);
    setTimeout(() => {
        capibaraCLicks.removeChild(particle);
    }, 1000);
};

capybara.addEventListener("click", (e) =>{
    createParticle(e.clientX, e.clientY)
});

/*
* --> Clicker de capivara
*/
capivara.onclick = function() {
    pontos += pontosAoClicar;
    score.innerHTML = pontos;
    mostrarBotoesMelhoria();
}

/*
 * ---> Botões de melhoria
*/
btnUpgrades[0].onclick = function() {
    especialManipularPontos(0, pontos, priceUpgrades[0], 50, null);
    especialAtualizarHTML(pontosPorSegundo);
}

btnUpgrades[1].onclick = function() {
    manipularPontos(1, pontos, priceUpgrades[1], 500, 10);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[2].onclick = function() {
    manipularPontos(2, pontos, priceUpgrades[2], 5000, 100);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[3].onclick = function() {
    manipularPontos(3, pontos, priceUpgrades[3], 500000, 1000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[4].onclick = function() {
    manipularPontos(4, pontos, priceUpgrades[4], 5000000, 10000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[5].onclick = function() {
    manipularPontos(5, pontos, priceUpgrades[5], 50000000, 100000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[6].onclick = function() {
    manipularPontos(6, pontos, priceUpgrades[6], 500000000, 1000000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[7].onclick = function() {
    manipularPontos(7, pontos, priceUpgrades[7], 5000000000, 10000000);
    atualizarHTML(pontosPorSegundo);
}

function especialManipularPontos(index, pontos, precoUpgrade, valor) {
    if(pontos >= precoUpgrade) {
        if(pontosPorSegundo == 0 && precoUpgrade == 100) {
            setInterval(() => {
            this.pontos += pontosPorSegundo,
            score.innerHTML = this.pontos}, 1000)
        }
        pontosPorSegundo++;
        this.pontos -= precoUpgrade;
        score.innerHTML = this.pontos;
        precoUpgrade += valor;
        priceUpgrades[index] = precoUpgrade;
        btnUpgrades[index].textContent = precoUpgrade; //Atualiza o texto com base no ponteiro e no preço da melhoria
    }
}

function especialAtualizarHTML(pps) { //PPS significa Pontos Por Segundo
    ps.innerHTML = `Pontos por segundo: ${pps}`
}

//Manipula os pontos de todos os outros botões de melhoria
function manipularPontos(index, pontos, precoUpgrade, valorSoma, valorSomaPontos) {
    if(pontos >= precoUpgrade) {
        if(this.pontos >= precoUpgrade){
            this.pontos -= precoUpgrade;
            score.innerHTML = this.pontos;
            precoUpgrade += valorSoma;
            priceUpgrades[index] = precoUpgrade;
            btnUpgrades[index].textContent = precoUpgrade; //Atualiza o texto com base no ponteiro e no preço da melhoria
            pontosPorSegundo += valorSomaPontos;
        }
        /*if(precoUpgrade <= 60) {
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"/>`
            document.body.appendChild(foto1);
        }*/
    }
}

function atualizarHTML(pps) {
    ps.innerHTML = `Pontos por segundo: ${pontosPorSegundo}`;
}

function mostrarBotoesMelhoria() {
    if(pontos >= 100) {
        btnUpgrades[0].textContent = priceUpgrades[0];
        btnUpgrades[0].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 1000) {
        btnUpgrades[1].textContent = priceUpgrades[1];
        btnUpgrades[1].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 10000) {
        btnUpgrades[2].textContent = priceUpgrades[2];
        btnUpgrades[2].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 100000) {
        btnUpgrades[3].textContent = priceUpgrades[3];
        btnUpgrades[3].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 1000000) {
        btnUpgrades[4].textContent = priceUpgrades[4];
        btnUpgrades[4].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 10000000) {
        btnUpgrades[5].textContent = priceUpgrades[5];
        btnUpgrades[5].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 100000000) {
        btnUpgrades[6].textContent = priceUpgrades[6];
        btnUpgrades[6].setAttribute('class', 'buttonUpgradeOn');
    }
    if(pontos >= 1000000000) {
        btnUpgrades[7].textContent = priceUpgrades[7];
        btnUpgrades[7].setAttribute('class', 'buttonUpgradeOn');
    }
}

btnPowers[0].addEventListener("click" ,() => {
    if(pontos > 0){
        btnPowers[0].setAttribute('disabled', '');
        btnPowers[0].textContent=('Comprado');
        pontosPorSegundo *= 2;
        ps.innerHTML = `Pontos por segundo: ${pontosPorSegundo}`
    }
})

var precoPower2 = 1;
btnPowers[1].addEventListener("click",() => {
    if(pontos >= precoPower2 && pontosAoClicar < 10){
        pontos -= precoPower2;
        btnPowers[1] += 1;
        score.innerHTML = pontos;
        pontosAoClicar++
    }

    if(pontosAoClicar >= 10){
        btnPowers[1].setAttribute('disabled', '');
        btnPowers[1].textContent=('Comprado')
    }
})

btnPowers[7].addEventListener("click", () => {
    if(pontos >= 5000){
        btnPowers[7].setAttribute('disabled', '');

        pontos -= 5000;
        score.innerHTML = pontos
        
        priceUpgrades[0] /= 2;
        btnPowers[0].textContent = priceUpgrades[0];

        priceUpgrades[1] /= 2;
        btnPowers[1].textContent = priceUpgrades[1];

        priceUpgrades[2] /= 2;
        btnPowers[0].textContent = priceUpgrades[2];

        priceUpgrades[3] /= 2;
        btnPowers[1].textContent = priceUpgrades[3];

        priceUpgrades[4] /= 2;
        btnPowers[0].textContent = priceUpgrades[4];

        priceUpgrades[5] /= 2;
        btnPowers[1].textContent = priceUpgrades[5];

        priceUpgrades[6] /= 2;
        btnPowers[0].textContent = priceUpgrades[6];

        priceUpgrades[7] /= 2;
        btnPowers[1].textContent = priceUpgrades[7];

        btnPowers[7].setAttribute('disabled', '');
        btnPowers[7].textContent=('Comprado')
    }
})
