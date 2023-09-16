//* Задание 1 
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];
// people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// });

// console.log(people);
//* Задание 2
// function isPositive(num) {
//     return num > 0;
//     }
//     function isMale(person) {
//     return person.gender === 'male';
//     }
//     function filter(array, ruleFunction) {
//     return array.filter(ruleFunction);
//     }

//     console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];

//     console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//* Задание 3
// function printCurrentDate() {
//     const currentDate = new Date();
//     console.log(currentDate);
//     }

//     function print30SecondsPassed() {
//     console.log("30 секунд прошло");
//     }

//     let count = 0;

//     const interval = setInterval(() => {
//     printCurrentDate();
//     count += 3;
//     if (count >= 30) {
//     clearInterval(interval);
//     setTimeout(print30SecondsPassed, 0);
//     }
//     }, 3000);

//* Задание 4
// function delayForSecond(callback) {
// 	 setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })


//* Задание 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) {
//             cb();
//         }
//     }, 1000);
// }

// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// // Измененный код
// delayForSecond(() => sayHi('Глеб'));