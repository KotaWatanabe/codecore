function wordCounts(sentence) {
    const counts = {};
  
    for (let word of sentence.split(" ")) {
      if (counts[word]) {
        // When using brackets to create a key-value pair,
        // you are allowed to use an expression inside of
        // the brackets. The value that is returned from
        // the expression will be used as a key.
  
        // In our case, the expression is the variable
        // `word` which evaluates to the current word in
        // the iteration.
        counts[word] += 1;
      } else {
        counts[word]= 1;
      }
    }
    return counts;
  }
  
  const str = "this is this and that is that";
console.log(wordCounts(str));
