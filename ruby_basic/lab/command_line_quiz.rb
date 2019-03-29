result = 0
puts "How many sides does a hexagon have?"

answers1 = ["- five","- six","- seven"];
i = 0

for i in 0..2
    print (i + 1)
    puts answers1[i]
end

puts "Enter the correct number:"
answer1 = gets.to_f
if answer1 == 2 
    result += 1
end

puts "How many sides does a square have?"

answers2 = ["- four","- five","- six"];
i = 0

for i in 0..2
    print (i + 1)
    puts answers2[i]
end
puts "Enter the correct number:"
answer2 = gets.to_f
if answer2 == 1
    result += 1
end

puts "How many sides does a triangle have?"

answers3 = ["- three","- four","- five"];
i = 0

for i in 0..2
    print (i + 1)
    puts answers3[i]
end

puts "Enter the correct number:"
answer3 = gets.to_f
if answer3 == 1
    result += 1
end

puts result

if result == 3
    puts "You scored 100%, you get#{result} out of 3 questions correctly"
elsif result == 2
    puts "You scored 66%, you get#{result} out of 3 questions correctly"
elsif result == 1
    puts "You scored 33%, you get#{result} out of 3 questions correctly"
else 
    puts "You scored 0%, you get#{result} out of 3 questions correctly"
end



# answer from anson

correct = 0
puts "How many sides does a hexagon have?"
puts
puts "1 - five"
puts "2 - six"
puts "3 - seven"
puts
puts "Enter the correct number:"
answer = gets.to_i
if answer == 2
    correct += 1
    puts "That's correct!"
else
    puts "Sorry that's not right"
end
gets
puts "Who is the creator of Ruby?"
puts 
puts "1 - Yukihiro Matsumoto"
puts "2 - Ryan Dahl"
puts "3 - Linus Torvalds"
puts
puts "Enter the correct number:"
answer = gets.to_i
if answer == 1
    correct += 1
    puts "That's correct!"
else
    puts "Sorry that's not right"
end
gets
puts "Which HTML tag is used for links?"
puts 
puts "1 - <img>"
puts "2 - <a>"
puts "3 - <div>"
puts
puts "Enter the correct number:"
answer = gets.to_i
if answer == 2
    correct += 1
    puts "That's correct!"
else
    puts "Sorry that's not right"
end
gets
puts "You scored #{(correct / 3.to_f * 100).round(2)}% and answered #{correct} out of 3 questions correctly"

