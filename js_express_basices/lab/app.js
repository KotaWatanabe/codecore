const express = require('express');
const logger = require('morgan');
const app = express();

const PORT = 4000;
const DOMAIN = 'localhost';

app.set('view engine', 'pug');
app.use(logger('dev'));

app.get('/car_status', (request, response) => {
	const year = request.query.year;
	let age;
	switch (true) {
		case year > 2018:
			age = 'Future';
			break;
		case year > 2014:
			age = 'New';
			break;
		case year > 2006:
			age = 'Old';
			break;
		case year <= 2006:
			age = 'Very Old';
			break;
	}

	// https://expressjs.com/en/api.html#res.render
	// render is a function on the response object which takes in up to 3 parameters
	// 1) a view, which is a string equal to the name of the html/ejs in the views directory
	// 2) a locals object, which is an object that can be accessed by the view templates
	// 3) a callback function that gets fired after the response has rendered
	response.render('car_status', { age });
});

app.get('/random_person', (req, res) => {
	let names = req.query.names || ''
	names = names.split(',');
	let pickedPerson = names[Math.floor(Math.random() * names.length)]
	res.render('random_person', {pickedPerson});
});

app.get('/fizz_buzz', (req, res) => {
	const { number_1, number_2 } = req.query;
	// const number_1 = req.query.number_1;
	// const number_2 = req.query.number_2;
	console.log(number_1, number_2);
	let fizzBuzzArray = [];
	for (let i = 1; i <= 100; i++) {
		let fizzBuzzString = '';
		if(i % number_1 !== 0 && i % number_2 !== 0) {
			fizzBuzzString += i;
		}
		if(i % number_1 === 0) {
			fizzBuzzString += 'fizz';
		}
		if(i % number_2 === 0) {
			fizzBuzzString += 'buzz';
		}
		fizzBuzzArray.push(fizzBuzzString);
	}
	console.log('FIZZ BUZZ ARRAY =>', fizzBuzzArray);
	res.render('fizz_buzz', {fizzBuzzArray});
})

app.listen(PORT, DOMAIN, () => {
	console.log(`The server is listening at http://${DOMAIN}:${PORT}`);
});