# x = 1
# while x <= 50
#     puts x
#     x += 1
# end


# count = 1
# while count <= 50
#   # Ruby doesn't automatically convert between types
#   # like Javascript. This means that Ruby is strongly typed
#   # and JS is weakly typed.
#   print count.to_s + ", "
#   count += 1
# end

# print "How many times should I repeat?\n"
# number = gets.chomp.to_i
# i = 0
# while i < number
#   print "Hello World! "
#   i += 1
# end

# number = 0
# while number <= 60
#     if number % 2 != 0
#         puts number
#     end
#     number += 1
# end 

# Solution 3
num = 1
while num <= 60
  puts num if num.odd?
  num += 1
end