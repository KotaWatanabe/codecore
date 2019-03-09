const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

let total = 0;

for(let i = 1; i <= num1; i++){
    roll = Math.floor(Math.random * num2 +1);
    total += num2;
}

console.log(total);