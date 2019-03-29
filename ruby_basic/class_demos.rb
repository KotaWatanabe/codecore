# To output to the terminal like 'console.log'
# use print:
print("Hello World")
# print doesn't add a new line (i.e. \n)

puts("Hello from puts!")
# Adds a new line (i.e. \n)

p("I'm printing with p")
# Prints a value how ruby sees it. Useful for debugging. 
# Similar to 'console.dir'

# Bracket syntax for method arguments is optional e.g.
# We can also do:
print "Hello World"

# comments

# This is a comment in ruby

=begin
 This is a multiline comment
 in ruby
=end

# Most people will
# just write multiline comments
# like this.

print "hello world" # Inline comments work too.

# variables

# Ruby convention for vairable naming is snake_case
first_name = "Brett"
a = 1
b = a * 10
a1 = 10

# 1a = 12 # this will give you an error.

# If you start a variable name with a capital letter, it's
# considered a constant. Constants in ruby can be changed,
# but Ruby will give you a warning. Convention is all caps

MAX_PASSWORD_ATTEMPTS = 5 

# gets

print "What is your name "
name = gets
puts 'Hello ' + name

# Objects have a class. To the know the class/type of value, we can
# use the .class method

1.class # => Integer 
3.14.class # => Float
"My string".class # => String

# Strings
"I'm a string"
'I\'m also a string'

# String interpolation

# You can use string interpolation onlu with double quotes.
# Strings defined with single quotes are considered literal strings.

# Use #{ expression } inside a string to interpolate a ruby
# expression.

"#{1 + 10} is not equal to #{8 + 8}"
# => "11 is not equal to 16"
'#{1 + 10} is not equal to #{8 + 8}'
#  => #{1 + 10} is not equal to #{8 + 8}

name = "John"
puts "Hello #{name}"

# To capitalize a string use:
"my string".capitalize
# To capitalize eery letter:
"my string".upcase
# can also use:
"my STRING".downcase
# To swap the casing of a string:
"my STRING".swapcase

# To remove duplicate neighbouring characters in a string.
# Use .squeeze:

"Hellllllllllllo mmmmmyyyyy nnnammmmeee issss".squeeze
# => "Helo my name is"

# To search and replace a part of a string, use .sub or .gsub

str = "My name is Steve and your name is Bob"
str.sub("name", "title")
str.gsub("name", "title")

# Numbers and math

# Integers and Floats mostly
1
10
100
100_300 # In Ruby '_' are ignored in numbers
100_300_000_000

#  to convert numbers
1.to_f # => 1.0
2.5.to_i # => 2

# operations
1 + 1
1 - 1
1 / 1
1 * 1
1 % 1
1 ** 2

# modulo
3 % 2
# => 1
2 % 2
# => 0

a = 2 
b = 3 ** a

# Flow control

if true
    puts "When condition is true"
  end # we terminate code blocks with end

  if false
    puts "when condition is false"
  else
    puts "The default condition with else"
  end
  
  number = rand(101)

  if number > 90
    puts 'the number is large'
  elsif number > 60
    puts 'the number is medium'
  elsif number > 40
    puts 'the number is small'
  else
    puts 'the number is very small'
  end

  # Inline conditionals
# You can do single line conditionals, but write the
# if at the end of the line.
puts "It's true" if true

print "What is the temperature today? "
temp = gets.to_i

if temp < 10
  puts 'It is cold'
end

puts "It is cold" if temp < 10
puts "It is cold" unless temp >= 10

# Loops

# while loop
x = 1
while x <= 100
  puts x
  x += 1
end

count = 1
while count <= 50
  # Ruby doesn't automatically convert between types
  # like Javascript. This means that Ruby is strongly typed
  # and JS is weakly typed.
  print count.to_s + ", "
  count += 1
end

print "How many times should I repeat?\n"
number = gets.chomp.to_i
i = 0
while i < number
  print "Hello World! "
  i += 1
  # You can use the keyword 'break' to stop any 
  # kind of loop early.
  break if i > 1000
end

# loop
x = 0
loop do
  x += 1
  puts x
  break if x == 13
end

# for loop

# A range with .. includes the last number, where as ... does
# not include it. e.g.
# 1..100 includes 100
# 1...100 does not.
for number in 1..100 
    puts number
end