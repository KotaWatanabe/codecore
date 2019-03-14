const reduce = (arr,fn,initial_value) => {
    let result = initial_value;
    if(!initial_value){
        console.log("Error")
    }else{
    for(let i = 0; i < arr.length; i++){
        result = fn(result,arr[i]);
        }
    }
    
    return result;
}

const plus = (a,b) => a + b;
const numbers = [1,2,3,4,5];

console.log(reduce(numbers,plus,0));
console.log(reduce(numbers,(a,b) => a * b,1));