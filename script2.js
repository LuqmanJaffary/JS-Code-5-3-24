// #10: Find the maximum number in an array of numbers

// function findMax(arr) {
//   let max = arr[0];
//   //   console.log(max);
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// let arr = [1, 2, 3, 4, 5, -2, -5, 15, 10];
// let result = findMax(arr);
// console.log(result);

// #11: Print the first 10 Fibonacci numbers without recursion

// let f0 = 0;
// let f1 = 1;
// for (i = 2; i <= 10; i++) {
//   let fi = f1 + f0;
//   f0 = f1;
//   f1 = fi;
//   console.log(fi);
// }

// #12: Create a function that will find the nth Fibonacci number using recursion

// function findFibnocci(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }

//   return findFibnocci(n - 1) + findFibnocci(n - 2);
// }

// let result = findFibnocci(7);
// console.log(result);

// #13: Create a function that will return a Boolean specifying if a number is prime

// function primeNumber(n) {
//   if (n < 2) return false;
//   if (n == 2) return true;
//   let MaxDiv = Math.sqrt(n);
//   for (let i = 2; i <= MaxDiv; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let result = primeNumber(3);
// console.log(result);


