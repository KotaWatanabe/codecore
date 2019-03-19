const fs = require('fs');
// Note: We do not include a path when requiring a built-in
// Node module

const fileContents = 'console.log("This is a test");';

fs.writeFile('myNewJSFile.js', fileContents, (err) => {
	if (err) console.error(err);
	// if your if-statement code block only contains a single line
	// you can write your entire if-statement on one line
	// omitting the curly brackets
	console.log('2 File was created');
});

// Even though this line comes after the console.log on line 12 within the callback
// to `fs.writeFile`, it will always execute before that other console log.
// This is because writing a file is asynchronous and non-blocking
// meaning that it takes some time to write the file, but our js engine (Node)
// can still continue executing other js code from this file while it is writing
// the other file.
// Only once it has finished creating that file successfully, will it print
// the other message to the console.
console.log('1 Does this log before the `File was created` console log?');
