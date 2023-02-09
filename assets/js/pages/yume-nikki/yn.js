// sounds

const gameCharacter = document.querySelector('.game-character');

const selectSound = document.getElementById("sel");
const clickSound = document.getElementById("click");
const closeSound = document.getElementById("close");

const madoSound1 = document.getElementById("mado1");
const madoSound2 = document.getElementById("mado2");


gameCharacter.addEventListener('click', (event) => {
    let randomValue;
    randomValue = Math.floor(Math.random() * 2);

    if(randomValue == 0){
        madoSound1.play();
    } else {
        madoSound2.play();
    }
});

document.querySelectorAll("a").forEach(a => {
    a.addEventListener('mouseenter', (event) => {
        selectSound.currentTime = 0;
        selectSound.play();
    });

    a.addEventListener('click', (event) => {
        clickSound.play();
    });
});

document.querySelectorAll(".carousel img").forEach(img => {
    img.addEventListener('click', (event) => {
        selectSound.currentTime = 0;
        selectSound.play();
    });
});

document.querySelectorAll(".current-image").forEach(img => {
    img.addEventListener('click', (event) => {
        clickSound.play();
    });
});

document.querySelectorAll(".popup span").forEach(span => {
    span.addEventListener('click', (event) => {
        closeSound.play();
    });
});