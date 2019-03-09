// function characterCounts(words) {
//     const counts = {};


//     wordChanged = words.toLowerCase();
//     for (let char of wordChanged) {
        
//       if (counts[char]) {    
//         counts[char] += 1;
//       } else {
//         counts[char] = 1;
//       }
//     }
//     return counts;
//   }
  
//   const str = "An archer";
// console.log(characterCounts(str));

function charCounts(str) {
    const counts = {};
  
    for (let char of str.toLowerCase()) {
      if (counts[char]) {
        counts[char] += 1;
      } else {
        counts[char] = 1;
      }
    }
  
    return counts;
  }
  
  const myStr = "What is this?";
  
  console.log(charCounts(myStr));