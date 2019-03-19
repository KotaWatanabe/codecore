// console.log(global);
global.console === console;
process === global.process;

// The `global` object has a lot of methods and properties associated with running
// a program using Node
// whenever you create a global variable, that is assign a variable
// without the keywords `let` or `const`
// you are in reality adding a property to this global object with the same
// name as your variable
// When accessing properties belonging to the global object, you do not need to
// prepend `global.`
// So when we type `global.console.log` it is exactly equivalent to typing
// `console.log`.
// If there already was a property with that name, like `console` or `setTimeout`
// You have just overwritten those methods and they now will no longer operate
// as expected

const setTimeout = () => {
	console.log('You suck!');
};
global.setTimeout(() => {
	console.log('You rock!');
}, 2000);
// This executes the local `setTimeout` defined with the `const` on line 19
// It will ignore the other arguments passed it since the function defined on line 19
// ignores its arguments, and it will only print `You suck!` immediately
setTimeout(() => {
	console.log('You rock!');
}, 2000);
// console.log(global);

function test() {
	// using `this` within a function refers to the `global` object in Node
	console.log('this', this);
}
test();
