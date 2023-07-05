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