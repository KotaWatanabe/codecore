function persistence(num){
    let result = 0;
    let sum = 0;

    let char = num.toString();
    //put number inside array ex:[9,9,9]
    let newArray = [];
    for(let i = 0; i < char.length;i++){
        newArray.push(char[i]);
    }

    //one digit ===> 0
    // if(newArray.length === 1){
    // return result;
    // }

   //calculation
   while(newArray.length>2){
    sum = newArray[0];
    for(let i = 1; i<newArray.length; i++){
       sum *= newArray[i];
        }
        console.log(sum);
        let string = sum.toString();
        for(let i = 0; i < string.length;i++){
            newArray.push(string[i]);
        }
        result += 1;
    }


    return result;
    // }
    
    }
    
    console.log(persistence(39));
    console.log(persistence(987));


    
    

    // num ---> string
    
   
    
//     if(char.length === 2){
//         sum = char[0]*char[1];
//         while(sum.length < 2){
//             let string = sum.toString();
//             sum = string[0]*string[1];
//         }
//     }
   
// return sum;

// console.log(persistence(4));


//   //one digit ===> 0
//   if(char.length === 1){
//     return result;
//  }