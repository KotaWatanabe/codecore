// function areValuesArrays(array){
//     for(let i of array){
//         if(!Array.isArray(i)){
//             return false;
//         } 
//       }
//       return true;
//     }


// console.log(areValuesArrays([[1,2,3],[2]]));



























function areValuesArrays(arr){
    for(let i of arr){
        if(!Array.isArray(i)){
            return false;
        }
    }return true;
}

console.log(areValuesArrays([[1,2],[3,4,5]]));
console.log(areValuesArrays([1,2,[3,4,5]]));