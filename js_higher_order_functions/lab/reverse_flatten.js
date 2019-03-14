// implement the flatten function with recursion

function flatten(arr) {
    const flat_arr = [];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flattened_array = flatten(item);
        flattened_array.forEach(flat_item => {
          flat_arr.push(flat_item)
        })
      } else {
        flat_arr.push(item)
      }
    });
    return flat_arr
  }
  
  const a = flatten([ 1, 2, [3, [4, 5] ] ]); // returns [ 1, 2, 3, 4, 5 ]
  const b = flatten([ 'a', [ 'b', ['c'] ] ]); // returns [ 'a', 'b', 'c' ]
  const c = flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
  console.log(flatten([1,[2,[3,4]]]))
  console.log(a)
  console.log(b)
  console.log(c)