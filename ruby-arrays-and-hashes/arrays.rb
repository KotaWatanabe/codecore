# Array Docs https://ruby-doc.org/core-2.5.1/Array

# How to define an array in Ruby:
my_array = []
my_array_2 = Array.new # => []
my_array_3 = Array.new(2) #=> [nil, nil]

array = [1, "Hi", "Hello"]
# To read a value from an array, use bracket notation
# just like JS
array[1] # => "Hi"
array[10] # => 

# To replace a value at an index, use bracket notation
# with assignment (i.e. []=)
array[0] = "Hola"

# shovel operator <<
# One way to push values in an array is to use the
# shovel operator (<<)

array << "Bonjour"

# Shovel returns the array, making it chainable

array << "Hey" << "Salut"

# You can also use .push in Ruby. It also returns the array.
array.push("Yo").push("Sup")

# Use .include?() to test if a value is inside of an array.
# Returns 'true' if it is. This like .includes in JS.

array.include?('Hello')
array.include?(999)

# To get the size of an array, there are 3 methods:
array.length
array.count
array.size

# To turn a multidimensional array of any depth
# into a one dimensional array, use .flatten

a = [1,[2,[3,[4,[5]]]]]
a.flatten # => [1, 2, 3, 4, 5]
a # => [1,[2,[3,[4,[5]]]]]
a.flatten! # => [1, 2, 3, 4, 5]
a # => [1, 2, 3, 4, 5]

# Use .unshift to mutate and add at the beginning of
# an array. This is the opposite of .push, and is
# chainable
array.unshift('Konnichiwa')

# To remove an item from the beginning of an array,
# use .shift. It returns the removed element. and mutates
# the array.
array.shift

array.pop # remove last item from an array
array.pop(2) # remove the last 2 items from an array.

string = "a,b,,c,d,e,f"
string.split(",") # => => ["a", "b", "", "c", "d", "e", "f"]

# Iterating through arrays

b = ["a", "b", "c", "d"]

# Using a for loop
for val in b
  puts val
end

#  .each
b.each do |val|
    puts val * 5
  end
  # In js: b.forEach(function(num) { console.log(num * 5); });

  # Exercise: loop through an array of 5 numbers and print
# them squared

array = [1,2,3,4,5]
array.each do |element|
  puts element ** 2
  # puts element * element
end

# exercise print elements of multidimensional array squared

array = [[1,7,3], [4,4,6], [7,2,9]]

array.each do |sub_arr|
  sub_arr.each do |val|
    puts val ** 2
  end
end

array.flatten.each do |val| 
    puts val ** 2
end