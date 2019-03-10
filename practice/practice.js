function count(arr){
    let result = 0;
    for(let i of arr){
        if(i>=6){
            result += 1;
        }
    }
    return result;
    
}
// console.log(count([4,6,7,1,7,4,10]));


function toObject(arr){
    let newObject ={};
    for(let pair of arr){
        newObject[pair]=pair.length
    }
    return newObject
}

console.log(toObject(['hello', 'hi','Good','hey']));