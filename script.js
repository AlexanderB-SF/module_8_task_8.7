
let bgc = document.querySelector('.back');
let front = document.querySelector('.front');

let minValue, maxValue, minb, maxb;
const btnSucces = document.querySelector('#btnSucces');
let answerNumber;

// Форма ввода чисел
btnSucces.addEventListener('click', (e) => {
    minInp = document.querySelector('#min-value');
    maxInp = document.querySelector('#max-value');

    minValue = parseInt(minInp.value);
    maxValue = parseInt(maxInp.value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        console.log("не введено");
    }else {
        front.classList.add('front-active');
        bgc.classList.add('back-active');
    }

    if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
        if (Number.isNaN(minValue)) {
            minValue = -999;
        }
        if (Number.isNaN(maxValue)) {
            maxValue = 999;
        }
    }
    
    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;

    answerNumber  = Math.floor((minValue + maxValue) / 2);

    if (generatePhrase(answerNumber).length <= 20) {
        answerField.innerText = `${question[phrase()]}  ${generatePhrase(answerNumber)}`;
    } else {
        answerField.innerText = `${question[phrase()]} ${answerNumber }?`;
    }

    orderNumberField.innerText = orderNumber;
});

let orderNumber = 1;
let gameRun = true;

const question = ['Ты загадал:', 'Может быть это:', 'Хм, попробуем это:'];
const win = ['Ты меня не обманешь\n\u{1F913}', 'Я всегда угадываю\n\u{1F60E}', 'Это было круто!\n\u{1F918}'];

let phrase = function() {return Math.floor(Math.random() * 3);};

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


// Кнопка заново
document.getElementById('btnRetry').addEventListener('click', function (e) {
    orderNumber = 1;
    bgc.classList.remove('card-win', 'card-gover');
    minInp.value = '';
    maxInp.value = '';

    front.classList.remove('front-active');
    bgc.classList.remove('back-active');
    
    gameRun = true;
});

// Кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const answerPhrase = (phrase() === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            bgc.classList.add('card-gover');
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            if (generatePhrase(answerNumber).length <= 20) {
                answerField.innerText = `${question[phrase()]}  ${generatePhrase(answerNumber)}`;
            } else {
                answerField.innerText = `${question[phrase()]} ${answerNumber }?`;
            }
        }
    }
});

// Кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === answerNumber) {
            const answerPhrase = (phrase() === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            bgc.classList.add('card-gover');
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            if (generatePhrase(answerNumber).length <= 20) {
                answerField.innerText = `${question[phrase()]} ${generatePhrase(answerNumber)}`;
            } else {
                answerField.innerText = `${question[phrase()]} ${answerNumber }?`;
            }
        }
    }
});

// Кнопка верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        bgc.classList.add('card-win');
        answerField.innerText = win[phrase()];
        gameRun = false;

    }
});

