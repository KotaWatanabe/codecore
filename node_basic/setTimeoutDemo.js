// Use the `setTimeout` function to execute a callback after
// some delay in milliseconds.
// The arguments to this function are in the following order:
// - A callback to execute
// - The delay in ms
setTimeout(() => {
	console.log('This is from the setTimeout');
}, 7000);

console.log('Started waiting...');

// Because `setTimeout` is asynchronous, JavaScript will not pause
// at the function call until the delay is over.
// It will continue executing the lines that follow this function.
// Once the delay has elapsed, Javascript will finally
// come back and execute the callback.
// By then. the entire script will have finished running.
setTimeout(() => {
	console.log('Waited 2s');
}, 2000);
// This ode does NOT wait for the `setTimeout` to complete
// its 2 second delay.
// It will execute right after starting the timer
console.log('Done waiting');

let greeting = 'Hello';
console.log('Before setTimeout', greeting);
setTimeout(() => {
	greeting = 'Yo!';
	console.log('In the callback', greeting);
}, 0);
console.log('After setTimeout', greeting);
// setTimeout "holds" code that should be executed after all
// synchronous code has finished executing and the timer has expired.
// if the synchronous code never finished (i.e. if there is an
// infinite loop) like the line below, then the async code
// will never execute
// while (1) {}


