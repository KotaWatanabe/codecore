function largestNumber(num){
    let largest = num[0];
    for(const number of num){
        if(number > largest){
            largest = number;
        }
    }
    return largest
}
console.log(largestNumber([40, 100, 13, 250, 42]));
