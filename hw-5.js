//*Задание 1 Arrow Functions
// let getLessThan = (a, b) => {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(getLessThan(9, 1));

//*задание 1 Function Declaration
// function getLessThan(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(getLessThan(3, 4));

//*задание 1 Function Expression
// const getLessThan = function(a, b){
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(getLessThan(55, 12));

// *задание 2
// const getNumber = () => {
//     let userEnter = Number(prompt('Пожалуйста, введите число!'))
//     if (userEnter % 2 === 0) {
//         console.log('число четное');
//     } else {
//         console.log('число нечетное');
//     }
// }
// getNumber();

//! задание 2 с помощью return

// const getNumber = () => {
//     let userEnter = Number(prompt('Пожалуйста, введите число!'))
//     if (userEnter % 2 === 0) {
//         return 'четное число';
//     }
//     return 'нечетное число';
// }
// console.log(getNumber());

// *задание 2 вариант решения (записи) №2

// let enter = prompt('пожалуйста, введите число');
// function enterNumber(number) {
//     const message = number = enter % 2 === 0 ? 'Число четное' : 'Число нечетное';
//     console.log(message);
//   }
//   enterNumber(enter);

// *задание 2 вариант решения (записи) №3

// function enterNumber() {
//     let enter = prompt('пожалуйста, введите число');
//     const message = enter % 2 === 0 ? 'Число четное' : 'Число нечетное';
//     console.log(message);
//   }
//   enterNumber();

// *задание 3.1
// function getSquareNumber(enterNumber) {
//     enterNumber = Number(prompt('Введите ваше число'));
//     console.log(`квадарат ${enterNumber} = ${enterNumber * enterNumber}`);
// }
// getSquareNumber();

// *задание 3.2
// const getSquareNumber = (enterNumber) => {
//     enterNumber = Number(prompt('Введите ваше число'));
//     return enterNumber * enterNumber;
// }
// console.log(getSquareNumber());

// *задание 4
// const yearsQuestion = (askYear) => {
//     askYear = Number(prompt('Сколько вам лет?'));
//     if (askYear < 0) {
//         console.log('Вы ввели неверное значение');
//     } else if (askYear >= 0 && askYear <= 12){
//         console.log('Привет, друг!');
//     } else if (askYear >= 13){
//         console.log('Добро пожаловать!');
//     }
// }
// yearsQuestion();

// *задание 4 return
// const getYearsQuestion = (askYear) => {
//     askYear = Number(prompt('Сколько вам лет?'));
//     if (askYear < 0) {
//         return 'Вы ввели неправильное значение';
//     } else if (askYear >= 0 && askYear <= 12){
//         return 'Привет, друг!';
//     } else if (askYear >= 13){
//         return 'Добро пожаловать!';
//     }
// }
// console.log(getYearsQuestion());

// *Задание 5

// const getMultipli = (a, b) => {
//     a = Number(prompt('введите первое число'));
//     b = Number(prompt('введите второе число'));

//     if (isNaN(a) || (isNaN(b))) {
//         return('Одно или оба значения не являются числом');
//     } else {
//         return `произведение ${a} на ${b} = ${a * b}`;
//     }
// }
// console.log(getMultipli());

// *Задание 6

// const getNumber = (userNumber) => {
//     userNumber = Number(prompt('Пожалуйста введите число'));
//     if (isNaN(userNumber)) {
//         return 'переданный параметр не является числом';
//     } else{
//         let cube = userNumber ** 3;
//         return `${userNumber} в кубе равняется ${cube}`;

//         //or

//         // return `${userNumber} в кубе равняется ${userNumber ** 3}`;
//     }
// }
// console.log(getNumber());

//*Задание7
// function getAreaFunc(){
//     return Math.PI * this.radius * this.radius;
// }
// function getPerimeterFunc(){
//     return 2 * Math.PI * this.radius;
// }

// let circle1 = {
//     radius: 7,
//     getArea: getAreaFunc,
//     getPerimeter: getPerimeterFunc,
// };
// let circle2 = {
//     radius: 3,
//     getArea: getAreaFunc,
//     getPerimeter: getPerimeterFunc,
// };
// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

//!or функции не вынесены отдельно, внутрии object

// let circle1 = {
//     radius: 7,
//     getArea: function getAreaFunc() {
//         return Math.PI * this.radius * this.radius;
//     },
//     getPerimeter: function getPerimeterFunc(){
//         return 2 * Math.PI * this.radius;
//     },
// };
// let circle2 = {
//     radius: 3,
//     getArea: function getAreaFunc(){
//         return Math.PI * this.radius * this.radius;
//     },
//     getPerimeter: function getPerimeterFunc(){
//         return 2 * Math.PI * this.radius;
//     },
// };
// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());