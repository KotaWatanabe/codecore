function isHomogenous(arr){
    let element = arr[0];
    for(let val of arr){
        if(typeof val !== typeof element){
            return false;
        }else if(typeof val === "object" && ((Array.isArray(element) && !Array.isArray(val)) || (!Array.isArray(element) && Array.isArray(val)))){
            return false
        }
    }return true
    
}

console.log(isHomogenous([1,2,'c']));
console.log(isHomogenous([1,2,'c']));
console.log(isHomogenous([[2], 'Xavier']));
console.log(isHomogenous(['a', 'b', 'c']));
console.log(isHomogenous(['a', 'b', 'c'],{}));





