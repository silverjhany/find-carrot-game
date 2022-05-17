const field = document.querySelector('.field');
const game_field = document.querySelector('.game_field');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const fieldX = game_field.getBoundingClientRect().x - 80;
const fieldY = game_field.getBoundingClientRect().y - 80;
const fieldWidth = game_field.getBoundingClientRect().width;
const fieldHeight = game_field.getBoundingClientRect().height;
const resultBox = document.querySelector('.result_box');
const replayBtn = document.querySelector('.replay_btn');

function gameStart() {
    let seconds = 10;
    let secondsTxt;
    timer.innerHTML = '0:10';
    score.innerHTML = '10';

    GAMETIMER = setInterval(function() {
        
        //  시간초과 시 게임오버 !
        if(seconds === 1) {
            clearInterval(GAMETIMER);
            resultBox.style.display = 'block';
            resultBox.lastElementChild.innerHTML = 'TIME OVER OTL...';
        }
        
        
        --seconds;

        secondsTxt = ('00' + seconds).slice(-2);
        timer.innerHTML = '0:' + secondsTxt;
        
    }, 1000);
}

function setCarrot() {
    const num = 10;
    
    for(let i = 1; i <= num; i++) {
        const position = getRandomPosition();
        
        const positionX = position.randomX;
        const positionY = position.randomY;

        const carrot = document.createElement('img');

        carrot.setAttribute('id', 'carrot' + i);
        carrot.setAttribute('class', 'carrot');
        carrot.setAttribute('src', 'img/carrot.png');
        carrot.style.position = 'absolute';
        carrot.style.left = `${positionX}px`;
        carrot.style.top = `${positionY}px`;

        carrot.addEventListener('click', (e) => {
            const clickCarrot = document.getElementById(e.target.id);
            clickCarrot.remove();

            let clickScore = Number(score.innerHTML);
            score.innerHTML = --clickScore;
            if(clickScore === 0) {
                clearInterval(GAMETIMER);
                
                resultBox.style.display = 'block';
                resultBox.lastElementChild.innerHTML = 'YOU WON ~!';
            }
        });

        game_field.append(carrot);
    }
}


function setBug() {
    const num = 5;
    for(let i = 1; i <= num; i++) {
        const position = getRandomPosition();
        console.log(position);
        
        const positionX = position.randomX;
        const positionY = position.randomY;

        const bug = document.createElement('img');

        bug.setAttribute('class', 'bug');
        bug.setAttribute('src', 'img/bug.png');
        bug.style.position = 'absolute';

        bug.style.left = `${positionX}px`;
        bug.style.top = `${positionY}px`;

        bug.addEventListener('click', (e) => {
            const clickBug = document.getElementById(e.target.id);
            clearInterval(GAMETIMER);
            resultBox.style.display = 'block';
            resultBox.lastElementChild.innerHTML = 'OMG YOU LOOSE...';
        });

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

    return {randomX, randomY};
}

start.addEventListener('click', (e) => { 
    game_field.innerHTML = '';
    setCarrot();
    setBug();
    gameStart();
});

replayBtn.addEventListener('click', (e) => {
    console.log("ektlgdsf");
});