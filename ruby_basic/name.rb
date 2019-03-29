print "What is your first name?"
# chomp is a string method, that removes the last new line
# character at the end of the string
first_name = gets.chomp.capitalize
print "What is your last name?"
last_name = gets.chomp.capitalize
full_name = first_name +" "+ last_name
print full_name