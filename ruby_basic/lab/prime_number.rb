require 'prime'
puts "type number"
num = gets.to_i
result = Prime.first(num)
puts result