#  Methods

#  Demo Five by five

# Define a method with the 'def' keyword
# Methods that return a boolean generally end with
# '?' (convention, not enforced by the language)
def by_five?(num)
    # Returning is implicit. The last expression
    # in a method's body will always be returned.
    num % 5 == 0
  end
  
  # To call method you can use or not use brackets:
  by_five?(5) # => true
  by_five? 6 # => false
  
  # You must always call a method with all of its
  # required arguments.
  # by_five?

  # Using return

def my_method(a, b)
    return a * b
    # As in Javascript, the lines following
    # return are ignored.
    a + b
  end

# multiply(2, 3)
# => 6
# multiply(2)
# => 2

# Variadic Methods
#  A method that can take any number of arguments

def my_args(first, *args, last)
    # Use the splat (i.e. *) in front of an
    # argument to take in any number of args
    # into an array (like gather in JS  i.e. ...).
    # Unlike gather, it can be placed at the
    # beginning, the middle or the end of
    # a list of arguments.
    puts("first: #{first}")
    puts("args: #{args}")
    puts("last: #{last}")
  end

#  product method

def product(first, *nums)
    result = first
    nums.each { |x| result *= x }
    result
  end

  def product(*nums)
    # reduce can take an optional argument for the
    # intial value. If not given, it will take
    # the first list element as the initial value.
    nums.reduce(1) do |accumulator, num|
      # In reduce, on the first iteration
      # accumulator is the initial value,
      # 1 in this case
      accumulator * num
      # In the following iterations, accumulator
      # will be the result of the previous iteration.
    end
  end
  
  product(1,2,3,4) # => 24
# Splat can also be used to spread an array pf
# elements of arguments to a method call
product(*[3, 3, 3])
array = [3,3,3]
# product(array)
# => TypeError: Array can't be coerced into Integer
product(*array) # => 27

# Blocks

# All methods can take a block as an argument and
# only one block at a time.
def my_method
    puts "we are in the method"
  end
  
  my_method { puts "The block is called"}
  
  def my_method(x)
    puts "Before Block"
    # To execute a block that's been passed to a
    # method, use the "yield" keyword. This is
    # like calling the block.
    # yield will return the last expresion from the
    # block
    yield_return = yield(x)
    puts "Yielded block returned: #{yield_return}"
    puts "After block"
  end

  #  Yield can be used multiple times

def print_twice
    yield
    yield
  end
  
  print_twice {puts "Hello"}
  
  # If you try to yield without a block you will
  # get a no block given error
  
  print_twice # LocalJumpError: no block given (yield)
  
  # You can check if a block has been passed wiht
  # the block_given? method
  
  def do_something_with_block
    return "no block given" unless block_given?
    yield
  end

  #  Exercise: Implementing each

def each(arr)
    for val in arr
      yield(val)
    end
  end

#  Creating lambdas
#  Lambda is Ruby's name for an anonymous function
# Write it like so:

add_five = lambda { |n| n + 5 }
power_2 = ->(n) { n ** 2 }

# Calling a lambda
add_five.call(5)
power_2.call(5)
#  If you pass the wrong number of arguments to a
# lambda, it will raise an exception, just like
# a regular method.

# Using it as a block
# You can pass a lambda as a method argument
# prefixed with & to call it as a block (i.e.
# using yield).
# This doesn't work with regular methods only
# procs and lambdas

map([1,2,3,4,5], &power_2)

# Procs
# There is no dedicated Lambda class. A lambda is
# just a special kind of proc

my_proc = Proc.new { |x| puts x }

# Differences between procs and lambdas

a = Proc.new { |x,y| puts "I don't care about arguments"}

# Procs and lambdas also handle return differently.
# A lambda will return normally, like a regular method.
# Procs on the other hand return from the method enclosing the proc.

# Named arguments

# In ruby methods can take named arguments
# They must be given a default value

def add(first: 0, second: 1)
    # The argument first has a default of 0
    # second has a default of 1
    first + second
  end
  
  add # => 1
  add(0, 2)
  #  => ArgumentError: wrong number of arguments (given 2, expected 0)

# To use named arguments you must refer to them by name
add(first: 10) # => 11
add(first: 10, second: 10) # => 20
add(second: 10) # => 10