 # Exercise up and down
 string = "Hello, Awesome CodeCore Students"

 array = []
 
  string.split.each.with_index do |val, index|
    # To get the index when using .each (and friends)
    # add the method .with_index
    if index.even?
      array << val.downcase
    else
      array << val.upcase
    end
  end
 
 # .join(" ") will join the elements of the array into a
 # a string separated by " "
  print array.join(" ")

   # looping with .map

# .map will return the array modified by whatever is
# done in the block (unlike .each, which returns the
# orginal array)
array = [1,2,3,4,5]
array.map do |val|
  val ** 2
end
# => [1, 4, 9, 16, 25]
# array => [1,2,3,4,5]

# If we want to mutate the original array
array = [1,2,3,4,5]
array.map! do |val|
  val ** 2
end
# => [1, 4, 9, 16, 25]
# array => [1, 4, 9, 16, 25]

# Another way to write .map and other ruby methods
# that tale a block, is single line blocks using braces

array.map { |val| val ** 2 }
# is equivalent to:
array.map do |val|
  val ** 2
end

# For a more comprehenisve look at enumerable methods
# like map, each etc. go to:
# https://ruby-doc.org/core-2.5.1/Enumerable.html


