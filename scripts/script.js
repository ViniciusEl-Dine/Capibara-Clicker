const capibara = document.querySelector(".capibaraIMG");

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

capibara.addEventListener("click", (e) =>{
    createParticle(e.clientX,e.clientY)
});

const power1 = document.querySelector("#power1")
const power2 = document.querySelector("#power2")
const power3 = document.querySelector("#power3")
const power4 = document.querySelector("#power4")
const power5 = document.querySelector("#power5")
const power6 = document.querySelector("#power6")
const power7 = document.querySelector("#power7")
const power8 = document.querySelector("#power8")

const powerUp1 = document.querySelector("#powerUP1");
const powerUp2 = document.querySelector("#powerUP2");
const powerUp3 = document.querySelector("#powerUP3");
const powerUp4 = document.querySelector("#powerUP4");
const powerUp5 = document.querySelector("#powerUP5");
const powerUp6 = document.querySelector("#powerUP6");
const powerUp7 = document.querySelector("#powerUP7");
const powerUp8 = document.querySelector("#powerUP8");

const divCap1 = document.querySelector("#minion1");
const divCap2 = document.querySelector("#minion2");
const divCap3 = document.querySelector("#minion3");
const divCap4 = document.querySelector("#minion4");
const divCap5 = document.querySelector("#minion5");
const divCap6 = document.querySelector("#minion6");
const divCap7 = document.querySelector("#minion7");
const divCap8 = document.querySelector("#minion8");

var precoUp1 = 100;
var precoUp2 = 1000;
var precoUp3 = 10000;
var precoUp4 = 100000;
var precoUp5 = 1000000;
var precoUp6 = 10000000;
var precoUp7 = 100000000;
var precoUp8 = 1000000000;

const capivara = document.querySelector("#capibaraIMG");
var score = document.querySelector(".pontos")
const ps = document.querySelector(".ps")
var pontos = 0;
var pontosPorSegundo = 0;

var pontosAoClicar = 1;
capivara.addEventListener("click", () => {
    pontos += pontosAoClicar;
    score.innerHTML = pontos;
    console.log(pontos)

    if (pontos >= 100){
        powerUp1.textContent = precoUp1;
        powerUP1.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 1000){
        powerUp2.textContent = precoUp2;
        powerUP2.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 10000){
        powerUp3.textContent = precoUp3;
        powerUP3.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 100000){
        powerUp4.textContent = precoUp4;
        powerUP4.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 1000000){
        powerUp5.textContent = precoUp5;
        powerUP5.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 10000000){
        powerUp6.textContent = precoUp6;
        powerUP6.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 100000000){
        powerUp7.textContent = precoUp7;
        powerUP7.setAttribute('class', 'buttonUpgradeOn');
    }

    if (pontos >= 1000000000){
        powerUp8.textContent = precoUp8;
        powerUP8.setAttribute('class', 'buttonUpgradeOn');
    }
})

powerUp1.addEventListener("click", () => {
    if(pontos >= precoUp1){
        pontos -= precoUp1;
        score.innerHTML=pontos
        precoUp1 += 50;
        powerUp1.textContent = precoUp1;

        ps.innerHTML = `PS: ${pontosPorSegundo}`
        if(pontosPorSegundo == 0){
            setInterval(() => {
            pontos += pontosPorSegundo,
            score.innerHTML = pontos}, 1000)
        }
        pontosPorSegundo++;

        ps.innerHTML = `PS: ${pontosPorSegundo}`
        if(precoUp1 <= 600){
            const foto1 = document.createElement("foto1");
            foto1.innerHTML=`<img src="../assets/images/IconHeart.png" class="minions" />`
            divCap1.appendChild(foto1);
        }
    }})

