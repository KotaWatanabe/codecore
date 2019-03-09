// JS: Objects
// Creating an object

// An object is defined with braces. Not to be confused
// with a code block.
const dog = {
    // It contains key-value pairs.
    // "age" is a key. Keys are always strings.
    // 10 is the value paired to the "age" key.
    // Values can be any type.
    age: 10,
    firstName: "Benji",
    lastName: "Burlybottom",
    toys: [
      "Amazon Delivery Box",
      "Pork Leg Bone",
      "Rubber Bunny",
      "Pink Torn Teddy Bear"
    ]
  };
  
  // To read values associated to a key in an object
  // use the dot operator.
  dog.age; // 10
  // The dot operator is shortcut (syntax sugar)
  // for using [] brackets to refer to a key.
  dog["age"]; // 10

  // To create new key-value pairs or change the value
// of an existing key-value pair, do the following:
dog.middleName = "Permberton";
dog["eyeColor"] = "Green";

// Keys when used with the dot operator can not
// have special characters (e.g. spaces, commas, dashes, etc.)

// dog.fur-color = "Brown" // ILLEGAL KEY NAME WITH .
dog["fur-color"] = "Brown"; // LEGAL WITH SQUARE BRACKETS

// Keys with special characters must be read using []. Using . will
// throw an error.

// dog.fur-color // Throws an error
dog["fur-color"]; // "Brown" // Works correctly

// Object Utility Functions

// Get all keys from object as an array
// Use the Object.keys() function.
Object.keys(dog);

// Get all values from an object as an array
Object.values(dog);

// To merge objects together, use Object.assign().
// In other words, this will combine the key-value
// pairs of all objects passed to Object.assign()
// into a single object.
const a = { a: 1, b: 2, c: 3 };
const b = { z: 20, x: 30, y: 40 };
Object.assign(a, b); // { a: 1, b: 2, c: 3, z: 20, x: 30, y: 40 }

// This will mutate the first object passed meaning that
// all key-values will be added to object.
a; // { a: 1, b: 2, c: 3, z: 20, x: 30, y: 40 }

// To create new object with the key-value pairs of all
// passed in objects without mutating any of them, use
// an empty object as the first argument.
Object.assign({}, a, b, { j: 10, k: 20, l: 30 });

// When merging objects same named keys will be overwritten
// where the conflicting key of the last objects being merged
// will have priority.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

// Iterating over objects

// Use the for..in loop which will iterate over the keys
// of the object. Using the key, we can access its
// paired value with the [] notation.
console.log("Iterating over an object");
for (let key in dog) {
  console.log("key:", key, "value:", dog[key]);
}