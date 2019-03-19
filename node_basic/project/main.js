// console.log('MY_ENV', process.env.MY_ENV);
// console.log('This is a test within main.js');

// To start a new NPM project, do:
// > npm init

// To install a package, do:
// > npm install <package-name>
// > npm i <package-name>
// > npm i <package-name> <package-name> <package-name> <package-name> ...

// To remove a package, do:
// > npm remove <package-name>

// When requiring a package, use the name of the package
// as listed in the "dependencies" section of the package.json
const QRCode = require('qrcode');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('What is the QRCode file name?\n> ', (fileName) => {
	rl.question('What text do you want to encode?\n> ', (text) => {
		QRCode.toFile(fileName, text, (error) => {
			log(`QRCode save to "${fileName}"`);
			rl.close();
		});
	});
});

function log(text) {
	if (process.env.DEVELOPMENT) {
		console.log(text);
	}
}
