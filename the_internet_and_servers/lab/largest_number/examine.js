let numberStr = "1,2,3,4,5,6";

// let numString = numberStr.toString();
// console.log(numString);

// let split_to = numberStr.split("");
// console.log(split_to);

let numJoin = numberStr.join("");

let newArr=[];
for(let char of numberStr){
    newArr.push(char)
}
console.log(newArr);
// let maxNumber=parseInt(numString[0]);
// for(let i = 0;i<numString.length;i++){
//     if(parseInt(numString[i]>maxNumber)){
//         parseInt(numString[i]) = maxNumber;
//     }
// }





// let join_to = split_to.join("");
// console.log(join_to);

// let maxNumber = Math.max(join_to);
// console.log(maxNumber);