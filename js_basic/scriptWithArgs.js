// `process` is a global variable in Node that gives
// information about the running process
console.log(process.argv);

// `process.argv` is an array that contains the following
// values in order:
// - The full path to your Node program on your computer
// - The full oath to the script file you are running with Node
// - All further values that were given as arguments to the script

// Example:
// `node scriptWithArgs.js firstArg secondArg`
//                            ^         ^
//                         3rd val.     4th val.
const args = process.argv;
const firstArg = args[2];// = process.argv[2];
const secondArg = args[3];

console.log("First arugument:",firstArg);
console.log("second argument:",secondArg);
console.log("Third Arg",args[4]);
