// $ node passwordChecker.js somePassword
const password = process.argv[2];

if(!password){
    // password === undefined
    console.log("Make sure to type in a password forus to check!");
}

else if(password.length > 12){
    console.log("too long");
}else if(password.length < 8){
    console.log("too short!");
}else{
    console.log("Just right");
}