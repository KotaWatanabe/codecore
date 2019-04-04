def get_user_info
    puts "What is your firstname"
    firstname = gets.chomp.capitalize
    puts "What is your lastname"
    lastname = gets.chomp.capitalize
    puts "Where was you born"
    city = gets.chomp.capitalize
    puts "How old are you"
    age = gets.chomp
    info = {
    "first name":firstname,
    "last name":lastname,
    "birth city":city,
    "age":age,
}
    info
end