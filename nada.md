function adicionaImagem(div, precoUpgrade, limitaFotos){
    if(precoUpgrade <= limitaFotos) {
        const foto = document.createElement("foto");
        foto.innerHTML=`<img src="../assets/images/minion01.png"width="50px" heigth="50px" class="minions"/>`
        div.appendChild(foto);
    }
}

adicionaImagem( divs[index], priceUpgrades[index], limitaFotos[index])