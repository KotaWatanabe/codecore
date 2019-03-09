const mood = process.argv[2];

// Code wrapped by an opening brace `{` and a closing
// brace `}` is called a "block"

// In an if-statement with multiple conditions, only the first
// block whose condition evaluates to true is executed
// All other blocks are skipped.
if (mood === 'happy') {
	console.log('Yay!');
} else if (mood === 'angry') {
	console.log('Calm down...');
} else if (mood === 'hangry') {
	console.log('Have a donut');
} else if (mood === 'hangry') {
	console.log('Have a snickers');
} else {
	// Use the `else` keyword to provide a default block that will
	// execute if none of the other if statements evaluate to true
	console.log('Ok.');
}

if (0) {
	// This will not execute
	console.log('Will I be executed?');
}
if (1) {
	// This will execute
	// console.log('Test with 1');
}

// When using boolean expressions (e.g. conditions within an if statement)
// you do not need to provide a boolean value (true, false)
// Javascript will attempt to convert any value you give to one of these
// conditionals into a boolean;
// This is called "type coercion"

// A value that converts to `true` is considered "truthy"
// A value that converts to `false` is considered "falsy"
1; // truthy
0; // falsy
500; // truthy
-41; // truthy
Infinity; // truthy (same with -Infinity)
NaN; // falsy

('hello'); // truthy
(''); // falsy
(' '); // truthy
('false'); // truthy

!true; // false
!false; // true
!!true; // true

!1; // false
!!1; // true
!0; // true
!!0; // false
!''; // true
!!''; // false
!!Infinity; //true
!!NaN; // false
!!undefined; // false
!![]; // true

// Ternary Operators
// <expression that is truthy or falsy> ? <expression-1> : <expression-2>
// <expression that is truthy or falsy> ? <truthy-expression> : <falsy-expression>
true ? console.log('It was truthy') : console.log('it was falsy');
false ? console.log('It was truthy') : console.log('it was falsy');
5 > 10 ? console.log('It was truthy') : console.log('it was falsy');

