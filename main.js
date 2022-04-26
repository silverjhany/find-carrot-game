const field = document.querySelector('.field');
const game_field = document.querySelector('.game_field');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const fieldX = game_field.getBoundingClientRect().x;
const fieldY = game_field.getBoundingClientRect().y;
const fieldWidth = game_field.getBoundingClientRect().width;
const fieldHeight = game_field.getBoundingClientRect().height;

function gameStart() {
    timer.innerHTML = '0:10';
    score.innerHTML = '10';

}

function setMonster() {
    const num = 10;

    for(let i = 1; i <= 1; i++) {
        const position = getRandomPosition();
        console.log(position);

        const carrot = document.querySelector('.carrot1');
        carrot.style.transform = `translateX(${position.randomX}px)`;
        carrot.style.transform = `translateY(${position.randomY}px)`;
    }
    
    
}

function getRandomPosition() {
    const xMax = Math.floor((fieldX + fieldWidth));
    const xMin = Math.ceil(fieldX);
    const yMax = Math.floor((fieldY + fieldHeight));
    const yMin = Math.ceil(fieldY);

    const randomX = Math.floor(Math.random() * (xMax - xMin)) + xMin;
    const randomY = Math.floor(Math.random() * (yMax - yMin)) + yMin;

    //console.log(`x : ${randomX}, y : ${randomY}`);

    return {randomX, randomY};
}

start.addEventListener('click', (e) => { 
    setMonster();
});