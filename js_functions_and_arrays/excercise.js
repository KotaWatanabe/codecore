console.log("Exercise: Occurences Of");
function occurencesOf(char, str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === char) {
      count += 1;
    }
  }

  return count;
}

// Examples:
console.log(
  occurencesOf("l", "hello world"),
  occurencesOf(" ", "my name is bob"),
  occurencesOf("c", "this is this")
);

// Exercise: Sum
console.log("Exercise: Sum");

// function sum (numbers) { ...
// When creating function, you can also create
// variable and assign the function to the variable.
// This will for most work the same as creating a
// named function.
const sum = function(numbers) {
  let total = 0;

  for (let number of numbers) {
    // The `typeof` keyword looks like a function, but it isn't.
    // It's actually an "operator" like +, - or * which
    // means that we do not need () to call it.
    if (typeof number === "number") {
      total += number;
    }
  }

  return total;
};

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(sum([1, 1, 2, 2, 2, 3, 3, 3, 3]));
console.log(sum([1, 1, "2", 2, 2, 3, 3, 3, 3]));

console.log("Exercise: All Occurences Of");

function allOccurencesOf(char, strings) {
  let charCounts = [];

  for (let str of strings) {
    charCounts.push(occurencesOf(char, str));
  }

  return charCounts;
}

console.log(allOccurencesOf("l", ["hello", "world", "thing"]));

