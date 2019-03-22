function map(arr, fn){
    let newArr =[];
   for(let i = 0; i < arr.length; i++){
       const value = arr[i];
       newArr.push(fn(value,i,arr));
   }
    return newArr
}

const array =[1,2,3,4,5];
const reverseEngineerMapResult = map(array,(value,index,arr)=>{
    return value*2;
})

console.log(reverseEngineerMapResult);

const itemCosts = [1,2,3,4,5];
const reducedItemCosts = itemCosts.reduce((accumlator,value)=>{
    return accumlator + value;
},5);

console.log(reducedItemCosts);