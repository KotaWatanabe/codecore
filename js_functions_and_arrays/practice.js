// function findShort(s){
//     const split = s.split(" ");
//     let shortestWord = split[0];
//     for(const word of split){
//         if(word.length < shortestWord.length){
//             shortestWord = word;
//         }
//     }
//     return shortestWord;
//     }
// console.log(findShort("Hello my name is Kota"));

console.log("Exercise: Occurences Of");
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
console.log(
  occurencesOf("l", "hello world"),
  occurencesOf(" ", "my name is bob"),
  occurencesOf("c", "this is this")
);

function allOccurencesOf(char, strings) {
    let charCounts = [];
  
    for (let str of strings) {
      charCounts.push(occurencesOf(char, str));
    }
  
    return charCounts;
  }
  
  console.log(allOccurencesOf("l", ["hello", "world", "thing"]));