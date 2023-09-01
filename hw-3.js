//* Задание 1

// let password = 'пароль';
// let question = prompt('Введите пароль');
// if (question === password) {
//     alert('Пароль введен верно');
// }
// else {
//     alert('Пароль введен неправильно')
// }

//* Задание 2 без тернарного оператора

// let c = 3;
// if (c > 0 && c <10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//* Задание 2 с использованием тернарного оператора

// let c = 3;
// (c > 0 && c <10) ? console.log('Верно') : console.log('Неверно');

//* Задание 3
// let d = 10;
// let e = 300;
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//* Задание 3 с использованием тернарного оператора

// let d = 10;
// let e = 100;
// (d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

//* Задание 4

// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

//*Задание 5

// let monthNumber = prompt('Введите номер месяца');
// if (monthNumber < 1 || monthNumber > 12) {
//     console.log('Пожалуйста, введите корректное значение от 1 до 12!');
// }
// switch (monthNumber) {
//     case '1':
//         console.log('Январь: Зима');
//         break;
//     case '2':
//         console.log('Февраль: Зима');
//         break;
//     case '3':
//         console.log('Март: Весна');
//         break;  
//     case '4':
//         console.log('Апрель: Весна');
//         break;
//     case '5':
//         console.log('Май: Весна');
//         break;
//     case '6':
//         console.log('Июнь: Лето');
//         break;
//     case '7':
//         console.log('Июль: Лето');
//         break;
//     case '8':
//         console.log('Август: Лето');
//         break;
//     case '9':
//         console.log('Сентябрь: Осень');
//         break;
//     case '10':
//         console.log('Октябль: Осень');
//         break;
//     case '11':
//         console.log('Ноябрь: Осень');
//         break;
//     case '12':
//         console.log('Декабрь: Зима');
//         break;
//     default:
//         if(isNaN(monthNumber)){
//         console.log('Вы ввели что-то не то( попробуйте снова!'); // or braek;
//         }
//         break;
// }

//* задание 5, вариант решения №2

// let monthNumber = prompt('Введите номер месяца');
// if (monthNumber < 1 || monthNumber > 12) {
//     console.log('Пожалуйста, введите корректное значение от 1 до 12!');
// }else{
//     let season;
// }
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//     season = 'Зима';
//         break;  
//     case '3':
//     case '4':
//     case '5':
//     season = 'Весна';
//         break;
//     case '6':
//     case '7':
//     case '8':
//     season = 'Лето';
//         break;
//     case '9':
//     case '10':
//     case '11':
//     season = 'Осень';
//     default:
//         if(isNaN(monthNumber)){
//             console.log('Вы ввели что-то не то( попробуйте снова!');
//         }
//         break;
// }
// console.log(`месяц ${monthNumber} принадлежит к сезону ${season}`);

//*Задание 7 

// let enterNumber = Number(prompt('Пожалуйста, введите любое число'));
// if (isNaN(enterNumber))  {
//     console.log('вы ввели неверное значение. Введите число');
// } else {
//     if (enterNumber % 2 === 0) {
//         console.log(`число ${enterNumber} - четное`);}
//         else{
//         console.log(`число ${enterNumber} - нечетное`);  
//         }
//     }

//*Задание 8

// if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//     console.log("Установите версию приложения для iOS по ссылке");
//     }
//     else if (/Android/i.test(navigator.userAgent)) {
//     console.log("Установите версию приложения для Android по ссылке.");
//     }
//     else {
//     console.log("Неудалось определить ваше устройство.");
//     }

//* Исправленый вариант задания 8, по условию

// let clientOS = confirm("Выберите вашу операционную систему:\nЖмите 'ОК' для iOS\nЖмите 'Отмена' для Android");

// if (clientOS === true) { 
// console.log("Установите версию приложения для iOS по ссылке.");
// } else if (clientOS === false) { 
// console.log("Установите версию приложения для Android по ссылке.");
// } else {
// console.log("Некорректный выбор операционной системы.");
// }

//*Задание 9
// let clientDeviceOS = ""; 
// let clientDeviceYear = 2015; 


// if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
// clientDeviceOS = "iOS";
// } else if (/Android/i.test(navigator.userAgent)) {
// clientDeviceOS = "Android";
// }

// if (clientDeviceOS === "iOS" && clientDeviceYear < 2015) {
// console.log("Установите облегченную версию приложения для iOS по ссылке.");
// } else if (clientDeviceOS === "Android" && clientDeviceYear < 2015) {
// console.log("Установите облегченную версию приложения для Android по ссылке.");
// } else {
// console.log("Установите приложение по ссылке.");
// }

//* Исправленый вариант задания 9, по условию

// let clientOS = confirm("Выберите вашу операционную систему:\nЖмите 'ОК' для iOS\nЖмите 'Отмена' для Android");
// let clientDeviceYear = 2015;

// if (clientOS === true) {
// if (clientDeviceYear < 2015) {
// console.log("Установите облегченную версию приложения для iOS по ссылке.");
// } else {
// console.log("Установите приложение для iOS по ссылке.");
// }
// } else if (clientOS === false) { 
// if (clientDeviceYear < 2015) {
// console.log("Установите облегченную версию приложения для Android по ссылке.");
// } else {
// console.log("Установите приложение для Android по ссылке.");
// }
// } 

// let clientOS = confirm("Выберите вашу операционную систему:\nЖмите 'ОК' для iOS\nЖмите 'Отмена' для Android");
// let clientDeviceYear = 2015;
// let clientYear = Number(prompt('введите год производства вашего телефона'));


// if (clientOS === true) {
// if (clientDeviceYear > clientYear) {
// console.log("Установите облегченную версию приложения для iOS по ссылке.");
// } else {
// console.log("Установите приложение для iOS по ссылке.");
// }
// } else if (clientOS === false) { 
// if (clientDeviceYear > clientYear) {
// console.log("Установите облегченную версию приложения для Android по ссылке.");
// } else {
// console.log("Установите приложение для Android по ссылке.");
// }
// } 

