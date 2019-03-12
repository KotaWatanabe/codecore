//配列の数から、6以上の数は何個か
function count(arr){
    let result = 0;
    for(let i of arr){
        if(i>=6){
            result += 1;
        }
    }
    return result;
    
}
// console.log(count([4,6,7,1,7,4,10]));

// 配列からオブジェクトに。オブジェクトのValueは文字数
function toObject(arr){
    let newObject ={};
    for(let pair of arr){
        newObject[pair]=pair.length　//need "[ ]" for variable inside object
    }
    return newObject
}

// console.log(toObject(['hello', 'hi','Good','hey']));

// Nodeから取得した数の最大値
const arg = process.argv.slice(2);

let num1 = arg[0];
let num2 = arg[1];
let num3 = arg[2];

let largestNumber ='';
if(num2 > num1 && num2 > num3){
    largestNumber = num2
}
else if(num3 > num1 && num3 > num2){
    largestNumber = num3;
}
else if(num1 > num3 && num1 > num2){
    largestNumber = num1;
}
// console.log(`The largest number is ${largestNumber}`);

// 文字の中に何個指定されたキャラクターが含まれるか
function occurencesOf(char, str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === char) {
      count += 1;
    }
  }

  return count;
}

// Examples:
// console.log(
//   occurencesOf("l", "hello world"),
//   occurencesOf(" ", "my name is bob"),
//   occurencesOf("c", "this is this")
// );

// 何個キャラクターが踏まれるか配列で答える。
function allOccurencesOf(char, strings) {
    let charCounts = [];
  
    for (let str of strings) {
      charCounts.push(occurencesOf(char, str));
    }
  
    return charCounts;
  }
  
//   console.log(allOccurencesOf("l", ["hello", "world", "thing"]));

// 縦にプリントアウトする
function printMulti(array){
    for(let value of array){
        // if(Array.isArray(value)){
            for(let val of value){
                console.log(val);
            
        }
    }
}
console.log(printMulti([[2,3,4],["Hello CodeCore",1,true]]));


function fillRectangle(width, height, char) {
    // width will be how many elements are in an array
    // height will me the number of nested arrays
    let row = [];
    for (let i = 0; i < width; i++) {
      row.push(char);
    }
  
    let rectangle = [];
    for (let i = 0; i < height; i++) {
      rectangle.push(row);
    }
  
    return rectangle;
  }
  
  const rect = fillRectangle(5,3, '🔥');
//   console.log(rect);
  
  function rectangleToString(arr) {
    let string = '';
    for (const element of arr) {
      for (const character of element) {
        string += character;
      }
      string += '\n';
    }
    return string;
  }
  
  const rect_to_string = rectangleToString(fillRectangle(5,3, '🔥'))
//   console.log(rect_to_string)

//パスワード下4桁だけ表示
  function maskify(cc) {
    let password = cc.toString();//まず全部stringに
    let passwordArray = password.split('');//ひとつずつ取り出せる
    // console.log(passwordArray);
    for(let i = 0; i < password.length-4; i++){
        passwordArray[i] = "#";
    }
    return passwordArray.join('');//配列から文字列に
    
  }
  console.log(maskify("mtakmtak"));
//   console.log(maskify(12345678));