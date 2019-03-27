function XO(str) {
    let lowerString = str.toLowerCase();
    let splitName = lowerString.split("");
    const result = splitName.reduce((acc, char) => {
        console.log(acc);
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
      console.log(result)
      console.log(result.x);
      console.log(result.o);
      if(result.x===result.o){
          return true;
      }
      if(result.x!==result.o){
          return false;
      }
}
// console.log(acc[char]);

console.log(XO("xxoo"));