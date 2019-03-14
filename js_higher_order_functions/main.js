// JS Higher Order Functions
console.log('JS Higher Order Functions');
if (false) {
	function add(a, b) {
		const total = a + b;
		return total;
	}

	add(1, 4); // this returns 5
	console.log('add(1, 4) = ', add(1, 4));
	console.log('add', add);
}
// functions are a base type
// they can be assigned, re-assigned, be property values
// But they can also do anything that another variable could do
// Including be passed as an argument to a function.

const myString = 'string';
const myOtherString = myString;

function testFn(str) {
	console.log('Your string was', str);
}

const myOtherTestFn = testFn;
// These two function calls will print the exact same thing
// testFn('hello');
// myOtherTestFn('hello');

const returnOne = function() {
	return 1;
};

const otherFn = returnOne;
// The function below, has NOT been called yelled.
// This means is hasn't executed, and so it will not yet return to us
// The value of 1.
// console.log('otherFn', otherFn); // some function definition? 1?
// The line above prints the value of `otherFn` to console
// That value is a function definition
// The code below actually executes that function, and so will
// print 1 to the console
// console.log('otherFn()', otherFn());

function fnReturner() {
	return otherFn;
}

fnReturner(); // This returns a function as its return value
// That function can be assigned to a variable, and then that variable
// can be executed as a function as well
const someVar = fnReturner();
someVar(); // This is fine. This will not produce any errors!

// ARROW FUNCTIONS

// This is how you declare an arrow function
// Start with the `const` keyword followed by the name of the function and an assignment
// operator, `=`
// Next, you use parentheses to specify an argument list, followed by an arrow `=>`
// and the code block `{ ... }`
const add = (a, b) => {
	// const total = a + b;
	// return total;
	return a + b;
};
add(4, 7); // return 11

// Brief foray into `Scope`
let i = 10;
if (true) {
	let i = 20;
	//console.log(i); // print 20
}
//console.log(i); // print 10

const returnOneArrow = () => {
	return 1;
};
returnOneArrow(); // return 1

const returnOneImplicit = () => 1;
returnOneImplicit(); // return 1

const addImplicit = (a, b) => a + b;
addImplicit(4, 5) === add(4, 5);

const add5 = (num) => num + 5;
// You can omit the parentheses `()` when defining a function with a single argument
// const add3 = num => num + 3;
// The fn definition above is valid JavaScript
add5(5); // return 10;
// add3(5); // return 8;

// To give an argument to a function a default value, you do the following:
function addAnother(a, b = 6) {
	return a + b;
}
addAnother(2, 3); // return 5
// Since, when calling the function, did not pass a value for the b argument
// b will get the default value of 6 as declared on line 96 using the `b = 6`
addAnother(4); // 4 + 6, return 10
addAnother(5, 6); // 5 + 6; return 11
// const addAnother = function(a, b = 6) {
// 	return a + b;
// };
// const addAnother = (a, b = 6) => a + b;

// If you are giving a parameter a default value, you must give al following
// arguments/parameters default values as well
function addDefaultA(a = 10, b) {
	return a + b;
}
// This will give `a` a value, not b even though `a` has a default
addDefaultA(4);

// Demo: To Arrow

function flip(fn) {
	return function(a, b) {
		return fn(b, a);
	};
}

const subtract = (a, b) => a - b;

const flippedSubtract = flip(subtract);
subtract(5, 3); // return 2
flippedSubtract(5, 3); // return 3 - 5; -2;

const flipArrow1 = (fn) => {
	return function(a, b) {
		return fn(b, a);
	};
};

const flipArrow2 = (fn) => {
	return (a, b) => {
		return fn(b, a);
	};
};

const flipArrow3 = (fn) => {
	return (a, b) => fn(b, a);
};

const flipArrow = (fn) => (a, b) => fn(b, a);

function V(x) {
	return function(y) {
		return function(z) {
			return z(x)(y);
		};
	};
}

const VArrow1 = (x) => {
	return function(y) {
		return function(z) {
			return z(x)(y);
		};
	};
};

const VArrow2 = (x) => {
	return (y) => {
		return function(z) {
			return z(x)(y);
		};
	};
};

const VArrow3 = (x) => {
	return (y) => {
		return (z) => {
			return z(x)(y);
		};
	};
};

const VArrow4 = (x) => {
	return (y) => {
		return (z) => z(x)(y);
	};
};

const VArrow5 = (x) => {
	return (y) => (z) => z(x)(y);
};

const VArrow = (x) => (y) => (z) => z(x)(y);

// HIGHER ORDER FUNCTIONS

// Demo: A Loud Function

const five = () => 5;
const ten = () => 10;
// `fn` is the callback function
// It will be called/executed later by the loud function
const loud = (fn) => {
	console.log(`Calling ${fn.name}`);
	const value = fn();
	console.log(`Called ${fn.name} & it returned ${value}`);
	return value;
};

