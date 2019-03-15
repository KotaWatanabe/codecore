


// function filter(arr, fn) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       let function_result = fn(arr[i], i , arr);
//       if (function_result) {
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }

// const even = function (n) { return n % 2 === 0 };
// const odd = function (n) { return !even(n) };
// const above = function (min) {
//     return function (n) {
//       return n > min;
//     }
// }
// const repeatedValue = function(value, index, arr) {
//     return index !== arr.indexOf(value);
//   };
  

// let arr = [1,2,3,4,5,6];
// console.log(filter(arr, even)); // returns 2,4,6
// console.log(filter(arr, odd)); // returns 1,3,5
// console.log(filter(arr, above(3))); // returns 4,5,6
// console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)); // returns 2,3

let array =[4,5,6,7,8,9,10];
const newArray = [];
array.filter(element => element > 6 = push){
    if(element > 6){
        newArray.push(element)
    }
    return newArray;
})
console.log(newArray);