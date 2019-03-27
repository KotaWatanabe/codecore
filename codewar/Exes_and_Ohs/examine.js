let string = "KotaWatanbe"

let splitName = string.split("");

// let a = splitName.indexOf("a");

// console.log(a);

// console.log(splitName);

// function charTally(input) {
    const result = splitName.reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

    console.log(result);