powerUp2.addEventListener("click", () => {
    if(pontos >= precoUp2){
        pontos -= precoUp2;
        score.innerHTML = pontos;
        precoUp2 += 500;
        powerUp2.textContent = precoUp2;

        pontosPorSegundo += 10;
        ps.innerHTML = `PS: ${pontosPorSegundo}`

        if(precoUp1 <= 6000){
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML = `<img src="../assets/images/IconHeart.png" class="minions"/>`
            divCap2.appendChild(foto1);
        }
    }})


    powerUp3.addEventListener("click", () => {
        if(pontos >= precoUp3){
        pontos -= precoUp3;
        score.innerHTML = pontos
        precoUp3 += 5000;
        powerUp3.textContent = precoUp3;

        pontosPorSegundo += 100;
        ps.innerHTML = `PS: ${pontosPorSegundo}`
    
        if(precoUp1 <= 60000){
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML = `<img src="../assets/images/IconHeart.png" class="minions"/>`
            divCap3.appendChild(foto1);
        }
    }})

    powerUp4.addEventListener("click", () => {
        if(pontos >= precoUp4){
            pontos -= precoUp4;
            score.innerHTML = pontos
            precoUp4 += 50000;
            powerUp4.textContent = precoUp4;
        
            pontosPorSegundo += 1000;
            ps.innerHTML = `PS: ${pontosPorSegundo}`
        
            if(precoUp1 <= 600000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"/>`
                document.body.appendChild(foto1);
            }
        }})
    
    powerUp5.addEventListener("click", () => {
        if(pontos >= precoUp5){
            pontos -= precoUp5;
            score.innerHTML = pontos
            precoUp5 += 500000;
            powerUp5.textContent = precoUp5;
        
            pontosPorSegundo += 10000;
            ps.innerHTML = `PS: ${pontosPorSegundo}`

            if(precoUp1 <= 6000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML = `<img src="img/capi2.png" width="50px" heigth="50px"/>`
                document.body.appendChild(foto1);
            }
        }})

    powerUp6.addEventListener("click", () => {
        if(pontos >= precoUp6){
            pontos -= precoUp6;
            score.innerHTML = pontos
            precoUp6 += 5000000;
            powerUp6.textContent = precoUp6;
        
            pontosPorSegundo += 100000;
            ps.innerHTML=`PS: ${pontosPorSegundo}`
        
            if(precoUp1 <= 60000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"/>`
                document.body.appendChild(foto1);
            }
        }})

    powerUp7.addEventListener("click", () => {
        if(pontos >= precoUp7){
            pontos -= precoUp7;
            score.innerHTML = pontos
            precoUp7 += 50000000;
            powerUp7.textContent = precoUp7;
        
            pontosPorSegundo += 1000000;
            ps.innerHTML = `PS: ${pontosPorSegundo}`
        
            if(precoUp1<=600000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML = `<img src="img/capi2.png" width="50px" heigth="50px"/>`
                document.body.appendChild(foto1);
            }
        }})

    powerUp8.addEventListener("click", () => {
        if(pontos >= precoUp8){
            pontos -= precoUp8;
            score.innerHTML = pontos
            precoUp8 += 500000000;
            powerUp8.textContent = precoUp8;
        
            pontosPorSegundo += 10000000;
            ps.innerHTML = `PS: ${pontosPorSegundo}`
        
            if(precoUp1 <= 6000000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML = `<img src="img/capi2.png" width="50px" heigth="50px"/>`
                document.body.appendChild(foto1);
            }
        }})

    power1.addEventListener("click" ,() => {
        if(pontos > 0){
            power1.setAttribute('disabled', '');
            power1.textContent=('Comprado');
            pontosPorSegundo *= 2;
            ps.innerHTML = `PS: ${pontosPorSegundo}`
        }
    })

    var precoPower2 = 1;
    power2.addEventListener("click",() => {
        if(pontos >= precoPower2 && pontosAoClicar < 10){
            pontos -= precoPower2;
            precoPower2 += 1;
            score.innerHTML = pontos;
            pontosAoClicar++
        }

        if(pontosAoClicar >= 10){
            power2.setAttribute('disabled', '');
            power2.textContent=('Comprado')
        }
    })

    power8.addEventListener("click", () => {
        if(pontos >= 5000){
            power8.setAttribute('disabled', '');

            pontos -= 5000;
            score.innerHTML = pontos
            
            precoUp1 /= 2;
            powerUp1.textContent = precoUp1;

            precoUp2 /= 2;
            powerUp2.textContent = precoUp2;

            precoUp3 /= 2;
            powerUp3.textContent = precoUp3;

            precoUp4 /= 2;
            powerUp4.textContent = precoUp4;

            precoUp5 /= 2;
            powerUp5.textContent = precoUp5;

            precoUp6 /= 2;
            powerUp6.textContent = precoUp6;

            precoUp7 /= 2;
            powerUp7.textContent = precoUp7;

            precoUp8 /= 2;
            powerUp8.textContent = precoUp8;

            power8.setAttribute('disabled', '');
            power8.textContent=('Comprado')
        }
    })
