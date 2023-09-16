//* Задание 1

// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

//*задание 2

// function searchStart(array, string) {
//     return array.filter(function(item) {
//       return item.toLowerCase().startsWith(string.toLowerCase());
//     });
//   }

//   console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//*задание 3

// let number = 32.58884;
// console.log(Math.ceil(number), Math.floor(number), Math.round(number));

// ceil( ) — округление до наибольшего целого
// floor( ) — округление до наименьшего целого 
// round( ) — округление до ближайшего целого


//*Задание 4

// const arr = [52, 53, 49, 77, 21, 32];
// const maxElement = Math.max(...arr);
// const minElement = Math.min(...arr);

// console.log(`максимальное число в массиве - ${maxElement}, минимальное - ${minElement}`);

//*Задание 5

// const getRandomInt = (max, min) => {
//     return Math.round(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(1, 10));


//*Задание 6
// function getRandomNumbers (num){
//     let array = [];
//     for (i = 0; i < num/2; i++){
//         array.push(Math.floor(Math.random() * 10));
//     }
//     return array;
// }
// console.log(getRandomNumbers(10));

//?задание 7

// function getRandomInt(num1, num2) {
//     return Math.round(Math.random() * (num1 - num2)) + num2;
//     } 
//     console.log(getRandomInt(1, 5));

//*задание 8 не понял задания поэтому два варианта
//  let myDate = new Date();
//  console.log(myDate);

//or

//  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня","Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
//  let myDate = new Date();
//  let fullDate = (`сегодня ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} года` 
//  );
//  console.log(fullDate);

//*задание 9
//  let currentDate = new Date();
//  let days73 = 73 * 24 * 60 * 60 * 1000;
//  let searchDate = Number(currentDate) + Number(days73);
//  let after73Days = new Date(searchDate);
//  console.log(after73Days); 

// or

//  let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

//*Задание 10
// function displayDate() {
//     const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
//         "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

//     let myDate = new Date();
//     if (myDate.getHours() < 10) {
//         hour = '0' + hour;
//     }
//     if (myDate.getMinutes() < 10) {
//         minute = '0' + minute;
//     }
//     if (myDate.getSeconds() < 10) {
//         second = '0' + second;
//     }

//     let fullDate = `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`
//     let fullTime = `Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`

//     console.log(fullDate + '\n' + fullTime);
// }
// displayDate()

//* задание 11 в файле script