// The `require` function will return the value assigned to
// `module.exports` in the file given as the path argument
const countries = require('./countries');
// Note: You do not need to append the file extension
// (i.e. `.js`) when requiring.
countries.forEach((country)=> {
    console.log(country, country.length);
});