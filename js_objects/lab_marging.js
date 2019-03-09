// function merge(object1,object2){
//     let newObject = {};
//     for(let key1 in object1){
//         newObject[0]=object2[1];
//     }return newObject;
// //     for(let key2 in object2){
// //         newObject[0]=object2[1];
// //         for(let key1 in object1){
// //             i
            
// //             if(key2 === key1){
                
// //             }
// //         }
// //     }
// // }

function merge(obj1,obj2){
    const newObj = Object.assign(obj1,obj2);
    return newObj;
}

console.log(merge({a:1,b:2},{a:5,b:6,c:3,d:4}));