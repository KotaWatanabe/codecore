console.log(process.argv)

let num1 = process.argv[2];
let num2 = process.argv[3];
let num3 = process.argv[4];

if(num1 > num2 && num1 > num3){
    console.log(`The largest number is ${num1}`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`The largest number is ${num2}`);
}
else if(num3 > num1 && num3 > num2){
    console.log(`The largest number is ${num3}`);
}
