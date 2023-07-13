const capivara = document.querySelector("#capibaraIMG");
const capybara = document.querySelector(".capibaraIMG");
const btnUpgrades = document.querySelectorAll('.btnUpgrade');
const btnPowers = document.querySelectorAll('.btnPower');
var priceUpgrades = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];

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

const ps = document.querySelector(".ps")
var score = document.querySelector(".pontos")
var pontos = 94;
var pontosPorSegundo = 0;
var pontosAoClicar = 1;

capivara.addEventListener("click", () => {
    for(let i = 0; i < btnUpgrades.length; i++) {
        btnUpgrades[i].addEventListener("click", () => {
            if(priceUpgrades[i] == 100) {
                if(pontos >= priceUpgrades[i]) {
                    especialManipularPontos(i, pontos, priceUpgrades[i], 50);
                    especialAtualizarHTML(pontosPorSegundo);
                    pontosPorSegundo++;
                    especialAtualizarHTML(pontosPorSegundo);
                if(priceUpgrades[i] <= 60) {
                    const foto1 = document.createElement("fotoUpgrade2");
                    foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"/>`
                     document.body.appendChild(foto1);
                    }
                }
            } else {
                if(priceUpgrades[i] == 1000) {manipularPontos(i, pontos, priceUpgrades[i], 500, 10); atualizarHTML(this.pontosPorSegundo);}
                if(priceUpgrades[i] == 10000) {manipularPontos(i, pontos, priceUpgrades[i], 5000, 100); atualizarHTML(this.pontosPorSegundo);}
                if(priceUpgrades[i] == 100000) {manipularPontos(i, pontos, priceUpgrades[i], 50000, 1000); atualizarHTML(this.pontosPorSegundo);}
                if(priceUpgrades[i] == 1000000) {manipularPontos(i, pontos, priceUpgrades[i], 500000, 10000); atualizarHTML(this.pontosPorSegundo);}
                if(priceUpgrades[i] == 10000000) {manipularPontos(i, pontos, priceUpgrades[i], 5000000, 100000); atualizarHTML(this.pontosPorSegundo);}
                if(priceUpgrades[i] == 100000000) {manipularPontos(i, pontos, priceUpgrades[i], 50000000, 1000000); atualizarHTML(this.pontosPorSegundo);}
                if(priceUpgrades[i] == 1000000000) {manipularPontos(i, pontos, priceUpgrades[i], 500000000, 10000000); atualizarHTML(this.pontosPorSegundo);}
            }
        })
    }
    mostrarBotoesMelhoria();
    //Manipula os pontos do botão de melhoria 01
    function especialManipularPontos(index, pontos, precoUpgrade, valor) {
        if(pontosPorSegundo == 0 && precoUpgrade == 100) {
            setInterval(() => {
            this.pontos += pontosPorSegundo,
            score.innerHTML = this.pontos}, 1000)
        }
        this.pontos -= precoUpgrade;
        score.innerHTML = this.pontos;
        precoUpgrade += valor;
        btnUpgrades[index].textContent = precoUpgrade; //Atualiza o texto com base no ponteiro e no preço da melhoria
    }

    function especialAtualizarHTML(pps) { //PPS significa Pontos Por Segundo
        ps.innerHTML = `Pontos por segundo: ${pps}`
    }

    //Manipula os pontos de todos os outros botões de melhoria
    function manipularPontos(index, pontos, precoUpgrade, valorSoma, valorSomaPontos) {
        if(this.pontos >= precoUpgrade){
            this.pontos -= precoUpgrade;
            score.innerHTML = this.pontos;
            precoUpgrade += valorSoma;
            precoUpgrade.textContent = precoUpgrade;
            pontosPorSegundo += valorSomaPontos;
        }
        /*if(precoUpgrade <= 60) {
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"/>`
            document.body.appendChild(foto1);
        }*/
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
    pontos += pontosAoClicar;
    score.innerHTML = pontos;
})

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
