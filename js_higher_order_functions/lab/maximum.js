const maxIteration = (arr) =>{
    let maxNum = arr[0];
    for(i = 0; i < arr.length;i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }return maxNum;
}

const maxRecursion = (arr) =>{
    let maxNum = arr[0];
    if(arr.length === 1){
        if(arr[0]>maxNum){
            maxNum = arr[0];
        }
    }else{
        let number = maxRecursion(arr.slice(1));
        if(number > maxNum){
            maxNum = number;
        }
    }
    return maxNum;
}


console.time('iterative')
console.log(maxIteration([ 213, 12, 66, 999 ]));
console.timeEnd('iterative')

console.time('Recurtion')
console.log(maxRecurtion([ 213, 12, 66, 999 ]));
console.timeEnd('Recurtion')
