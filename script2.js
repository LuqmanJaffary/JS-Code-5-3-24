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

function findMax(arr) {
  let max = arr[0];

  for (let i of arr) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [1, 2, 3, 4, 5, -2, -5, 15, 10];
let result = findMax(arr);
console.log(result);
