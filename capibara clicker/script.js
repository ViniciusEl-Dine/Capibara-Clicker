const capibara = document.querySelector(".capibaraIMG");

const createParticle = (x,y) =>{
    const capibaraCLicks = document.querySelector(".capibara");

    const particle = document.createElement("img");
    particle.setAttribute("src","./img/s2.png");
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

//hh
const power1 = document.querySelector("#power1")

const powerUp1 = document.querySelector("#powerUP1");
const powerUp2 = document.querySelector("#powerUP2");
const powerUp3 = document.querySelector("#powerUP3");
const powerUp4 = document.querySelector("#powerUP4");
const powerUp5 = document.querySelector("#powerUP5");
const powerUp6 = document.querySelector("#powerUP6");
const powerUp7 = document.querySelector("#powerUP7");
const powerUp8 = document.querySelector("#powerUP8");

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
var pontosPorSegundo=0;

capivara.addEventListener("click", () => {
    pontos+=100;
    score.innerHTML=pontos;
    console.log(pontos)
})


powerUp1.addEventListener("click", () => {
    if(pontos>=precoUp1){
        pontos-=precoUp1;
        score.innerHTML=pontos
        precoUp1+=50;

        ps.innerHTML=`PS: ${pontosPorSegundo}`
        if(pontosPorSegundo==0){
            setInterval(() => {
            pontos+=pontosPorSegundo,
            score.innerHTML=pontos},
            1000)
         }
         pontosPorSegundo++;

        ps.innerHTML=`PS: ${pontosPorSegundo}`
        if(precoUp1<=60){
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
            document.body.appendChild(foto1);
        }
    }})

powerUp2.addEventListener("click", () => {
    if(pontos>=precoUp2){
        pontos-=precoUp2;
        score.innerHTML=pontos
        precoUp2+=50;
    
        pontosPorSegundo+=10;
        ps.innerHTML=`PS: ${pontosPorSegundo}`

        if(precoUp1<=600){
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
            document.body.appendChild(foto1);
        }
    }})


powerUp3.addEventListener("click", () => {
    if(pontos>=precoUp3){
        pontos-=precoUp3;
        score.innerHTML=pontos
        precoUp3+=500;
    
        pontosPorSegundo+=100;
        ps.innerHTML=`PS: ${pontosPorSegundo}`
    
        if(precoUp1<=6000){
            const foto1 = document.createElement("fotoUpgrade2");
            foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
            document.body.appendChild(foto1);
        }
    }})

    powerUp4.addEventListener("click", () => {
        if(pontos>=precoUp4){
            pontos-=precoUp4;
            score.innerHTML=pontos
            precoUp4+=5000;
            //precoUp1texto.textContent=`Preço do upgrade 2: ${precoUp2}`
        
            pontosPorSegundo+=1000;
            ps.innerHTML=`PS: ${pontosPorSegundo}`
        
            if(precoUp1<=60000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
                document.body.appendChild(foto1);
            }
        }})
    
    powerUp5.addEventListener("click", () => {
        if(pontos>=precoUp5){
            pontos-=precoUp5;
            score.innerHTML=pontos
            precoUp5+=50000;
            //precoUp1texto.textContent=`Preço do upgrade 2: ${precoUp2}`
        
            pontosPorSegundo+=10000;
            ps.innerHTML=`PS: ${pontosPorSegundo}`

            if(precoUp1<=600000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
                document.body.appendChild(foto1);
            }
        }})

    powerUp6.addEventListener("click", () => {
        if(pontos>=precoUp6){
            pontos-=precoUp6;
            score.innerHTML=pontos
            precoUp6+=500000;
            //precoUp1texto.textContent=`Preço do upgrade 2: ${precoUp2}`
        
            pontosPorSegundo+=100000;
            ps.innerHTML=`PS: ${pontosPorSegundo}`
        
            if(precoUp1<=6000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
                document.body.appendChild(foto1);
            }
        }})

    powerUp7.addEventListener("click", () => {
        if(pontos>=precoUp7){
            pontos-=precoUp7;
            score.innerHTML=pontos
            precoUp7+=5000000;
            //precoUp1texto.textContent=`Preço do upgrade 2: ${precoUp2}`
        
            pontosPorSegundo+=1000000;
            ps.innerHTML=`PS: ${pontosPorSegundo}`
        
            if(precoUp1<=60000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
                document.body.appendChild(foto1);
            }
        }})

    powerUp8.addEventListener("click", () => {
        if(pontos>=precoUp8){
            pontos-=precoUp8;
            score.innerHTML=pontos
            precoUp8+=50000000;
            //precoUp1texto.textContent=`Preço do upgrade 2: ${precoUp2}`
        
            pontosPorSegundo+=10000000;
            ps.innerHTML=`PS: ${pontosPorSegundo}`
        
            if(precoUp1<=600000000){
                const foto1 = document.createElement("fotoUpgrade2");
                foto1.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
                document.body.appendChild(foto1);
            }
        }})


    power1.addEventListener("click" ,() => {
        if(pontos>0){
            pontosPorSegundo*=2;
        }
        else{
            console.log
        }
    })
