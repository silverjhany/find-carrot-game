const field = document.querySelector('.field');
const game_field = document.querySelector('.game_field');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const fieldX = game_field.getBoundingClientRect().x - 80;
const fieldY = game_field.getBoundingClientRect().y - 80;
const fieldWidth = game_field.getBoundingClientRect().width;
const fieldHeight = game_field.getBoundingClientRect().height;

function gameStart() {
    timer.innerHTML = '0:10';
    score.innerHTML = '10';

}

function setCarrot() {
    const num = 10;
    for(let i = 1; i <= num; i++) {
        const position = getRandomPosition();
        console.log(position);
        
        const positionX = position.randomX;
        const positionY = position.randomY;

        const carrot = document.createElement('img');

        carrot.setAttribute('class', 'carrot' + i);
        carrot.setAttribute('src', 'img/carrot.png');
       // carrot.style.transform = `translate(${positionX}px, ${positionY}px)`;
        carrot.style.position = 'absolute';

        carrot.style.left = `${positionX}px`;
        carrot.style.top = `${positionY}px`;

         game_field.append(carrot);
    }
}


function setBug() {
    const num = 3;
    for(let i = 1; i <= num; i++) {
        const position = getRandomPosition();
        console.log(position);
        
        const positionX = position.randomX;
        const positionY = position.randomY;

        const bug = document.createElement('img');

        bug.setAttribute('class', 'bug' + i);
        bug.setAttribute('src', 'img/bug.png');
        bug.style.position = 'absolute';

        bug.style.left = `${positionX}px`;
        bug.style.top = `${positionY}px`;

        game_field.append(bug);
    }
}

function getRandomPosition() {
    const xMax = Math.floor((fieldX + fieldWidth));
    console.log(xMax);
    const xMin = Math.ceil(fieldX) + 80;
    const yMax = Math.floor((fieldY + fieldHeight));
    const yMin = Math.ceil(fieldY) + 80;

    const randomX = Math.floor(Math.random() * (xMax - xMin)) + xMin;
    const randomY = Math.floor(Math.random() * (yMax - yMin)) + yMin;

    //console.log(`x : ${randomX}, y : ${randomY}`);

    return {randomX, randomY};
}

start.addEventListener('click', (e) => { 
    game_field.innerHTML = '';
    setCarrot();
    setBug();
});