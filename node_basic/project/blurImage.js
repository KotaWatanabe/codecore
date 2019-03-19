const jimp = require('jimp');
const fs = require('fs');

const fileName = './code.png';

jimp.read(fileName, (err, image) => {
	image.blur(5).write('test.png');
});
