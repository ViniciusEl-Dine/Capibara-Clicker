console.log("oi")

const botao = document.querySelector('#incrementar');
const placar = document.querySelector('#placar');
const pontosPorSegundoExibidos = document.querySelector('#pontosPorSegundo');

const upgrade1 = document.querySelector('.upgrade1');
const upgrade2 = document.querySelector('.upgrade2');
const upgrade3 = document.querySelector('.upgrade3');
const upgrade4 = document.querySelector('.upgrade4');
const upgrade5 = document.querySelector('.upgrade5');
const upgrade6 = document.querySelector('.upgrade6');
const upgrade7 = document.querySelector('.upgrade7');
const upgrade8 = document.querySelector('.upgrade8');
const upgrade9 = document.querySelector('.upgrade9');

const precoUp1texto = document.querySelector('#precoUp1');
const precoUp2texto = document.querySelector('#precoUp2');
const precoUp3texto = document.querySelector('#precoUp3');
const precoUp4texto = document.querySelector('#precoUp4');
const precoUp5texto = document.querySelector('#precoUp5');
const precoUp6texto = document.querySelector('#precoUp6');
const precoUp7texto = document.querySelector('#precoUp7');
const precoUp8texto = document.querySelector('#precoUp8');
const precoUp9texto = document.querySelector('#precoUp9');

var precoUp1 = 10;
var precoUp2 = 100;
var precoUp3 = 1000;
var precoUp4 = 10000;
var precoUp5 = 100000;
var precoUp6 = 1000000;
var precoUp7 = 10000000;
var precoUp8 = 100000000;
var precoUp9 = 1000000000;

var pontos = 0;
var pontosPorSegundo = 0

var placarAtualizado =`Seus pontos: `


botao.addEventListener("click", () => {
    pontos+=100000000000;
    placar.innerHTML=placarAtualizado+pontos;
    console.log(pontos)
})



upgrade1.addEventListener("click", () => {
    if(pontos>=precoUp1){
        pontos-=precoUp1;
        placar.innerHTML=`Seus pontos: ${pontos}`

        precoUp1+=5;
        precoUp1texto.textContent=`Preço do upgrade 1: ${precoUp1}`

        pontosPorSegundo++;
        pontosPorSegundoExibidos.innerHTML=`Pontos por segundo: ${pontosPorSegundo}`

    setInterval(() => {pontos ++, 
        placar.innerHTML=`Seus pontos: ${pontos}`}, 
        1000)
    if(precoUp1<=60){
        const foto = document.createElement("fotoUpgrade");
        foto.innerHTML=`<img width="50px" heigth="50px" src="img/capi.png" />`
        document.body.appendChild(foto);
    }

}})

upgrade2.addEventListener("click", () => {
    if(pontos>=precoUp2){
        pontos-=precoUp2;
        placar.innerHTML=`Seus pontos: ${pontos}`

        precoUp2+=50;
        precoUp2texto.textContent=`Preço do upgrade 2: ${precoUp2}`

        pontosPorSegundo+=10;
        pontosPorSegundoExibidos.innerHTML=`Pontos por segundo: ${pontosPorSegundo}`

    setInterval(() => {pontos+=10,
        placar.innerHTML=`Seus pontos: ${pontos}`}, 
        1000)

        if(precoUp2<=600){
            const foto2 = document.createElement("fotoUpgrade2");
            foto2.innerHTML=`<img src="img/capi2.png" width="50px" heigth="50px"  />`
            document.body.appendChild(foto2);
        }
    }})

upgrade3.addEventListener("click", () =>{
    if(pontos>=precoUp3){
        pontos-=precoUp3;
        placar.innerHTML=`Seus pontos: ${pontos}`

        precoUp3+=500;
        precoUp3texto.textContent=`Preço do upgrade 3: ${precoUp3}`

        pontosPorSegundo+=100;
        pontosPorSegundoExibidos.innerHTML=`Pontos por segundo: ${pontosPorSegundo}`

    setInterval(() => {pontos+=100,
        placar.innerHTML=`Seus pontos: ${pontos}`},
        1000)
    
    if(precoUp3<=6000){
        const foto3 = document.createElement("fotoUpgrade3");
        foto3.innerHTML=`<img src="img/capi3.jpg" width="50px" heigth="50px" />`
        document.body.appendChild(foto3);
    }
}})

upgrade4.addEventListener("click", () =>{
    if(pontos>=precoUp4){
        pontos-=precoUp4;
        placar.innerHTML=`Seus pontos: ${pontos}`

        precoUp4+=5000;
        precoUp4texto.textContent=`Preço do upgrade 4: ${precoUp4}`

        pontosPorSegundo+=1000;
        pontosPorSegundoExibidos.innerHTML=`Pontos por segundo: ${pontosPorSegundo}`

        setInterval(() => {pontos+=1000,
            placar.innerHTML=`Seus pontos: ${pontos}`},
            1000)

        if(precoUp4<=60000){
            const foto4 = document.createElement("fotoUpgrade3");
            foto4.innerHTML=`<img src="img/capi4.png" width="50px" heigth="50px" />`
            document.body.appendChild(foto4);
        }
    }
})



//calcular a quantidade de pontos por segundo