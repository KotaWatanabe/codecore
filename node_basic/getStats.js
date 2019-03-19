const fs = require('fs');

fs.stat('myNewFile.txt', (err, stat) => {
	console.log('is it a file?', stat.isFile());
	console.log('is it a directory?', stat.isDirectory());
});