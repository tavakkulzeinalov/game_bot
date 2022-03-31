'use strict';

const randomLuckyNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const start = 1;
const end = 100;
const randomNum = randomLuckyNum(start, end);
let attempts = 10;
let us1;


function gameIsBot(randomNum) {
    while (true) {
        let randomUserNum = prompt('Угадай число от 1 до 100! У вас попыток ' + attempts);
        if (randomUserNum === null) {
            alert('Игра окончена!');
            break;
        }
        if (attempts === 1) {
            us1 = confirm('Попытки закончились, хотите сыграть еще?');
            attempts = 10;
            gameIsBot(randomNum);
            break;
        }
        attempts--;
        if (us1 === false) {
            alert('Игра окончена, пока!');
            return false;
        }
        const userNum = +randomUserNum;

        if (isNaN(userNum) || !isFinite(userNum)) {
            attempts++;
            alert('Введи число!');
            continue;
        }

        if (userNum < randomNum) {
            alert('Загаданное число больше! Осталось попыток: ' + attempts);
            continue;
        } else if (userNum > randomNum) {
            alert('Загаданное число меньше! Осталось попыток: ' + attempts);
            continue;
        } else if (userNum === randomNum) {
            confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            attempts = 10;
            gameIsBot(randomNum);
        }
    }
}
gameIsBot(randomNum);
console.log(randomNum);