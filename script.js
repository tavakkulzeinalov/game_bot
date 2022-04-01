'use strict';

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

const minNumber = 1,
    maxNumber = 5;

const guessNumber = (attempts = 10, randomNum = randomInteger(minNumber, maxNumber)) => {

    if (attempts === 0) {
        alert('Попытки закончились');
        if (confirm('Хотите сыграть еще?')) {
            attempts = 10;
            guessNumber(randomNum);
        } else {
            alert('Игра окончена, пока');
            return;
        }
    }

    const userNum = Number(prompt(`Введите число от ${minNumber} до ${maxNumber}. У Вас ${attempts} попыток`));
    if (userNum === null || userNum === 0) {
        alert('Игра окончена!');
        return;
    }

    if (isNaN(userNum) || !isFinite(userNum) || userNum < 0 || userNum > maxNumber || userNum < minNumber || userNum === '' || userNum === ' ') {
        alert(`Введи число от ${minNumber} до ${maxNumber}`);
        return guessNumber(attempts, randomNum);
    }

    if (userNum === randomNum) {
        alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (confirm('Начать новую игру?')) {
            return guessNumber();
        } else {
            alert('Игра окончена, пока!');
            return;
        }
    } else {
        alert(`Загаданное число ${(userNum < randomNum ? 'меньше' : 'больше')}! Осталось попыток: ${attempts -1}`);
        return guessNumber(--attempts, randomNum);
    }
};

guessNumber();