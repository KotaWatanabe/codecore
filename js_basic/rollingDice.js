// const num1 = parseInt(process.argv[2]);
// const num2 = parseInt(process.argv[3]);
// let total = 0;

// for(let i = 1; i <= num1; i++){
//     roll = Math.floor(Math.random() * num2 +1);
//     console.log(roll);
//     total += roll;
// }

// console.log('Average:', total / num1);
// console.log('Total:', total);

// Math.floor(Math.random() * 10);
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
total = 0;

for(let i = 1; i <= num1; i++){
    roll = Math.floor(Math.random()*num2 +1);
    total += roll;
}

console.log("Average:", total/num1);
console.log("Total:", total);