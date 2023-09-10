//*задание 1

// let arr = [1, 5, 4, 10, 0, 3];
// for (let elem of arr) {
//     console.log(elem);
//     if (elem === 10){
//         break;
//     }
// }

//*задание 2 перебор

// let arr = [1, 5, 4, 10, 0, 3];
// for (result of arr){
// result = arr.indexOf(4);
// }
// console.log(result);

//*задание 2 метод indexOf

// let arr = [1, 5, 4, 10, 0, 3];
// let result = arr.indexOf(4);
// console.log(result);

// or

// let arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

//*задание 3
// let arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

//*Задание 4

// let arr = [];
// for (let i = 0; i < 3; i++) {
// let innerArr = [];
// for (let a = 0; a < 3; a++) {
// innerArr.push(1);
// }
// arr.push(innerArr);
// }

// console.log(arr);


//*задание 5

// let arr = [1, 1, 1];
// let result = arr.push(2, 2, 2)
// console.log(arr);

// *задание 6 

// let arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// let result = arr.pop();
// console.log(arr);

//* задание 7
// let numbers = [9, 8, 7, 6, 5];
// let userInput = Number(prompt("Угадай число"));

// if (numbers.includes(userInput)) {
// alert("Угадал");
// } else {
// alert("Не угадал");
// }
// 

//* задание 7 способ 2

// let numbers = [9, 8, 7, 6, 5];

// let userGuess = Number(prompt('Угадай число'));

// let isCorrectGuess = false;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === userGuess) {
//     isCorrectGuess = true;
//     break;
//   }
// }

// if (isCorrectGuess) {
//   alert('Угадал');
// } else {
//   alert('Не угадал');
// }

//* задание 8
// let line = 'abcdef'
// line = line.split('').reverse().join('');
// console.log(line);

//* задание 9
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// arr = arr.flat();
// console.log(arr);

//* задание 10
// let arr = [1, 4, 3, 2];
// for (let i = 0; i < arr.length - 1; i++){
//     console.log(arr[i] + arr[i + 1]);
// }
//* задание 11
// let arr = [1, 2, 4, 8, 10];
// let result = arr.map(item => (item * item ));
// console.log(result);
//* задание 12
// function getWordLengths(arr) {
//     let lengths = [];
    
//     for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
//     }
    
//     return lengths;
//     };
//     const wordLengths = getWordLengths(["apple", "banana", "grape"]);
//     console.log(wordLengths); // Output: [5, 6, 5]
//* задание 13
// function filterPositive(array) {
//     array = [-1, 0, 5, -10, 56];
//     let negativeArray = [];
//     for (i = 0; i < array.length; i++) {
//      if (array[i] < 0) {
//          negativeArray.push(array[i]);
//      }
//     }
//     return negativeArray;
//  }
 
// console.log(filterPositive());
