const countries = [
	'Argentina',
	'Canada',
	'France',
	'Germany',
	'Mexico',
	'New Zealand',
	'Philippines',
];

// Assign a value to `module.exports` to make it available to
// other JavaScript files in your Node project. Having a
// `module.exports` line makes this file a "module"
module.exports = countries;
// To access the countries array from another file, we use the
// "require" function:
// const countries = require('./path/to/countries');

const otherCountries = [
	'United States',
	'United Kingdom',
	'Norway',
	'Zimbabwe',
];
// to export multiple "things" from a module, we wrap all of
// our exported "things" in an object
// module.exports = { countries: countries, otherCountries: otherCountries };
// To access the countries array from another file, we use the
// "require" function:
// const countriesObj = require('./path/to/countries');
// countriesObj.countries
// countriesObj.otherCountries
