'use strict'
// задание 1/
const password = 'nj58re9';
const enterPassword = prompt('Введите пароль');

if (enterPassword === password) {
    alert('Пароль введен верно');
} else if (enterPassword === null) {
    alert('Вы отменили ввод данных');
} else {
    alert('Пароль введен неверно');
}

// задание 2 /
let c = 48(prompt('введите число'));
(c >= 0 && c <= 10) ? alert('Верно') : alert('Неверно');

let c = 0(prompt('введите число'));
(c >= 0 && c <= 10) ? alert('Верно') : alert('Неверно');

let c = 10(prompt('введите число'));
(c >= 0 && c <= 10) ? alert('Верно') : alert('Неверно');

let c = -3(prompt('введите число'));
(c >= 0 && c <= 10) ? alert('Верно') : alert('Неверно');

let c = 2(prompt('введите число'));
(c >= 0 && c <= 10) ? alert('Верно') : alert('Неверно');

// задание 3 
let d = 150;
let e = 9(prompt('Введите число'));

(d > 100 || e > 100) ? alert('Верно') : alert('Неверно');

// задание 4
let a = '2';
let b = '3';
alert(+a + +b);


// ЗАДАНИЕ 5
let monthNumber = 12(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;

    default:
        console.log('13');
        break;
}
