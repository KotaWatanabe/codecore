const args = process.argv.slice(2);

const word = args[0].toLowerCase(); // ensures we start with a word that is lowercase
let result = '';

for (let i = 0; i < word.length; i++) {
	if (i % 2 === 0) {
		// if it is an even letter (even from the code perspective,
		// remember js/computers start counting at 0 not 1)
		// Then we will keep it the same, which is lower case
		result += word[i];
	} else {
		// Otherwise, we will make the letter upper case
		result += word[i].toUpperCase();
	}
}

console.log(result);

/////////////////////////

const word = process.argv[2];

word = word[0].toLowerCase();

let result ='';

for(let i = 0; i < word.length;i++){
    if(i%2 === 0){
        result = result + word[i];
    }else{
        result = result + word[i].toUppercase();
    }
}

