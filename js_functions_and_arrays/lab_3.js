// function printMulti(array){
//     for(let value of array){
//     if(Array.isArray(value)){
//         for(let val of value){
//             console.log(val);
//         }
//     }else{
//         console.log(value);
//     }
// }

// }
// console.log(printMulti([[2,3,4],["Hello CodeCore",1,true]]));

function printMulti(array){
    for(let value of array){
        if(Array.isArray(value)){
            for(let val of value){
                console.log(val);
            }
        }
    }
}
console.log(printMulti([[2,3,4],["Hello CodeCore",1,true]]));