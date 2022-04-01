'use strict';

const guessNumber = (attempts = 10) => {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    console.log(attempts);
    let minNumber = 1;
    let maxNumber = 100;
    let randomNum = randomInteger(minNumber, maxNumber);
    console.log(randomNum);

    if (attempts === 0) {
        alert('Попытки закончились');
        if (confirm('Хотите сыграть еще?')) {
            attempts = 10;
            guessNumber();
        } else {
            alert('Игра окончена, пока');
            return;
        }
    }
    const userNum = Number(prompt(`Введите число от ${minNumber} до ${maxNumber}. У Вас ${attempts} попыток`));
    if (userNum === null) {
        alert('Игра окончена!');
        return;
    }

    if (isNaN(userNum) || !isFinite(userNum) || userNum < 0 || userNum > maxNumber || userNum < minNumber || userNum === '' || userNum === ' ') {
        alert(`Введи число от ${minNumber} до ${maxNumber}`);
        return guessNumber(attempts);
    }

    if (userNum === randomNum) {
        alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (confirm('Начать новую игру?')) {
            return guessNumber();
        } else {
            alert('Игра окончена, пока!');
            return;
        }
    }
    if (userNum < randomNum) {
        alert('Загаданное число больше!');
        return guessNumber(--attempts);
    } else if (userNum > randomNum) {
        alert('Загаданное число меньше!');
        return guessNumber(--attempts);
    }
};

guessNumber();