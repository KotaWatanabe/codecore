// create higher order function filter

function filter(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let function_result = fn(arr[i], i , arr);
      if (function_result) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  filter([1,2,3], (value, index, arr) => {
    return n % 2 === 0;
  })
  // same thing as 
  filter(arr, even);
  
  // Test cases
  
  let l = console.log;
  
  const even = function(n) {
      return n % 2 === 0;
  };
  // even returns true if its argument, n, is an odd number (false otherwise)
  const odd = function(n) {
      return !even(n);
  };
  
  // creates a function that returns true if its argument is above min
  const above = function(min) {
      return function(n) {
          return n > min;
      };
  };
  
  const repeatedValue = function(value, index, arr) {
      return index !== arr.indexOf(value);
  };
  
  let arr = [1, 2, 3, 4, 5, 6];
  
  l(filter(arr, even)); // returns 2,4,6
  l(filter(arr, odd)); // returns 1,3,5
  l(filter(arr, above(3))); // returns 4,5,6
  
  let array_with_doubles = [1,2,3,2,3];
  l(filter(array_with_doubles, repeatedValue)) // returns 2,3