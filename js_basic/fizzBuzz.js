let number1 = parseInt(process.argv[2]);
let number2 = parseInt(process.argv[3]);

for(i = 1; i <= 100; i++){
    if(i % number1 === 0 && i % number2 === 0){
        console.log("fizzbuzz");
    }
    else if(i % number1 === 0){
        console.log("fizz");
    }else if(i % number2 === 0){
        console.log("buzz");
    }else{
        console.log(i);
        }
    }
