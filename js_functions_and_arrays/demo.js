function insult (name){
    const randomInt = Math.floor(Math.random()*3);   
// Naming conventions for names in program languages:
  // randomInt - camelCase
  // random_int - snake_case
  // random-int - kebab-case
  // RandomInt - PascalCase
    if (randomInt === 0){
        return `${name},you doofus`; 
    }else if (randomInt === 1){
        return `${name},your father smelt of elderberries`;
    }else{
    // The `return` keyword is used output a value from
    // function. If it isn't used, then the function will
    // always output `undefined`
    // When `return` is used, all lines that follow
    // will be ignored and we will exit the function
    // immediately.
        return `Your mother was a hamster, ${name}`;
    }
    // This `console.log` will be executed because
  // one of the `return` above will always be executed.
    console.log("End of function insult");
      
}
// Example:

// When calling a function in a script, it's output
// will not appear in the terminal unless you pass it
// a `console.log` call.
console.log(insult("Steve"));

// Arrays

let a = [1,2,3,4,5,] // undefined
a // [ 1, 2, 3, 4, 5 ]
a.length // 5
[] // []
[].length // 0
a[0] // 1
a[a.length - 1] // 5

let c = ["a", "b", "c", "d", "e"];

console.log("Iterating an array with for");
for (let index = 0; index < c.length; index += 1) {
  console.log("Index:", index, "Value:", c[index]);
}

for(let value of c){
    console.log("Value",value);
}