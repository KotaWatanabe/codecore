puts "What is your firstname"
firstname = gets.chomp
puts "What is your lastname"
lastname = gets.chomp
puts "Where was you born"
city = gets.chomp
puts "How old are you"
age = gets.chomp

person = {
    "first name":firstname,
    "last name":lastname,
    "birth city":city,
    "age":age,
}

person.each do |key, value|
    p "Your #{key} is #{(value).capitalize}"
end