// loud(five()); // BAD!!!!!!
// five(); // return 5
// loud(5);
// The code above throws an error:
// `Uncaught TypeError: fn is not a function`
// In this example,`five` is called before it is passed as an argument
// to `loud`. This means that `loud` receives the number 5 as an argument
// and NOT a function/callback to be executed/called alter.
// `loud` then tries to execute its assumed callback `fn` as a function
// however, its value is NOT a function, but 5. so it tries to execute 5()
// This gives us our error because only function can be called as functions

// Below are examples of the correct way to call`loud`
// const retFive = loud(five);
// loud(ten);
// loud(() => 20);

const loudCustomLogger = (logFn, fn) => {
	logFn(`Calling ${fn.name}`);
	const value = fn();
	logFn(`Called ${fn.name} & it returned ${value}`);
	return value;
};

loudCustomLogger(console.warn, five);
loudCustomLogger(console.error, ten);
loudCustomLogger(console.log, () => 20);

// Demo: Implement Each

const each = (fn, array) => {
	for (let i = 0; i < array.length; i++) {
		fn(array[i], i);
	}
};
const square = (val) => val * val;
const printSquare = (val) => console.log(square(val));
each((val, index) => console.warn(`${index} is ${val}`), [1, 2, 3, 4, 5]);
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
each(printSquare, arr);
arr.forEach(printSquare);

// Demo: Implement Map

const map = (fn, array) => {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(fn(array[i], i));
	}
	return newArray;
};
map(square, [1, 2, 3, 4, 5]);
const person = {
	name: 'Max',
	age: '199',
	favoriteLanguage: 'JS',
};
const getName = (object) => object.name;
getName(person); // returns 'Max'
const peopleArray = [{ name: 'Max' }, { name: 'Nina' }, { name: 'Chris' }, { name: 'Kato' }];
const names = map(getName, peopleArray);
console.log(names);

// RECURSION

// Factorial
// 6!
// 6 * 5 * 4 * 3 * 2 * 1
// 2!
// 2 * 1
// 5!
// 5 * 4 * 3 * 2 * 1
// 6! === 6 * 5!
// 1! == 1
// 0! === 1
// n! === n * (n-1) * (n-2) * ... 2 * 1
// n! === n * (n-1)!
// This function below only works for whole numbers that are greater than
// or equal to 1
function factorialR(n) {
	if (n === 1) {
		return 1;
	}
	return n * factorialR(n - 1);
}
const factorialR2 = (n) => (n === 1 ? 1 : n * factorialR2(n - 1));

// This happens if we step through
factorialR(4);
4 * factorialR(3);
4 * 3 * factorialR(2);
4 * 3 * 2 * factorialR(1);
4 * 3 * 2 * 1;

const factorialI = (n) => {
	let product = 1;
	for (let i = n; i >= 1; i--) {
		product = product * i;
	}
	return product;
};

// Demo: Reverse a String
// reverse("abc") === "cba"
// reverse("a") === "a"
// reverse("") === ""

// reverse("abc")
// reverse("bc") + "a"
// reverse("c") + "b" + "a"
// reverse("") + "c" + "b" + "a"
// ""  + "c" + "b" + "a"
// "cba"

const reverse = (str) => {
	if (str.length === 0) {
		return '';
	}
	const firstChar = str[0];
	// Here, we make the string that is being passed to the recursive call
	// a little smaller.
	// This is done because we are making sure we are "working towards" the
	// the termination condition
	// In this case, we will stop recursing once the string becomes empty
	// So shrinking the length of the string by one character each time
	// beings us closer to that goal
	const restOfString = str.slice(1);
	return reverse(restOfString) + firstChar;
	// how does `.slice(n)` work?
	// slice removes the first n number of characters in a string
	// "abcdef".slice(1) => "bcdef"
};

// When creating a recursive function you need the following things to be true/to happen:
// You need to:
// - have an if-statement that terminates your recursive calls
// - call the current function you are defining: this is known as the recursive step
// - you need to make sure that the argument(s) passed to the recursive call
//  are getting closer to the termination condition
/*
// the recursive function is given an array, a string, a number
function recFn(<some-value-that-can-be-made-smaller>) {
    if (<some-termination-condition>) {
        return <some-value>;
    }
    return <first-element-of-fn-argument> (some way combined) recFn(<rest-of-fn-argument>)
}
*/


// Benchmarking Recursion vs Iteration: Factorial

// This is how we measure the amount of time it takes for some code to execute
// This starts the timer named 'iterative'
console.time('iterative');
factorialI(11000);
// This ends the timer named 'iterative'
console.timeEnd('iterative');

// The iterative version could handle more elements or a bigger number
// And it was also generally faster for the large element size

console.time('recursive');
factorialR(11000);
console.timeEnd('recursive');
