//#1 Print number from 1 to 10

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log("Even ", i);
//   } else {
//     console.log("Odd ", i);
//   }
// }

//#2 Print the multiplication table of seven
// let j = 7;
// for (let i = 1; i < 11; i++) {
//   let k = i * j;
//   console.log(`${j} x ${i} = ${k}`);
// }

//#3 Print all multiplication table from 1 to 10

// for (i = 1; i <= 10; i++) {
//   PrintTable(i);
//   console.log("");
// }

// function PrintTable(n) {
//   for (i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${i * n}`);
//   }
// }

//#4 print sum of sum from 1 to 10
// let sum = 0;
// let total;
// for (let i = 1; i <= 10; i++) {
//   total = sum + i;
// }
// console.log(total);

//#5 print product number from 1 to 10
// let product = 1;
// let total;
// for (let i = 1; i <= 10; i++) {
//   product += i;
// }
// console.log(product);

// #6: Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;
// for (let i = 10; i <= 30; i += 2) {
//   sum += i;
// }
// console.log(sum);

// #7: Calculate the sum of numbers in an array of numbers

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let sum = 0;
// function CalculateArr(n) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let arr = [1, 2, 3, 4, 5];

// let result = CalculateArr(arr);
// console.log(result);

// #8: Calculate the average of the numbers in an array of numbers

// let sum = 0;
// function CalculateArr(n) {
//   let x = arr.length;
//   for (let i = 0; i < x; i++) {
//     sum += arr[i];
//   }
//   return sum / x;
// }

// let arr = [1, 2, 3, 4, 5];

// let result = CalculateArr(arr);
// console.log(result);

// #9: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Method 1
// let sum = 0;
// function CalculateArr(n) {
//   //   let x = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       //   sum += arr[i];
//       arr1.push(arr[i]);
//     }
//     // } else {
//     //   arr1.push(arr[i]);
//     // }
//   }
//   return arr1;
// }

// let arr = [1, 2, -3, 4, 5, -1, 2, -5];
// let arr1 = [];

// let result = CalculateArr(arr);
// console.log(result);

// Method 2

// let sum = 0;
// function CalculateArr(n) {
//   //   let x = arr.length;
//   for (let i of n) {
//     if (i > 0) {
//       //   sum += arr[i];
//       arr1.push(i);
//     }
//     // } else {
//     //   arr1.push(arr[i]);
//     // }
//   }
//   return arr1;
// }

// let arr = [1, 2, -3, 4, 5, -1, 2, -5];
// let arr1 = [];

// let result = CalculateArr(arr);
// console.log(result);

//Method 3

function getPositive(arr) {
  arr.filter((e) => e >= 0);
}

let arr = [1, 2, -3, 4, 5, -1, 2, -5];
let arr1 = [];

getPositive(arr);
