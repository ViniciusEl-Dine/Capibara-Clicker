const capybara = document.querySelector(".capibaraIMG");
const btnUpgrades = document.querySelectorAll('.btnUpgrade');
const btnPowers = document.querySelectorAll('.btnPower');
var priceUpgrades = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
const limitaFotos = [0,0,0,0,0,0,0,0];
const divs = document.querySelectorAll('.capibarinhas_minion');
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
capybara.onclick = function() {
    pontos += pontosAoClicar;
    score.innerHTML = pontos;
    mostrarBotoesMelhoria();
}

/*
 * ---> Botões de melhoria
*/
btnUpgrades[0].onclick = function() {
    manipularPontos(0, priceUpgrades[0], 5, 1);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[1].onclick = function() {
    manipularPontos(1,  priceUpgrades[1], 50, 10);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[2].onclick = function() {
    manipularPontos(2,  priceUpgrades[2], 500, 100);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[3].onclick = function() {
    manipularPontos(3,  priceUpgrades[3], 5000, 1000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[4].onclick = function() {
    manipularPontos(4,  priceUpgrades[4], 50000, 10000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[5].onclick = function() {
    manipularPontos(5,  priceUpgrades[5], 500000, 100000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[6].onclick = function() {
    manipularPontos(6,  priceUpgrades[6], 5000000, 1000000);
    atualizarHTML(pontosPorSegundo);
}

btnUpgrades[7].onclick = function() {
    manipularPontos(7, priceUpgrades[7], 50000000, 10000000);
    atualizarHTML(pontosPorSegundo);
}

//Manipula os pontos de todos os outros botões de melhoria
function manipularPontos(index, precoUpgrade, valorSoma, valorSomaPontos, ) {
    
        if(this.pontos >= precoUpgrade){

            if(pontosPorSegundo == 0 && precoUpgrade == 100) {
                setInterval(() => {
                this.pontos += pontosPorSegundo,
                score.innerHTML = this.pontos}, 1000)
            }

            this.pontos -= precoUpgrade;
            score.innerHTML = this.pontos;
            precoUpgrade += valorSoma;
            priceUpgrades[index] = precoUpgrade;
            btnUpgrades[index].textContent = precoUpgrade; //Atualiza o texto com base no ponteiro e no preço da melhoria
            pontosPorSegundo += valorSomaPontos;
        
            if (limitaFotos[index]<10){
                limitaFotos[index]++;
            }

            adicionaImagem( divs[index], limitaFotos[index])

        }
}

function adicionaImagem(div, limitaFotos){
    if(limitaFotos<10) {
        const foto = document.createElement("foto");
        foto.innerHTML=`<img src="../assets/images/minion01.png"width="50px" heigth="50px" class="minions"/>`
        div.appendChild(foto);
        limitaFotos++;
        console.log(limitaFotos)
    }
}

function atualizarHTML() {
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
    if(pontos >= 1){
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

        function desconto(i){
            priceUpgrades[i] /=2;
            btnUpgrades[i].textContent = priceUpgrades[i];
        }

        desconto(0);
        desconto(1);
        desconto(2);
        desconto(3);
        desconto(4);
        desconto(5);
        desconto(6);
        desconto(7);

        btnPowers[7].setAttribute('disabled', '');
        btnPowers[7].textContent=('Comprado')
    }
})
