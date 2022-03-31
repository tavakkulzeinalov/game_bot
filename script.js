'use strict';

const randomLuckyNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const start = 1;
const end = 5;
const randomNum = randomLuckyNum(start, end);
let attempts = 10;

function gameIsBot(randomNum) {
    while (true) {
        let randomUserNum = prompt('Угадай число от 1 до 100! У вас попыток ' + attempts);
        if (randomUserNum === null) {
            alert('Игра окончена!');
            break;
        }
        if (attempts === 1) {
            alert('Попытки закончились, хотите сыграть еще?');
            attempts = 10;
            gameIsBot(randomNum);
        }
        attempts--;
        const userNum = +randomUserNum;

        if (isNaN(userNum) || !isFinite(userNum) || userNum === '') {
            alert('Введи число!');
            attempts++;
            continue;
        }

        if (userNum < randomNum) {
            alert('Загаданное число больше! Осталось попыток: ' + attempts);
            continue;
        } else if (userNum > randomNum) {
            alert('Загаданное число меньше! Осталось попыток: ' + attempts);
            continue;
        } else if (userNum === randomNum) {
            alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            attempts = 10;
            gameIsBot(randomNum);
        }
    }
}
gameIsBot(randomNum);