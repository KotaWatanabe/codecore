// JS: Constructors & Prototypes

// Functions that intended to be used as constructors
// have their names capitalized.
function Dog(name, age) {
    // When a function is called as a constructor,
    // its "this" will be an empty object named
    // after the constructor. We say this object
    // is an instance of the constructor.
    this.name = name;
    this.age = age;
  }
  
  // When calling a function with the "new", it used
  // as a constructor.
  const sonicSam = new Dog("Sonic Sam", 8);
  
  // When using a function as a constructor, its "return"
  // is ignored.
  
  // Arrow functions can't be used as constructors
  
  const Cat = (name, age) => {
    this.name = name;
    this.age = age;
  };
  
  // new Cat("Jet Jane", 8)
  // The above will throw an error:
  // Uncaught TypeError: Cat is not a constructor
  // at <anonymous>:1:1
  
  // Demo: Constructed Counter
  
  // All kinds of functions can have default arguments.
  // An argument with a default will have its default value
  // if the argument is omitted.
  
  // function Counter(count = 0, step = 1) {
  //   // A default argument saves use the trouble
  //   // of writing the following line:
  //   // if (count === undefined) { count = 0 }
  
  //   if (typeof count !== "number") {
  //     // Throwing an error causes the program crash
  //     // and will show a red error message on the screen
  //     throw new Error("first arg. must be a number");
  //   }
  
  //   this.count = count;
  //   this.step = step;
  
  //   this.inc = function() {
  //     this.count += this.step;
  //     return this;
  //   };
  
  //   this.dec = function() {
  //     this.count -= this.step;
  //     return this;
  //   };
  
  //   this.now = function() {
  //     return this.count;
  //   };
  // }
  
  // Prototypes
  
  // The prototype is used to share methods and properties
  // between instances of a constructor without copying
  // method for each instance created.
  // In the code below, we add the method "bark" which can
  // be used with any instance of a Dog.
  Dog.prototype.bark = function() {
    return `${this.name} barks "Bork bork bork!"`;
  };
  
  // You can find the prototype of an object in several
  // different ways.
  
  const moneybagsMichael = new Dog("Moneybags Michael", 10);
  
  sonicSam.__proto__; // Returns prototype of all doggo instances
  
  // moneybagsMichael and sonicSam are both instances
  // of Dog and therefore they have the exact same
  // prototype
  moneybagsMichael.__proto__ === sonicSam.__proto__; // true
  
  // moneybagsMichael and the array [1,2] have different
  // constructors (i.e. Dog & Array) therefore their
  // prototypes are different. If they were the same,
  // we'd be able to use Array methods (e.g. slice, map
  // , join, etc) on moneybagsMichael.
  moneybagsMichael.__proto__ === [1, 2].__proto__; // false
  
  // If you know the constructor of an object, you can
  // access the object's prototype through the constructor.
  
  Dog.prototype === sonicSam.__proto__; // true
  
  Dog.__proto__ === sonicSam.__proto__; // false
  
  // Demo: Prototypical Counter
  
  function Counter(count = 0, step = 1) {
    this.count = count;
    this.step = step;
  }
  
  Counter.prototype.inc = function() {
    this.count += this.step;
    return this;
  };
  
  Counter.prototype.dec = function() {
    this.count -= this.step;
    return this;
  };
  
  Counter.prototype.now = function() {
    return this.count;
  };
  
  // Modeling Data & Behaviour with Constructors
  
  // Demo: Doggo Fighter
  if (false) {
    function Dog(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Dog.prototype.bark = function() {
      return `${this.name} barks "Bork bork bork!"`;
    };
  
    Dog.prototype.fetch = function(thing) {
      return `${this.name} retrieved a ${thing}`;
    };
  
    function DogFighter(name, age, specialAbility) {
      this.name = name;
      this.age = age;
      this.specialAbility = specialAbility;
    }
  
    // The following method will set the prototype of the first
    // argument to the prototype supplied in the second argument.
    // This means that the first argument will now inherit from
    // the second argument.
    // In this case, the DogFighter.prototype will inherit
    // from the Dog.prototype
    Object.setPrototypeOf(DogFighter.prototype, Dog.prototype);
  
    DogFighter.prototype.fight = function(dog) {
      const winner = [this.name, dog.name][Math.floor(Math.random() * 2)];
      return `${winner} won!`;
    };
  }
  
  // Class syntax for Constructors & Prototypes
  
  class CDog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    bark() {
      return `${this.name} barks "Bork bork bork!"`;
    }
  
    fetch(thing) {
      return `${this.name} retrieved a ${thing}`;
    }
  }
  
  // To do prototype inheritance, use "extends" when
  // creating class as shown below. Here DogFighter
  // 's prototype inherits from Dog's prototype.
  class CDogFighter extends CDog {
    constructor(name, age, specialAbility) {
      // Using `super` inside of a constructor
      // will call this constructor for the parent class.
      // In this case, calling super calls the constructor
      // of the Dog class.
      super(name, age);
      this.specialAbility = specialAbility;
    }
  
    fight(dog) {
      const winner = [this.name, dog.name][Math.floor(Math.random() * 2)];
      return `${winner} won!`;
    }
  }
  
  const bobBuilder = new CDog("Bob Builder", 11);
  const drillBitDarel = new CDogFighter("Drill Bit Darel", 7, "Drill!");
  