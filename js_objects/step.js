// Methods

// Demo: ArrayUtils

function first(arr) {
    return arr[0];
  }
  
  const ArrayUtils = {
    // A **method** is a property of an object whose
    // value is a function.
    // Think of it as function that is owned by
    // an object.
    last: function last(arr) {
      return arr[arr.length - 1];
    },
    // You can also create method by assigning an existing
    // function to a key.
    first: first,
    // The following is writting using shorthand syntax.
    // This only works when define a function as method.
    take(arr, n) {
      return arr.slice(0, n);
    },
    // The code above is syntax sugar for the code below.
    // The behave in **exactly** the same way.
    // take: function take(arr, n) {
    //   return arr.slice(0, n);
    // }
  
    // Exercise: To Object
    toObject(arr) {
      const newObj = {};
  
      for (let pair of arr) {
        // console.log(pair);
        newObj[pair[0]] = pair[1];
      }
  
      return newObj;
    }
  };
  
  // Example usage:
  
  console.log("Using ArrayUtils");
  console.log(ArrayUtils.last([100, 200, 300, 400]));
  console.log(ArrayUtils.first([100, 200, 300, 400]));
  console.log(ArrayUtils.take([100, 200, 300, 400], 2));
  console.log(ArrayUtils.take([100, 200, 300, 400], 3));
  
  const pairs = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  console.log(ArrayUtils.toObject(pairs));
  
  // Keyword "this"
  // `this` is used inside of methods to get the object that
  // owns the method.
  
  // Demo: A Counter
  // Exercise: Configurable Step
  const counter = {
    count: 0,
    step: 1,
    setStep(step) {
      this.step = step;
    },
    inc() {
      this.count += this.step;
      return this.count;
    },
    set(count) {
      this.count = count;
    },
    dec() {
      this.count -= this.step;
      return this.count;
    },
    now() {
      return this.count;
    }
  };
  
  const counterCopy = Object.assign({}, counter);
  
  console.log("counter:");
  console.log(counter);
  counter.setStep(5);
  counter.inc();
  console.log(counter);
  counter.inc();
  console.log(counter);
  counter.inc();
  console.log(counter);
  
  // console.log("counterCopy:");
  // console.log(counterCopy);
  // counterCopy.inc();
  // console.log(counterCopy);
  // counterCopy.inc();
  // console.log(counterCopy);
  
  // console.log("counter:");
  // console.log(counter);
  