function toObject(arr){
    const newObject ={};
    for(let pair of arr){
      newObject[pair[0]] = pair[1];
      
    } 
    return newObject;
}

const array =[['a',1],['b',2],['c',3]]
console.log(toObject(array));